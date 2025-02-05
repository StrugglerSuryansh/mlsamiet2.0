import { useTheme } from "next-themes";

import { MagicCard } from "@/components/ui/magic-card";

export function MagicCardDemo() {
    const { theme } = useTheme();
    return (
        <div
            className={
                "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
            }
        >
            <MagicCard
                className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                Aim
            </MagicCard>
            <MagicCard
                className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                Vision
            </MagicCard>
            <MagicCard
                className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                Mission
            </MagicCard>
        </div>
    );
}
