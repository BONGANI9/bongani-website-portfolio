import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI ChatBot",
    description: "My first AI chatbot that assists in text, image and code generation.",
    image: "/media/contentgeneration.webp",
    link: "https://calm-crumble-419a51.netlify.app/",
  },
  {
    title: "AI Resume Builder",
    description: "This project involved creating an AI-powered resume builder that streamlines the process of crafting professional resumes.",
    image: "/media/airesume.webp",
    link: "https://app--resume-ai-copy-1341089e.base44.app/ResumeBuilder",
  },
  {
    title: "Zoo Website",
    description: "This project involved creating a website for a local zoo, showcasing the animals and providing information about the zoo, including maps and weather.",
    image: "/media/zooweb.webp",
    link: "https://fnbzoowebsite.netlify.app/",
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "This project involved creating a sentiment analysis dashboard that visualizes user feedback and sentiment trends over time.",
    image: "/media/sentiment.webp",
    link: "https://mysentimentanalysisdashboard.streamlit.app/",
  },
  {
    title: "BrightStep Foundation",
    description: "This project involved creating a website for our NGO Website, showcasing my programs, courses and providing information about my volunteers, donation, and more.",
    image: "media/brightstep.webp",
    link: "https://brightstep-foundation.netlify.app/",
  },
  {
    title: "Author Portfolio",
    description: "This project involved creating a website for an Author portfolio Website, showcasing the author's work and providing information about the author.",
    image: "/media/aurthor.png",
    link: "https://genuine-florentine-d6bac1.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects showcasing web development, AI integration, and creative design solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      View Project <ExternalLink size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
