import React from "react"
import { CodeIcon } from "@radix-ui/react-icons"
import {
  Bug,
  GitBranch,
  LanguagesIcon,
  PenLine,
  SparklesIcon,
  Terminal,
} from "lucide-react"

const FEATURES = [
  {
    title: "AI suggessions and corrections",
    description: "You can get AI suggessions and corrections for your code.",
    icon: <PenLine className="h-8 w-8" />,
  },
  {
    title: "Mira",
    description:
      "You can ask Mira to control your code editor and help you writing code.",
    icon: <SparklesIcon className="h-8 w-8" />,
  },
  {
    title: "Terminal Integration",
    description:
      "Run and execute your code directly from an integrated terminal.",
    icon: <Terminal className="h-8 w-8" />,
  },
  {
    title: "Run",
    description:
      "Run code directly from Meridia using desired language program.",
    icon: <Bug className="h-8 w-8" />,
  },
  {
    title: "Debugging Tools",
    description: "Set breakpoints, step through code. with debugging support.",
    icon: <Bug className="h-8 w-8" />,
  },
  {
    title: "Git Version Control",
    description:
      "Manage commits, branches, and pushes seamlessly with Git tools.",
    icon: <GitBranch className="h-8 w-8" />,
  },
]

function SiteFeatures() {
  return (
    <section
      id="features"
      className="container mt-10 space-y-6 rounded-3xl bg-muted/100 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Here are some of the features that make Meridia the most powerful
        </p>
      </div>
      <div className="py-2" />
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-xl bg-background  p-2 shadow-border-medium"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              {feature.icon}
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SiteFeatures
