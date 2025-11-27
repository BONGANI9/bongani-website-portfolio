import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-1">IT and Computer Science NQF Level 4</h4>
                  <p className="text-sm text-muted-foreground mb-2">False Bay College</p>
                  <p className="text-xs text-muted-foreground">2021</p>
                  <p className="text-sm text-muted-foreground mt-3">
                 <strong>Computer Science:</strong> Involves the study of algorithms, programming, software development, and the theoretical foundations of computing. It emphasizes designing and building new software and systems. 
                  <br></br> <strong>Information Technology:</strong> Concentrates on the practical application of technology in organizations, including managing systems, networks, and security. IT professionals ensure that technology runs smoothly and efficiently.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-1">Systems Development NQF Level 5</h4>
                  <p className="text-sm text-muted-foreground mb-2">Torque IT</p>
                  <p className="text-xs text-muted-foreground">2024</p>
                  <p className="text-sm text-muted-foreground mt-3">
                  planning, building, and maintaining software applications or systems. It involves understanding a problem, designing a solution, writing the code, testing it, and making sure it works well for users.
                  system design, and software engineering fundamentals.
                  Demonstrate an understanding of Systems Development, with all its implications.
                  Relate business problems and information technology solutions.
                  Apply the principles of creating computer software.
                  </p>
                </div>
              </div>
            </Card>

          </div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-1">Mobile app development</h4>
                  <p className="text-sm text-muted-foreground mb-2">Intern</p>
                  <p className="text-xs text-muted-foreground">Present</p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Developing Mobile Application, Web Applications, AI-powered tools, and providing digital solutions for diverse clients.
                    <br></br>designing, building, and deploying software for mobile devices like smartphones and tablets. This involves various stages, from market research and planning to front-end and back-end coding, testing, and deployment. The process can be done natively for a single operating system like iOS or Android, or cross-platform to target multiple systems. 
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-1">Web Developer & Graphic Designer</h4>
                  <p className="text-sm text-muted-foreground mb-2">Freelance Projects</p>
                  <p className="text-xs text-muted-foreground">Ongoing</p>
                  <p className="text-sm text-muted-foreground mt-3">
                  It involves tasks like web design and programming, using languages like HTML, CSS, and JavaScript to build the front-end (what users see) and other languages for the back-end (server-side logic and databases).
                  <br></br>Additionally, creating visual concepts using elements like text, images, and colors to communicate ideas and messages for a specific purpose, such as branding, advertising, or other design design.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
