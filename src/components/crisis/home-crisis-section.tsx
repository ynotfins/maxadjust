"use client";

import { show } from "@intercom/messenger-js-sdk";
import { CrisisNavigatorPanel } from "~/components/crisis/crisis-navigator-panel";

function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/** Client bridge: Crisis Navigator CTAs → Intercom / contact / phone. */
export function HomeCrisisSection() {
    return (
        <CrisisNavigatorPanel
            onAskGuardian={() => {
                try {
                    show();
                } catch {
                    scrollToId("crisis-navigator");
                }
            }}
            onStartClaim={() => scrollToId("contact-section")}
            onImmediateHelp={() => {
                window.location.href = "tel:8889995740";
            }}
        />
    );
}
