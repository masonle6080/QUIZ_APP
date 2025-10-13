import { Card } from "@/components/ui/card"

const experiences = [
  
  {
    period: "Mar 2024 — Jun 2024",
    title: "Cashier/Front of House",
    company: "Sol Food - Puerto Rican Cuisine",
    description:
      "Operated cash registers, coordinated food delivery services, and maintained clean work environment in fast-paced restaurant setting.",
    tags: ["Customer Service", "Operations", "Team Collaboration"],
  },
  {
    period: "Aug 2022 — Jun 2024",
    title: "Intern",
    company: "Academy of Integrated Humanities and New Media",
    description:
      "Created and led documentaries and films, managed equipment, led community building initiatives, and taught peers camera work, editing, and storytelling.",
    tags: ["Documentary", "Filmmaking", "Teaching", "Leadership"],
  },
  {
    period: "Feb 2024 — Apr 2024",
    title: "Photographer",
    company: "Mill Valley Middle School",
    description:
      "Captured key moments of middle school dances, focusing on connections, energy, and memories that make these events special.",
    tags: ["Photography", "Event Coverage", "Creative Direction"],
  },
  {
    period: "Jul 2020",
    title: "3D Modeling Intern",
    company: "XR Libraries",
    description:
      "Part of 10-person team creating immersive VR story about blackwelders during WWII. Contributed to 3D modeling, music production, and community education about historical exploitation.",
    tags: ["3D Modeling", "VR Development", "Historical Research", "Music Production"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="space-y-12">
        <h2 className="text-3xl font-bold">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                </div>

                <div className="lg:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
