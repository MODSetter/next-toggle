"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { getBackground } from "./background-provider"
import { Button } from "@/components/ui/button"
import { Monitor, Moon, Sun} from "lucide-react"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggler() {
    const { setTheme } = useTheme()
    const [background, setBackground] = React.useState<React.JSX.Element | null>(null)

    const setModTheme = (name: string) => {
        const res = getBackground(name);
        if (res) {
            if (name[0] === 'L') {
                setTheme("light")
            } else if(name[0] === 'D') {
                setTheme("dark")
            } else{
                setTheme("system")
            }

            setBackground(res);
        }

    }
    return (
        <>
            <div className="fixed left-0 top-0 -z-10 h-full w-full">
                {background ? background : null}
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="bg-transparent">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <Sun className="mr-2 h-4 w-4" />
                            <span>Light Themes</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem onClick={() => setModTheme("L")}>
                                    Light Default
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-1")}>
                                    Light #1
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-2")}>
                                    Light #2
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-3")}>
                                    Light #3
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-4")}>
                                    Light #4
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-5")}>
                                    Light #5
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-6")}>
                                    Light #6
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-7")}>
                                    Light #7
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-8")}>
                                    Light #8
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-9")}>
                                    Light #9
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-10")}>
                                    Light #10
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-11")}>
                                    Light #11
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-12")}>
                                    Light #12
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("L-13")}>
                                    Light #13
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <Moon className="mr-2 h-4 w-4" />
                            <span>Dark Themes</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem onClick={() => setModTheme("D")}>
                                    Dark Default
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("D-1")}>
                                    Dark #1
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("D-2")}>
                                    Dark #2
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("D-3")}>
                                    Dark #3
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("D-4")}>
                                    Dark #4
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("D-5")}>
                                    Dark #5
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("D-6")}>
                                    Dark #6
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("D-7")}>
                                    Dark #7
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("D-8")}>
                                    Dark #8
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setModTheme("D-9")}>
                                    Dark #9
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setModTheme("S-Y")}>
                        <Monitor className="mr-2 h-4 w-4" />
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </>

    )
}
