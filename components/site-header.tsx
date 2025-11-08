import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import SiteAssets from "./site-assets"
import { Button, buttonVariants } from "./ui/button"

function SiteHeader() {
  return (
    <header className={`flex h-20 w-full px-6 lg:px-12`}>
      <div className={`flex h-full w-1/2 items-center`}>
        <Link href="/" className="flex items-center">
          <SiteAssets type="icon" />
          <h4 className="ml-2 font-heading text-xl">Meridia</h4>
        </Link>
      </div>

      <div className={`flex h-full w-1/2 items-center justify-end`}>
        <Link href={"/download"}>
          <Button variant="fancy" size="lg" className="sm:mt-12">
            Download
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default SiteHeader
