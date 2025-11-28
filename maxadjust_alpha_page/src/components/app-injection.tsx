'use client'

import { MessageSquare, Pencil, Trash2 } from 'lucide-react'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { renderToStaticMarkup } from 'react-dom/server'
import { useRouter } from 'next/navigation'

//#region Canvas interaction experience.

//#region Constants

enum ElementEditingElementType {
  // Text elements
  P = 'P',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  BLOCKQUOTE = 'BLOCKQUOTE',
  CODE = 'CODE',
  PRE = 'PRE',
  LI = 'LI',
  FIGCAPTION = 'FIGCAPTION',
  LABEL = 'LABEL',

  // Media elements
  IMG = 'IMG',
  VIDEO = 'VIDEO',

  // Link
  A = 'A',

  // Actionable elements
  BUTTON = 'BUTTON',
}

enum ElementEditingElementTypeToCheckForParent {
  SPAN = 'SPAN',
}

enum ElementEditingElementTypeAdditionalType {
  DIV = 'DIV',
  SECTION = 'SECTION',
  HEADER = 'HEADER',
  FOOTER = 'FOOTER',
}

const allowedElementTypes: string[] = Object.values(ElementEditingElementType)
const allowedElementTypesToCheckForParent: string[] = Object.values(
  ElementEditingElementTypeToCheckForParent
)

const typesToIgnoreCursorOverride: string[] = [
  ElementEditingElementType.BUTTON,
  ElementEditingElementType.A,
  ElementEditingElementType.IMG,
  ElementEditingElementType.VIDEO,
]

const sectionTagNames: string[] = [
  ElementEditingElementTypeAdditionalType.SECTION,
  ElementEditingElementTypeAdditionalType.HEADER,
  ElementEditingElementTypeAdditionalType.FOOTER,
]

const typesToIgnoreCursorOverrideNotPostfix = typesToIgnoreCursorOverride
  .map((type) => `:not(${type.toString().toLowerCase()})`)
  .join('')

const ALPHA_ELEMENT_MENU_ATTRIBUTE = 'alpha-element-menu'

const ELEMENTS_SEARCH_DEPTH_LIMIT = 5

//#endregion

const useCanvasInteractionBootstrapStyles = () => {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .alpha-element-hover${typesToIgnoreCursorOverrideNotPostfix}:not(a *):not(button *):not([role="button"] *):not([onclick] *) {
        cursor: default !important;
      }
      .alpha-element-click${typesToIgnoreCursorOverrideNotPostfix}:not(a *):not(button *):not([role="button"] *):not([onclick] *) {
        cursor: default !important;
      }
      .alpha-menu-button {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 8px !important;
        background: white !important;
        border: none !important;
        border-radius: 4px !important;
        cursor: pointer !important;
        color: #374151 !important;
        transition: background-color 0.15s ease !important;
      }
      .alpha-menu-button:hover {
        background: #f3f4f6 !important;
      }
      .alpha-menu-button svg {
        display: block !important;
      }
      .alpha-section-menu-button {
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
        padding: 10px 16px !important;
        background: white !important;
        border: none !important;
        cursor: pointer !important;
        color: #374151 !important;
        transition: background-color 0.15s ease !important;
        font-size: 13px !important;
        font-weight: 500 !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        width: 100% !important;
        text-align: left !important;
      }
      .alpha-section-menu-button:hover {
        background: #f3f4f6 !important;
      }
      .alpha-section-menu-button svg {
        display: block !important;
        flex-shrink: 0 !important;
      }
      .alpha-section-highlight {
        position: relative !important;
      }
      .alpha-editing-badge {
        position: absolute !important;
        top: -6px !important;
        left: 0 !important;
        background: rgba(120, 120, 120, 0.75) !important;
        color: white !important;
        padding: 2px 4px !important;
        border-radius: 2px !important;
        font-size: 0.6rem !important;
        font-weight: 600 !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        z-index: 2 !important;
        pointer-events: none !important;
        line-height: 1 !important;
      }
      .alpha-editing-badge {
        display: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])
}

const useCanvasInteractionCursorHandler = (
  isElementEditingEnabled: boolean,
  setIsElementEditingEnabled: (isElementEditingEnabled: boolean) => void,
  isSectionSelectionEnabled: boolean,
  setIsSectionSelectionEnabled: (isSectionSelectionEnabled: boolean) => void
) => {
  //#region Element edit

  const selectedElementRef = useRef<HTMLElement | null>(null)

  //#region Select element

  const selectElementFromMouseEvent = useCallback(
    (
      mouseEvent: MouseEvent,
      allowedElementTypesArg: string[] = allowedElementTypes
    ): HTMLElement | null => {
      // Helper functions
      const isTextOnlyElement = (element: HTMLElement): boolean => {
        const inlineTextElements = [
          'SPAN',
          'STRONG',
          'EM',
          'B',
          'I',
          'U',
          'A',
          'SMALL',
          'SUB',
          'SUP',
          'MARK',
          'CODE',
          'ABBR',
          'TIME',
          'S',
          'DEL',
          'INS',
        ]

        if (!element.textContent?.trim()) {
          return false
        }

        for (let i = 0; i < element.children.length; i++) {
          const child = element.children[i]

          if (!inlineTextElements.includes(child.tagName)) {
            return false
          }

          if (!isTextOnlyElement(child as HTMLElement)) {
            return false
          }
        }

        return true
      }

      const parentElementCheckHelper = (
        element: HTMLElement
      ): HTMLElement | null => {
        let currentElement = element.parentElement
        let level = 0
        const levelsToCheck = 1

        while (currentElement && level < levelsToCheck) {
          if (elementCheckHelper(currentElement)) {
            return currentElement
          }
          currentElement = currentElement.parentElement
          level++
        }

        if (
          element.tagName === ElementEditingElementTypeToCheckForParent.SPAN
        ) {
          if (isTextOnlyElement(element)) {
            return element
          }
        }

        return null
      }

      const elementCheckHelper = (element: HTMLElement): HTMLElement | null => {
        // <div> with only text content (possibly wrapped in inline elements) can be edited
        if (
          element.tagName === ElementEditingElementTypeAdditionalType.DIV &&
          isTextOnlyElement(element)
        ) {
          return element
        }

        if (allowedElementTypesArg.includes(element.tagName)) {
          return element
        }

        return null
      }

      // Main logic
      const elementsAtPoint = document.elementsFromPoint(
        mouseEvent.clientX,
        mouseEvent.clientY
      )

      for (let i = 0; i < ELEMENTS_SEARCH_DEPTH_LIMIT; i++) {
        const elementToCheck = elementsAtPoint[i]

        if (elementToCheck instanceof HTMLElement) {
          if (elementToCheck.hasAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE)) {
            return null
          }

          const elementTagName = elementToCheck.tagName

          if (allowedElementTypesToCheckForParent.includes(elementTagName)) {
            const parentElementOrNull = parentElementCheckHelper(elementToCheck)
            if (parentElementOrNull !== null) {
              return parentElementOrNull
            }
          } else {
            const elementOrNull = elementCheckHelper(elementToCheck)
            if (elementOrNull !== null) {
              return elementOrNull
            }
          }
        }
      }

      return null
    },
    []
  )

  //#endregion

  //#region Hovering element label.

  const getHoveringElementLabel = (element: HTMLElement): string => {
    const tagName = element.tagName

    switch (tagName) {
      case ElementEditingElementType.P:
      case ElementEditingElementType.H1:
      case ElementEditingElementType.H2:
      case ElementEditingElementType.H3:
      case ElementEditingElementType.H4:
      case ElementEditingElementType.H5:
      case ElementEditingElementType.H6:
      case ElementEditingElementType.BLOCKQUOTE:
      case ElementEditingElementType.CODE:
      case ElementEditingElementType.PRE:
      case ElementEditingElementType.LI:
      case ElementEditingElementType.LABEL:
      case ElementEditingElementTypeAdditionalType.DIV:
      case ElementEditingElementTypeToCheckForParent.SPAN:
        return 'TEXT'
      case ElementEditingElementType.A:
        return 'LINK'
      case ElementEditingElementType.BUTTON:
        return 'BUTTON'
      case ElementEditingElementType.IMG:
        return 'IMAGE'
      case ElementEditingElementType.VIDEO:
        return 'VIDEO'
      default:
        return tagName
    }
  }

  const setElementLabel = (element: HTMLElement, labelText: string) => {
    let label = document.getElementById('alpha-element-label')

    if (!label) {
      label = document.createElement('div')
      label.id = 'alpha-element-label'
      document.body.appendChild(label)
    }

    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    label.textContent = labelText
    label.style.cssText = `
      position: absolute !important;
      top: ${rect.top + scrollTop - 18}px !important;
      left: ${rect.left + scrollLeft - 2}px !important;
      background: rgba(26, 121, 228, 0.85) !important;
      color: white !important;
      padding: 2px 6px !important;
      border-radius: 3px !important;
      font-size: 10px !important;
      font-weight: 600 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      z-index: 2147483647 !important;
      pointer-events: none !important;
      line-height: 1.2 !important;
      white-space: nowrap !important;
      letter-spacing: 0.5px !important;
    `
  }

  const removeElementLabel = () => {
    const label = document.getElementById('alpha-element-label')
    if (label) {
      label.remove()
    }
  }

  //#endregion

  //#region Element action menu

  const createElementMenu = (element: HTMLElement) => {
    // Remove existing menu if any
    removeElementMenu()

    const menu = document.createElement('div')
    menu.id = 'alpha-element-menu'
    menu.setAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE, 'true')

    // Edit button
    const editButton = document.createElement('button')
    editButton.className = 'alpha-menu-button'
    editButton.title = 'Edit'
    editButton.setAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE, 'true')
    editButton.innerHTML = renderToStaticMarkup(<Pencil size={16} />)
    editButton.onclick = (e) => {
      e.stopPropagation()
      buildAndSendElementSelectMessage(element, 'EDIT')
      removeElementMenu()
    }

    // Chat button
    const chatButton = document.createElement('button')
    chatButton.className = 'alpha-menu-button'
    chatButton.title = 'Chat'
    chatButton.setAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE, 'true')
    chatButton.innerHTML = renderToStaticMarkup(<MessageSquare size={16} />)
    chatButton.onclick = (e) => {
      e.stopPropagation()
      buildAndSendElementSelectMessage(element, 'CHAT')
      removeElementMenu()
    }

    // // Separator between chat and delete buttons
    // const separator = document.createElement('div')
    // separator.setAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE, 'true')
    // separator.style.cssText = `
    //   width: 1px !important;
    //   height: 24px !important;
    //   background-color: #e5e7eb !important;
    //   margin: 0 4px !important;
    // `

    // // Delete button
    // const deleteButton = document.createElement('button')
    // deleteButton.className = 'alpha-menu-button'
    // deleteButton.title = 'Delete'
    // deleteButton.setAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE, 'true')
    // deleteButton.innerHTML = renderToStaticMarkup(
    //   <Trash2 color="#dc2626" size={16} />
    // )
    // deleteButton.onclick = (e) => {
    //   e.stopPropagation()
    //   removeElementMenu()
    // }

    menu.appendChild(editButton)
    menu.appendChild(chatButton)
    // menu.appendChild(separator)
    // menu.appendChild(deleteButton)
    document.body.appendChild(menu)

    // Position the menu
    positionElementMenu(element)
  }

  const positionElementMenu = (element: HTMLElement) => {
    const menu = document.getElementById('alpha-element-menu')
    if (!menu) return

    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    const topPosition = rect.top - 50

    // If menu would exceed the screen at the top, position it at the bottom-left instead
    const shouldPositionAtBottom = topPosition < 0
    const finalTop = shouldPositionAtBottom
      ? rect.bottom + scrollTop + 8
      : rect.top + scrollTop - 50

    // Ensure menu stays within window bounds
    let leftPosition = rect.left + scrollLeft - 2

    if (leftPosition < scrollLeft) {
      leftPosition = scrollLeft + 8 // 8px padding from edge
    }

    menu.style.cssText = `
      position: absolute !important;
      top: ${finalTop}px !important;
      left: ${leftPosition}px !important;
      display: flex !important;
      align-items: center !important;
      gap: 4px !important;
      background: white !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      border-radius: 6px !important;
      padding: 3px !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
      z-index: 2147483647 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    `
  }

  const removeElementMenu = () => {
    const menu = document.getElementById('alpha-element-menu')
    if (menu) {
      menu.remove()
    }
  }

  //#endregion

  //#region Element hover/click overlay

  const createOrUpdateElementOverlay = (element: HTMLElement, id: string) => {
    let overlay = document.getElementById(id)

    if (!overlay) {
      overlay = document.createElement('div')
      overlay.id = id
      document.body.appendChild(overlay)
    }

    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    overlay.style.cssText = `
      position: absolute !important;
      top: ${rect.top + scrollTop - 2}px !important;
      left: ${rect.left + scrollLeft - 2}px !important;
      width: ${rect.width + 4}px !important;
      height: ${rect.height + 4}px !important;
      border: 2px solid rgba(26, 121, 228, 0.85) !important;
      border-radius: 2px !important;
      pointer-events: none !important;
      z-index: 2147483646 !important;
      box-sizing: border-box !important;
    `
  }

  const removeElementHighlightOverlay = (id: string) => {
    const overlay = document.getElementById(id)
    if (overlay) {
      overlay.remove()
    }
  }

  const updateHoverStylesForElement = useCallback((element: HTMLElement) => {
    if (!element.classList.contains('alpha-element-hover')) {
      element.classList.add('alpha-element-hover')
    }

    createOrUpdateElementOverlay(element, 'alpha-element-hover-overlay')

    const labelText = getHoveringElementLabel(element)
    setElementLabel(element, labelText)
  }, [])

  const removeHoverStylesForElement = useCallback((element: HTMLElement) => {
    if (element.classList.contains('alpha-element-hover')) {
      element.classList.remove('alpha-element-hover')
    }

    removeElementHighlightOverlay('alpha-element-hover-overlay')
    removeElementLabel()
  }, [])

  const updateClickStylesForElement = useCallback((element: HTMLElement) => {
    if (!element.classList.contains('alpha-element-click')) {
      element.classList.add('alpha-element-click')
    }

    createOrUpdateElementOverlay(element, 'alpha-element-click-overlay')
  }, [])

  const removeClickStylesForElement = useCallback((element: HTMLElement) => {
    if (element.classList.contains('alpha-element-click')) {
      element.classList.remove('alpha-element-click')
    }

    removeElementHighlightOverlay('alpha-element-click-overlay')
  }, [])

  //#endregion

  const buildAndSendElementSelectMessage = useCallback(
    (element: Element, messageType: string) => {
      const nearestSection = element.closest('section')

      let sectionHtml = null
      if (nearestSection) {
        const openingTag = nearestSection.outerHTML.split('>')[0] + '>'
        const closingTag = `</${nearestSection.tagName.toLowerCase()}>`
        sectionHtml = `${openingTag}\n  ...\n${closingTag}`
      }

      const message = {
        type: 'ALPHA_ELEMENT_EDITING',
        targetOuterHtml: element.outerHTML,
        section: sectionHtml,
        messageType,
      }

      window.parent.postMessage(message, '*')
    },
    []
  )

  const sendSelectElementCancellationMessage = useCallback(() => {
    const message = {
      type: 'ALPHA_ELEMENT_EDITING',
      targetOuterHtml: '',
      section: '',
    }
    window.parent.postMessage(message, '*')
  }, [])

  const removeAllElementEditingInteractionState = () => {
    selectedElementRef.current = null

    removeElementLabel()
    removeElementMenu()

    const hoveredElement = document.querySelector('.alpha-element-hover')
    if (hoveredElement && hoveredElement instanceof HTMLElement) {
      removeHoverStylesForElement(hoveredElement)
    }

    const clickedElement = document.querySelector('.alpha-element-click')
    if (clickedElement && clickedElement instanceof HTMLElement) {
      removeClickStylesForElement(clickedElement)
    }
  }

  useEffect(() => {
    if (!isElementEditingEnabled) {
      removeAllElementEditingInteractionState()

      const setEventHandlers = (): (() => void) => {
        const handleClick = (event: MouseEvent) => {
          const element = selectElementFromMouseEvent(event)
          if (element) {
            buildAndSendElementSelectMessage(element, 'SELECT_DURING_OFF_STATE')
          }
        }

        window.addEventListener('click', handleClick, { capture: true })

        return () => {
          window.removeEventListener('click', handleClick, { capture: true })
        }
      }

      const removeEventHandlers = setEventHandlers()

      return removeEventHandlers
    }

    const setEventHandlers = (): (() => void) => {
      //#region Hovering on canvas

      // Store reference to the currently labeled element for scroll updates
      let currentHoveredElement: HTMLElement | null = null

      const updateHoverState = () => {
        if (currentHoveredElement) {
          updateHoverStylesForElement(currentHoveredElement)
        }
      }

      const updateClickedElementState = () => {
        if (selectedElementRef.current) {
          positionElementMenu(selectedElementRef.current)
          updateClickStylesForElement(selectedElementRef.current)
        }
      }

      const handleMouseMove = (event: MouseEvent) => {
        const element = selectElementFromMouseEvent(event)

        if (element === currentHoveredElement) {
          return
        }

        if (element !== null && element === selectedElementRef.current) {
          return
        }

        if (element === null && currentHoveredElement !== null) {
          removeHoverStylesForElement(currentHoveredElement)
        }

        currentHoveredElement = element
        updateHoverState()
      }

      const handleClick = (event: MouseEvent) => {
        // Check if click is on the element menu - if so, don't run this
        const target = event.target as HTMLElement
        if (target.closest(`[${ALPHA_ELEMENT_MENU_ATTRIBUTE}]`)) {
          return
        }

        event.preventDefault()
        event.stopPropagation()

        // Select element
        const element = selectElementFromMouseEvent(event)

        if (!element) {
          removeAllElementEditingInteractionState()
          sendSelectElementCancellationMessage()

          return
        }

        if (selectedElementRef.current !== null) {
          sendSelectElementCancellationMessage()
        }
        selectedElementRef.current = element

        if (currentHoveredElement !== null) {
          removeHoverStylesForElement(currentHoveredElement)
          currentHoveredElement = null
        }

        // Show click styles
        updateClickStylesForElement(element)
        createElementMenu(element)
      }

      const handleMouseLeave = () => {
        if (currentHoveredElement !== null) {
          removeHoverStylesForElement(currentHoveredElement)
          currentHoveredElement = null
        }
      }

      //#endregion

      window.addEventListener('click', handleClick, { capture: true }) // capture: true is used to stop event from bubbling up.
      window.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseleave', handleMouseLeave)
      window.addEventListener('scroll', updateHoverState, true)
      window.addEventListener('scroll', updateClickedElementState, true)
      window.addEventListener('resize', updateHoverState)
      window.addEventListener('resize', updateClickedElementState)

      // Elements can change due to animations, like expand, collapse, etc. Updating every 100ms ensures the
      // hovered/clicked state is accurate if this happens
      const intervalId = setInterval(() => {
        updateHoverState()
        updateClickedElementState()
      }, 25)

      return () => {
        window.removeEventListener('click', handleClick, { capture: true })
        window.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseleave', handleMouseLeave)
        window.removeEventListener('scroll', updateHoverState, true)
        window.removeEventListener('scroll', updateClickedElementState, true)
        window.removeEventListener('resize', updateHoverState)
        window.removeEventListener('resize', updateClickedElementState)

        clearInterval(intervalId)
      }
    }

    const removeEventHandlers = setEventHandlers()

    return removeEventHandlers
  }, [isElementEditingEnabled])

  //#endregion

  //#region Section edit

  const selectedSectionRef = useRef<HTMLElement | null>(null)

  const buildAndSendSectionSelectMessage = useCallback(
    (section: HTMLElement | null) => {
      if (!section) {
        const message = {
          type: 'ALPHA_SECTION_SELECT',
          messageType: 'UNSELECT',
        }
        window.parent.postMessage(message, '*')
      } else {
        const message = {
          type: 'ALPHA_SECTION_SELECT',
          sectionId: section.getAttribute('alpha-section-id') ?? '',
          messageType: 'SELECT',
        }
        window.parent.postMessage(message, '*')
      }
    },
    []
  )

  const handleSectionSelect = (section: HTMLElement) => {
    if (selectedSectionRef.current) {
      removeSectionSelectOverlay()
      removeSectionSelectMenu()
    }

    selectedSectionRef.current = section

    if (currentHoveredSectionRef.current === section) {
      removeSectionOverlay()
      removeSectionMenu()
      currentHoveredSectionRef.current = null
    }

    createOrUpdateSectionSelectOverlay(section)
    createSectionSelectMenu(section)

    buildAndSendSectionSelectMessage(section)
  }

  //#region Section hover UI

  const createSectionMenu = (section: HTMLElement) => {
    removeSectionMenu()

    const sectionId = section.getAttribute('alpha-section-id') || 'section'

    const formattedSectionName = sectionId
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')

    // Section name label (top-left)
    const sectionLabel = document.createElement('div')
    sectionLabel.id = 'alpha-section-label'
    sectionLabel.setAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE, 'true')
    sectionLabel.textContent = formattedSectionName
    sectionLabel.style.cssText = `
      position: absolute !important;
      padding: 3px 6px !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      color: white !important;
      background: rgba(60, 141, 232) !important;
      border: none !important;
      border-radius: 4px !important;
      z-index: 2147483646 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      pointer-events: none !important;
    `

    // Edit button (top-right), button expands to the left revealing text when hovered on
    const editButton = document.createElement('button')
    editButton.id = 'alpha-section-edit-button'
    editButton.setAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE, 'true')

    const iconContainer = document.createElement('span')
    iconContainer.setAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE, 'true')
    iconContainer.style.cssText = `
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      min-width: 36px !important;
      height: 36px !important;
      flex-shrink: 0 !important;
    `
    iconContainer.innerHTML = renderToStaticMarkup(<Pencil size={16} />)

    const textContainer = document.createElement('span')
    textContainer.setAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE, 'true')
    textContainer.textContent = 'Edit with Chat'
    textContainer.style.cssText = `
      white-space: nowrap !important;
      font-size: 13px !important;
      font-weight: 500 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      opacity: 0 !important;
      transform: translateX(-10px) !important;
      transition: opacity 0.2s ease, transform 0.2s ease !important;
      padding-right: 8px !important;
    `

    editButton.appendChild(iconContainer)
    editButton.appendChild(textContainer)

    editButton.style.cssText = `
      position: absolute !important;
      width: 36px !important;
      height: 36px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      background: white !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      border-radius: 6px !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
      cursor: pointer !important;
      z-index: 2147483646 !important;
      color: #6b7280 !important;
      transition: width 0.2s ease, background-color 0.2s ease, left 0.2s ease !important;
      padding: 0 !important;
      overflow: hidden !important;
    `

    document.body.appendChild(sectionLabel)
    document.body.appendChild(editButton)

    const iconWidth = 36
    const textWidth = textContainer.scrollWidth
    const EXPANDED_WIDTH = iconWidth + textWidth

    editButton.onmouseenter = () => {
      const currentLeft = parseInt(editButton.style.left || '0')
      const expandAmount = EXPANDED_WIDTH - 36
      editButton.style.left = `${currentLeft - expandAmount}px`
      editButton.style.width = `${EXPANDED_WIDTH}px`
      textContainer.style.opacity = '1'
      textContainer.style.transform = 'translateX(0)'
      editButton.style.backgroundColor = '#f9fafb'
    }

    editButton.onmouseleave = () => {
      const currentLeft = parseInt(editButton.style.left || '0')
      const expandAmount = EXPANDED_WIDTH - 36
      editButton.style.left = `${currentLeft + expandAmount}px`
      editButton.style.width = '36px'
      textContainer.style.opacity = '0'
      textContainer.style.transform = 'translateX(-10px)'
      editButton.style.backgroundColor = 'white'
    }

    // Add click handler to edit button
    editButton.onclick = (e) => {
      e.stopPropagation()
      handleSectionSelect(section)
    }

    // Position the elements
    positionSectionMenu(section)
  }

  const positionSectionMenu = (section: HTMLElement) => {
    const sectionLabel = document.getElementById('alpha-section-label')
    const editButton = document.getElementById('alpha-section-edit-button')

    if (!sectionLabel && !editButton) return

    const rect = section.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    const topPosition = rect.top + scrollTop
    const leftPosition = rect.left + scrollLeft
    const rightPosition = rect.right + scrollLeft - 48 // 36px button width + 12px padding

    if (sectionLabel) {
      sectionLabel.style.top = `${topPosition}px`
      sectionLabel.style.left = `${leftPosition}px`
    }

    if (editButton) {
      // Check if button is currently expanded (hovered)
      const currentWidth = parseInt(editButton.style.width || '36')
      const isExpanded = currentWidth > 36

      // If expanded, adjust left position to account for the expansion
      let adjustedLeft = rightPosition
      if (isExpanded) {
        const expandAmount = currentWidth - 36
        adjustedLeft = rightPosition - expandAmount
      }

      editButton.style.top = `${topPosition + 12}px`
      editButton.style.left = `${adjustedLeft}px`
    }
  }

  const removeSectionMenu = () => {
    const sectionLabel = document.getElementById('alpha-section-label')
    const editButton = document.getElementById('alpha-section-edit-button')

    if (sectionLabel) {
      sectionLabel.remove()
    }
    if (editButton) {
      editButton.remove()
    }
  }

  const createOrUpdateSectionOverlay = (section: HTMLElement) => {
    let overlay = document.getElementById('alpha-section-hover-overlay')

    if (!overlay) {
      overlay = document.createElement('div')
      overlay.id = 'alpha-section-hover-overlay'
      document.body.appendChild(overlay)
    }

    const rect = section.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    overlay.style.cssText = `
      position: absolute !important;
      top: ${rect.top + scrollTop}px !important;
      left: ${rect.left + scrollLeft}px !important;
      width: ${rect.width}px !important;
      height: ${rect.height}px !important;
      border: 2.5px solid rgba(60, 141, 232) !important;
      border-radius: 4px !important;
      pointer-events: none !important;
      z-index: 2147483645 !important;
      box-sizing: border-box !important;
    `
  }

  const removeSectionOverlay = () => {
    const overlay = document.getElementById('alpha-section-hover-overlay')
    if (overlay) {
      overlay.remove()
    }
  }

  //#endregion

  //#region Section select UI

  const createOrUpdateSectionSelectOverlay = (section: HTMLElement) => {
    let overlay = document.getElementById('alpha-section-click-overlay')

    if (!overlay) {
      overlay = document.createElement('div')
      overlay.id = 'alpha-section-click-overlay'
      document.body.appendChild(overlay)
    }

    const rect = section.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    overlay.style.cssText = `
      position: absolute !important;
      top: ${rect.top + scrollTop}px !important;
      left: ${rect.left + scrollLeft}px !important;
      width: ${rect.width}px !important;
      height: ${rect.height}px !important;
      border: 2.5px solid rgba(60, 141, 232) !important;
      border-radius: 4px !important;
      pointer-events: none !important;
      z-index: 2147483645 !important;
      box-sizing: border-box !important;
    `
  }

  const removeSectionSelectOverlay = () => {
    const overlay = document.getElementById('alpha-section-click-overlay')
    if (overlay) {
      overlay.remove()
    }
  }

  const createSectionSelectMenu = (section: HTMLElement) => {
    removeSectionSelectMenu()

    const sectionId = section.getAttribute('alpha-section-id') || 'section'

    const formattedSectionName = sectionId
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')

    // Section name label (top-left)
    const sectionLabel = document.createElement('div')
    sectionLabel.id = 'alpha-section-click-label'
    sectionLabel.setAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE, 'true')
    sectionLabel.textContent = formattedSectionName
    sectionLabel.style.cssText = `
      position: absolute !important;
      padding: 3px 6px !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      color: white !important;
      background: rgba(60, 141, 232) !important;
      border: none !important;
      border-radius: 4px !important;
      z-index: 2147483646 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      pointer-events: none !important;
    `

    // Chat button (top-right) with blue background and white icon
    const chatButton = document.createElement('button')
    chatButton.id = 'alpha-section-click-button'
    chatButton.setAttribute(ALPHA_ELEMENT_MENU_ATTRIBUTE, 'true')
    chatButton.innerHTML = renderToStaticMarkup(<MessageSquare size={16} />)
    chatButton.style.cssText = `
      position: absolute !important;
      width: 36px !important;
      height: 36px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      background: #3b82f6 !important;
      border: none !important;
      border-radius: 6px !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
      cursor: pointer !important;
      z-index: 2147483646 !important;
      color: white !important;
      padding: 0 !important;
      transition: background-color 0.2s ease !important;
    `

    chatButton.onclick = (e) => {
      e.stopPropagation()
      removeSectionSelectOverlay()
      removeSectionSelectMenu()
      selectedSectionRef.current = null
      buildAndSendSectionSelectMessage(null)
    }

    document.body.appendChild(sectionLabel)
    document.body.appendChild(chatButton)

    positionSectionSelectMenu(section)
  }

  const positionSectionSelectMenu = (section: HTMLElement) => {
    const sectionLabel = document.getElementById('alpha-section-click-label')
    const chatButton = document.getElementById('alpha-section-click-button')

    if (!sectionLabel && !chatButton) return

    const rect = section.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    const topPosition = rect.top + scrollTop
    const leftPosition = rect.left + scrollLeft
    const rightPosition = rect.right + scrollLeft - 48 // 36px button width + 12px padding

    if (sectionLabel) {
      sectionLabel.style.top = `${topPosition}px`
      sectionLabel.style.left = `${leftPosition}px`
    }

    if (chatButton) {
      chatButton.style.top = `${topPosition + 12}px`
      chatButton.style.left = `${rightPosition}px`
    }
  }

  const removeSectionSelectMenu = () => {
    const sectionLabel = document.getElementById('alpha-section-click-label')
    const chatButton = document.getElementById('alpha-section-click-button')

    if (sectionLabel) {
      sectionLabel.remove()
    }
    if (chatButton) {
      chatButton.remove()
    }
  }

  //#endregion

  const removeAllSectionInteractionState = () => {
    removeSectionOverlay()
    removeSectionMenu()
    removeSectionSelectOverlay()
    removeSectionSelectMenu()
    selectedSectionRef.current = null
    currentHoveredSectionRef.current = null

    buildAndSendSectionSelectMessage(null)
  }

  const currentHoveredSectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isSectionSelectionEnabled) {
      removeAllSectionInteractionState()
      return
    }

    const findSectionInElementTree = (
      mouseEvent: MouseEvent
    ): HTMLElement | null => {
      const target = mouseEvent.target

      if (target instanceof Element) {
        if (target.closest(`[${ALPHA_ELEMENT_MENU_ATTRIBUTE}]`)) {
          return currentHoveredSectionRef.current
        }

        const sectionSelector = sectionTagNames
          .map((tag) => tag.toLowerCase())
          .join(', ')
        const closestSection = target.closest(
          sectionSelector
        ) as HTMLElement | null

        return closestSection
      }

      return null
    }

    const updateSectionHoverState = () => {
      if (currentHoveredSectionRef.current) {
        createOrUpdateSectionOverlay(currentHoveredSectionRef.current)
        positionSectionMenu(currentHoveredSectionRef.current)
      }
    }

    const updateSectionClickState = () => {
      if (selectedSectionRef.current) {
        createOrUpdateSectionSelectOverlay(selectedSectionRef.current)
        positionSectionSelectMenu(selectedSectionRef.current)
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      const sectionElement = findSectionInElementTree(event)

      if (!sectionElement) {
        if (currentHoveredSectionRef.current) {
          removeSectionOverlay()
          removeSectionMenu()
          currentHoveredSectionRef.current = null
        }
        return
      }

      if (sectionElement === currentHoveredSectionRef.current) {
        return
      }

      if (sectionElement === selectedSectionRef.current) {
        if (currentHoveredSectionRef.current) {
          removeSectionOverlay()
          removeSectionMenu()
          currentHoveredSectionRef.current = null
        }
        return
      }

      if (currentHoveredSectionRef.current) {
        removeSectionOverlay()
        removeSectionMenu()
      }

      if (!sectionElement.classList.contains('alpha-section-highlight')) {
        createOrUpdateSectionOverlay(sectionElement)
        createSectionMenu(sectionElement)
      }

      currentHoveredSectionRef.current = sectionElement
    }

    // Remove highlight when mouse leaves the canvas
    const handleMouseLeave = () => {
      if (currentHoveredSectionRef.current) {
        removeSectionOverlay()
        removeSectionMenu()
        currentHoveredSectionRef.current = null
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', updateSectionHoverState, true)
    window.addEventListener('scroll', updateSectionClickState, true)
    window.addEventListener('resize', updateSectionHoverState)
    window.addEventListener('resize', updateSectionClickState)

    const intervalId = setInterval(() => {
      // It's possible that after an update the section click state is out of sync.
      if (
        selectedSectionRef.current !== null &&
        !selectedSectionRef.current?.isConnected
      ) {
        removeAllSectionInteractionState()
      }

      if (currentHoveredSectionRef.current) {
        createOrUpdateSectionOverlay(currentHoveredSectionRef.current)
      }
      if (selectedSectionRef.current) {
        createOrUpdateSectionSelectOverlay(selectedSectionRef.current)
      }

      buildAndSendSectionSelectMessage(selectedSectionRef.current)
    }, 50)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', updateSectionHoverState, true)
      window.removeEventListener('scroll', updateSectionClickState, true)
      window.removeEventListener('resize', updateSectionHoverState)
      window.removeEventListener('resize', updateSectionClickState)

      clearInterval(intervalId)

      if (currentHoveredSectionRef.current) {
        removeSectionOverlay()
        removeSectionMenu()
      }
    }
  }, [isSectionSelectionEnabled])

  //#endregion

  //#region Messages from Editor.

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'ELEMENT_EDITING_TOGGLE') {
        const enabledState = event.data.enabled
        if (enabledState !== isElementEditingEnabled) {
          setIsElementEditingEnabled(enabledState)

          if (!enabledState) {
            removeAllElementEditingInteractionState()
          }
        }
      }

      if (event.data?.type === 'ELEMENT_EDITING_RESET') {
        removeAllElementEditingInteractionState()
      }

      if (event.data?.type === 'ELEMENT_EDITING_RESIGNAL') {
        if (selectedElementRef.current !== null) {
          buildAndSendElementSelectMessage(selectedElementRef.current, 'EDIT')
        }
      }

      if (event.data?.type === 'SECTION_SELECTION_TOGGLE') {
        const enabledState = event.data.enabled
        if (enabledState !== isSectionSelectionEnabled) {
          setIsSectionSelectionEnabled(enabledState)
        }
      }

      if (event.data?.type === 'PREVIEW_COMPILED') {
        if (selectedElementRef.current !== null) {
          updateClickStylesForElement(selectedElementRef.current)
        }
      }

      if (event.data?.type === 'ALPHA_EDITOR_PAGE_CHANGE') {
        removeAllElementEditingInteractionState()
        removeAllSectionInteractionState()
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [isElementEditingEnabled, isSectionSelectionEnabled])

  //#endregion
}

const useCanvasInteractionExperience = () => {
  const [isElementEditingEnabled, setIsElementEditingEnabled] =
    useState<boolean>(false)
  const [isSectionSelectionEnabled, setIsSectionSelectionEnabled] =
    useState<boolean>(true)

  useCanvasInteractionBootstrapStyles()
  useCanvasInteractionCursorHandler(
    isElementEditingEnabled,
    setIsElementEditingEnabled,
    isSectionSelectionEnabled,
    setIsSectionSelectionEnabled
  )
}

//#endregion

//#region Route change tracking.

const useRouteChangeTracking = () => {
  const router = useRouter()

  const [previousPath, setPreviousPath] = useState('')

  // Sending route change events to Editor.
  const handleLocationChange = () => {
    // Early return if not in browser environment.
    if (typeof window === 'undefined') return

    const currentPath = window.location.pathname
    if (currentPath !== previousPath) {
      setPreviousPath(currentPath)
      window.parent.postMessage(
        {
          type: 'ALPHA_IFRAME_ROUTE_CHANGE',
          path: currentPath,
        },
        '*'
      )
    }
  }

  useEffect(() => {
    // Use polling approach for now for simplicity.
    const intervalId = setInterval(handleLocationChange, 100)

    return () => {
      clearInterval(intervalId)
    }
  }, [previousPath])

  // Receiving page changes from Editor.
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'ALPHA_EDITOR_PAGE_CHANGE') {
        router.push(event.data.path)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])
}

//#endregion

//#region Hide Next.js badge.

const useHideNextjsBadge = () => {
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null

    const hideNextjsPortal = () => {
      const nextJsPortal = document.querySelector('nextjs-portal')

      if (nextJsPortal && nextJsPortal instanceof HTMLElement) {
        nextJsPortal.style.display = 'none'
        clearInterval(intervalId!)
        intervalId = null
      }
    }

    // Run every 250ms until the portal is hidden.
    intervalId = setInterval(hideNextjsPortal, 250)

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [])
}

//#endregion

//#region Reload util.

const useReloadUtil = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'ALPHA_EDITOR_RELOAD_PAGE') {
        window.location.reload()
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])
}

//#endregion

export const AppInjection = () => {
  useCanvasInteractionExperience()
  useRouteChangeTracking()
  useHideNextjsBadge()
  useReloadUtil()

  return null
}
