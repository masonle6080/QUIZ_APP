import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm always interested in discussing new opportunities, creative projects, or just having a conversation
            about technology and design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">Drop me a line anytime</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:masonle@ucsb.edu">
                    Send Email
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Linkedin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground mb-4">Let's connect professionally</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/mason-le-68b75a274/" target="_blank" rel="noopener noreferrer">
                    View Profile
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Github className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground mb-4">Check out my projects</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    View Code
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

       
      </div>
    </section>
  )
}
