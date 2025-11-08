"use client"

import React from "react"
import Link from "next/link"
import { Copyright } from "lucide-react"

import SiteAssets from "./site-assets"

function SiteFooter() {
  return (
    <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <SiteAssets type="icon" />

        <p className="text-center text-sm leading-loose md:text-left">
          Copyright © 2024-2025{" "}
          <Link
            rel="noreferrer"
            className="underline underline-offset-4"
            href=""
          >
            MNovus
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SiteFooter
