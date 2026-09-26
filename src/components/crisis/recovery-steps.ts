/** NFA homeowner portal recovery checklist — web mirror of kDefaultRecoverySteps. */
export type RecoveryStepItem = {
    id: string;
    label: string;
    hint?: string;
};

export const DEFAULT_RECOVERY_STEPS: RecoveryStepItem[] = [
    {
        id: "safety",
        label: "Stay safe — do not re-enter until cleared",
        hint: "Ask fire marshal / incident commander before going back inside.",
    },
    {
        id: "photos",
        label: "Photo and video everything before cleanup",
        hint: "Guardian tip: wide shots + close-ups of every room and exterior.",
    },
    {
        id: "claim",
        label: "Open your insurance claim",
        hint: "Get a claim number and adjuster name. Ask about living expenses (ALE).",
    },
    {
        id: "receipts",
        label: "Keep every receipt",
        hint: "Food, lodging, clothing, and emergency repairs may be reimbursable.",
    },
    {
        id: "shelter",
        label: "Secure shelter for tonight if needed",
        hint: "Red Cross, friends/family, or Airbnb.org Open Homes.",
    },
    {
        id: "fema",
        label: "Start FEMA / disaster assistance if eligible",
        hint: "disasterassistance.gov or 1-800-621-3362 within filing windows.",
    },
    {
        id: "inventory",
        label: "Start a room-by-room inventory",
        hint: "List damaged or lost items with approximate value when you can.",
    },
    {
        id: "guardian",
        label: "Ask Guardian AI before you send claim emails",
        hint: "Wording mistakes are hard to undo. Review is free and skippable.",
    },
];

export const GUARDIAN_TIPS = [
    "Call a public adjuster before signing anything from the insurer.",
    "Photograph every room — wide shots and close-ups — before cleanup.",
    "Ask about Additional Living Expenses (ALE) when you open the claim.",
    "Keep every receipt for food, lodging, clothing, and emergency repairs.",
    "Never accept the first settlement offer without a careful review.",
];
