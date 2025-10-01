// Enables client-side rendering for this component
"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

// Define navigation items with display names and anchor links
const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  // Track which section is currently active based on scroll position
  const [activeSection, setActiveSection] = useState("")

  // Set up scroll listener to highlight current section in navigation
  useEffect(() => {
    const handleScroll = () => {
      // Extract section IDs from navigation items (remove # from href)
      const sections = navItems.map((item) => item.href.slice(1))
      // Add 100px offset to account for sticky navigation height
      const scrollPosition = window.scrollY + 100

      // Check if we're near the bottom of the page
      const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100

      // If we're near the bottom, always activate the last section
      if (isNearBottom) {
        setActiveSection(sections[sections.length - 1])
        return
      }

      // Loop through each section to determine which one is currently visible
      // We iterate in order so the first matching section becomes active
      for (const section of sections) {
        // Find the HTML element with the matching ID (e.g., "about", "experience", "contact")
        const element = document.getElementById(section)

        // Only proceed if the element exists in the DOM
        if (element) {
          // Get the element's position and dimensions
          const { offsetTop, offsetHeight } = element
          // offsetTop: distance from top of document to start of element
          // offsetHeight: total height of the element including padding/border

          // Check if current scroll position falls within this section's boundaries
          // scrollPosition >= offsetTop: we've scrolled past the start of this section
          // scrollPosition < offsetTop + offsetHeight: we haven't reached the end of this section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // This section is currently in view, so mark it as active
            setActiveSection(section)
            // Break out of loop since we found the active section
            // (prevents multiple sections from being marked active simultaneously)
            break
          }
        }
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)
    // Cleanup function to remove listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // Sticky navigation bar with backdrop blur effect
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      {/* Container with max width and responsive padding */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Navigation content with flexbox layout */}
        <div className="flex items-center justify-between h-16">
          {/* Left side: Brand/name */}
          <div className="font-medium text-foreground">Mason Le</div>
          {/* Right side: Navigation links (hidden on mobile, visible on medium+ screens) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  // Base styles for all navigation links
                  "text-sm font-medium transition-colors hover:text-accent",
                  // Conditional styles: highlight active section with accent color
                  activeSection === item.href.slice(1) ? "text-accent" : "text-muted-foreground",
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
