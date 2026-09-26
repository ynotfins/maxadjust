"use client";

import { useEffect } from "react";
import { applyRgdsTheme } from "@r3lentless/rgds-web";

/** Boots RGDS primary-light (MaxAdjust brand) on the document root. */
export function RgdsBoot() {
    useEffect(() => {
        applyRgdsTheme("primary-light");
    }, []);
    return null;
}
