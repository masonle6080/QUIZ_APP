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
              I'm a Computer Science student at UC Santa Barbara with a passion for creative technology and digital
              storytelling. My interests span across web development, photography, filmmaking, and 3D modeling, allowing
              me to approach problems from both technical and creative perspectives.
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-pretty">
              Through my experiences at the Academy of Integrated Humanities and New Media, I've developed skills in
              documentary creation, equipment management, and community building. I enjoy teaching others about camera
              work, editing, and storytelling techniques.
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-pretty">
              Currently, I'm eager to expand my technical skills and gain hands-on experience in different areas of
              computer science while continuing to explore the creative applications of technology.
            </p>
          </div>

          <div className="pt-8">
            <p className="text-muted-foreground">
              You can reach me at{" "}
              <a href="mailto:masonle@ucsb.edu" className="text-accent hover:underline font-medium">
                masonle@ucsb.edu
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
