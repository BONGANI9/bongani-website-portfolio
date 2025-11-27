import { Card } from "@/components/ui/card";
import { Music, Shirt } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with Interesting Fact */}
          <div className="space-y-6">
            <div className="relative group">
              <img
                src="https://bonganikokweportfolio.netlify.app/media/Bongani2.webp"
                alt="Bongani Kokwe"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Music className="text-primary" /> Interesting Fact About Me
                  </h3>
                  <p className="text-sm">
                    I love producing music, in the music industry I am professionally known as "Kwess Junior". 
                    I design T-shirts - my first merch line is called "UVALO" which offers a wide range of unique designs.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">+1</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">+5</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </Card>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
            I’m Bongani Kokwe, a passionate Digital Associate and Software Engineer dedicated to crafting meaningful and impactful digital experiences. 
            My work spans AI-powered tools, interactive dashboards, modern websites, and mobile applications designed for businesses and individuals.
            </p>

            <p className="text-muted-foreground leading-relaxed">
            With a strong foundation in software engineering, web development, and mobile app development, I specialize in building solutions that are both technically robust and user-friendly. 
            My expertise also includes visual design, user experience (UX), and cloud technologies, enabling me to deliver experiences that are intuitive, visually compelling, and highly functional.
            I thrive on solving complex problems with creative solutions, collaborating with teams, and turning innovative ideas into reality. Committed to continuous learning, 
            I stay ahead of emerging trends in technology and design to ensure the solutions I deliver are impactful and results-driven.
            <br></br><strong>Skills & Expertise:</strong> <br></br>
            Software Engineering & Development
            Mobile App Development (iOS & Android)
            Frontend & Backend Web Development
            AI & Data-Driven Tools
            Interactive Dashboards & Analytics
            Cloud Computing & Deployment
            Visual Design & UX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
