import { ThemeToggler } from "@/components/next-toggle/theme-toggler";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <header className="flex items-center justify-between py-8">
          <p className="text-lg animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">Next-Toggle</p>
          <nav className="flex justify-between gap-6">


            <Link
              href="https://github.com/MODSetter/next-toggle"
              target="_blank"
              rel="noopener noreferrer"
            >

              <Github
                className="text-neutral-800 transition-colors hover:text-neutral-200 dark:text-neutral-200 dark:hover:text-neutral-400"
                strokeWidth={1.5}
              />


            </Link>

          </nav>
        </header>
        <div className="pt-8 grow">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-2">
            <div className="mb-8 flex">
              <Link
                href="https://github.com/MODSetter/next-toggle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                    Add New Themes ⚡️
                    <span className="inline-flex items-center pl-2 text-black dark:text-white">
                      Contribute Here{' '}
                      <ArrowRight
                        className="pl-0.5 text-black dark:text-white"
                        size={16}
                      />
                    </span>
                  </div>
                </span>
              </Link>
            </div>
            <p className="text-center mb-2 text-2xl font-medium animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 text-gray-900 dark:text-gray-50 sm:text-6xl">

              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Next-Toggle{' '}
              </span>
            </p>
            <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
              Plug and use, theme toggle button with multiple light and dark themes for NextJs projects using next-themes.
            </p>
            <div className="mt-10 flex gap-4">

              <Button>
                Toggle Theme <ArrowRight className="pl-0.5" size={16} />
              </Button>{' '}

              <ThemeToggler />
            </div>
          </div>
        </div>
        <footer className="py-6">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">© 2024 Next-Toggle by MODSetter</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Link className="text-gray-400 hover:text-blue-500 transition-colors" href="https://github.com/MODSetter/next-toggle" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>

            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
