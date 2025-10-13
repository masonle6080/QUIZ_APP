export function About() {
  return (
    <section id="about" className="py-20">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-sm uppercase tracking-wider font-medium">Currently studying</p>
            <p className="text-sm uppercase tracking-wider font-medium">Interests</p>
            <p className="text-sm uppercase tracking-wider font-medium">Skills</p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div>
            <p className="text-lg leading-relaxed text-pretty">
              I'm a Computer Science student at the University of California, Santa Barbara. I am interested in Software Engineering and business. 
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-pretty">
              I love reading, photography, exercising, and cooking with friends!
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-pretty">
              Currently, I'm eager to expand my technical skills and gain hands-on experience in different areas of
              Computer Science while continuing to explore the creative applications of technology.
            </p>
          </div>

          <div className="pt-3">
            <a
              href="/More"
              className="inline-flex items-center text-accent hover:underline font-medium transition-colors"
            >
              Learn More →
            </a>
          </div>


        </div>
      </div>
    </section>
  )
}
