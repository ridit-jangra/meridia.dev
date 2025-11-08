"use client"

import React from "react"
import Link from "next/link"

import { Icons } from "./icons"

function OpenSource() {
  return (
    <section id="open-source" className="md:pyb-12 container py-8 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Proudly Open Source
        </h2>
        <p className="my-6 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Meridia is an open source project. You can find the <br /> source code
          on{" "}
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
  )
}

export default OpenSource

export const revalidate = 60
