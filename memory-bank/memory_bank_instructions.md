# Memory Bank Instructions

## Overview
The Memory Bank is a structured documentation system that ensures project continuity across development sessions. It consists of 7 interconnected markdown files that capture all essential project knowledge.

## File Structure and Dependencies

```
projectbrief.md (Foundation)
    ├── productContext.md (Why & What)
    ├── techContext.md (How - Technical)
    └── systemPatterns.md (How - Architecture)
            │
            └── activeContext.md (Current State)
                    │
                    └── progress.md (Status Tracking)
```

## File Purposes

### 1. projectbrief.md
- **Purpose**: Foundation document defining project scope
- **Update**: When project goals or requirements change
- **Contains**: Overview, goals, requirements, success metrics

### 2. productContext.md  
- **Purpose**: Product strategy and user experience vision
- **Update**: When user needs or business goals evolve
- **Contains**: Problems solved, user journey, UX goals

### 3. memory_bank_instructions.md (This File)
- **Purpose**: Guide for maintaining the Memory Bank
- **Update**: When Memory Bank processes change
- **Contains**: Instructions, best practices, workflows

### 4. activeContext.md
- **Purpose**: Current work focus and decisions
- **Update**: After each work session or major decision
- **Contains**: Recent changes, next steps, active considerations

### 5. systemPatterns.md
- **Purpose**: Technical architecture and patterns
- **Update**: When introducing new patterns or components
- **Contains**: Architecture decisions, component relationships, patterns

### 6. techContext.md
- **Purpose**: Technology stack and development environment
- **Update**: When adding dependencies or changing tools
- **Contains**: Tech stack, setup instructions, constraints

### 7. progress.md
- **Purpose**: Track what's complete and what remains
- **Update**: After completing features or discovering issues
- **Contains**: Completed features, remaining work, known issues

## Update Workflows

### Starting a Session
1. Read ALL Memory Bank files
2. Check activeContext.md for where you left off
3. Review progress.md for current status
4. Plan work based on this context

### During Development
1. Update activeContext.md with decisions made
2. Add new patterns to systemPatterns.md
3. Document any tech changes in techContext.md
4. Keep progress.md current with completed items

### Ending a Session
1. Update activeContext.md with stopping point
2. Document any unfinished work in progress.md
3. Note next steps clearly
4. Ensure all significant changes are captured

## Best Practices
- Be specific about versions, file paths, and decisions
- Include rationale for architectural choices
- Document not just what, but why
- Keep entries dated for historical context
- Focus on information needed to resume work

## Memory Bank Triggers
Update the Memory Bank when:
- Completing a major feature
- Making architectural decisions  
- Changing project direction
- Discovering important patterns
- User provides new requirements
- Session is ending

## Quality Checks
Before ending a session, ensure:
- [ ] activeContext.md reflects current state
- [ ] progress.md is accurate
- [ ] New patterns are documented
- [ ] Next steps are clear
- [ ] No critical information is only in chat
