"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

function SiteAssets({
  type,
  className,
}: {
  className?: string
  type: "icon" | "hero-image"
}) {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")

  useEffect(() => {
    setTheme(resolvedTheme!)
  }, [resolvedTheme])

  return (
    <Image
      src={`/logos/meridia-${theme === "dark" ? "white" : "black"}.svg`}
      alt="logo"
      className={cn("", className)}
      width={30}
      height={30}
    />
  )
}

export default SiteAssets
