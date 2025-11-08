import React from "react"
import Link from "next/link"

import SiteAssets from "./site-assets"
import { Button } from "./ui/button"

function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-12 sm:mt-6">
      <Link href="/" className="flex items-center">
        <SiteAssets type="icon" />
        <h4 className="ml-2 font-heading text-2xl">Meridia</h4>
      </Link>

      <Link href={"/download"}>
        <Button variant="fancy" size="lg">
          Download
        </Button>
      </Link>
    </header>
  )
}

export default SiteHeader
