import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Github, Linkedin, FileText } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-30 pb-32">

      <div className="grid lg:grid-cols-[60%_40%]  items-center">
        <div className="space-y-8 pl-25">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">Mason Le</h1>
            <p className="text-xl text-muted-foreground font-medium">Computer Science Student</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing a degree in Computer Science at UC Santa Barbara. Passionate about the intersection of
              technology and creativity, with experience in photography, filmmaking, and digital storytelling.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Get in touch
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="/Mason_Le's_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5" />
                  <span className="sr-only">Resume</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/mason-le-68b75a274/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="relative justify-center flex">
        
               <img src="/Mason_Le's_Headshot.png" alt="Mason Le's Headshot" className="w-60 h-75 rounded-4xl object-cover mx-auto lg:mx-0" />
              
        </div>

      </div>

      <div className="flex justify-center mt-16">
        <Button variant="ghost" size="icon" asChild>
          <a href="#about">
            <ArrowDown className="w-5 h-5 animate-bounce" />
            <span className="sr-only">Scroll to about section</span>
          </a>
        </Button>
      </div>
    </section>
  )
}
