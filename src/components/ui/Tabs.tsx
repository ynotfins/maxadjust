"use client";

import { cn } from "~/lib/cn";
import { useState, ReactNode } from "react";

interface Tab {
    label: string;
    value: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.value);

    const activeContent = tabs.find((tab) => tab.value === activeTab)?.content;

    return (
        <div className="w-full">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab.value)}
                        className={cn(
                            "px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors relative",
                            activeTab === tab.value
                                ? "text-primary"
                                : "text-gray-600 hover:text-primary"
                        )}
                    >
                        {tab.label}
                        {activeTab === tab.value && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="py-4">{activeContent}</div>
        </div>
    );
}

