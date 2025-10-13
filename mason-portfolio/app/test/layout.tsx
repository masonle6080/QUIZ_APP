import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "More - Mason Le",
  description: "More about Mason Le's interests, background, filmmaking, books, and hobbies",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2215%22 fill=%22%236366f1%22/><text x=%2250%22 y=%2270%22 font-family=%22system-ui,sans-serif%22 font-size=%2260%22 font-weight=%22bold%22 text-anchor=%22middle%22 fill=%22white%22>+</text></svg>",
  },
}

export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}