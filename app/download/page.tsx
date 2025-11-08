import Link from "next/link"
import { SparklesIcon } from "lucide-react"
import { Balancer } from "react-wrap-balancer"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"

export default async function DownloadPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <section className="flex w-full flex-col items-center ">
        <div className="gradient-box mt-4 rounded-full px-6 py-2.5 text-sm font-medium">
          <span className="relative z-30">
            Now Releasing Meridia{" "}
            <SparklesIcon className="mb-1 inline-block h-4 w-4" />
          </span>
        </div>
        <Balancer
          as="h1"
          className="mt-8 px-6 text-center font-sans text-4xl font-bold tracking-tight drop-shadow-sm sm:text-5xl lg:font-heading lg:text-6xl lg:tracking-normal"
        >
          Supercharge Your <br /> Coding experience with {""}
          <span className="z-0 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent dark:from-white dark:to-white">
            AI
          </span>
        </Balancer>
        <div className="flex flex-col items-center sm:flex-row sm:space-x-4">
          <Link href="" target="_blank">
            <Button variant="fancy" size="lg" className="sm:mt-12">
              <Icons.windows className="mr-2 h-4 w-4" /> Download for Windows
            </Button>
          </Link>
          <Link href="" target="_blank">
            <Button variant="fancy" size="lg" className="sm:mt-12">
              <Icons.linux className="mr-2 h-4 w-4" /> Download for Linux
            </Button>
          </Link>
        </div>
      </section>
      <section
        id="open-source"
        className="md:pyb-12 container mt-10 rounded-3xl bg-muted/100 py-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="my-6 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Meridia is an open source project. You can find the <br /> source
            code on{" "}
            <Link
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
              href="https://github.com/ridit-jangra/Meridia"
            >
              GitHub
            </Link>
            . Feel free to contribute to the project.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
