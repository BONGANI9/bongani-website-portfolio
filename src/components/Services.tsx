import { Card } from "@/components/ui/card";
import { Palette, Code, TrendingUp, Music, ShoppingBag,Smartphone } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces and experiences.",
  },
  {
    icon: Code,
    title: "Web Design & Development",
    description: "Building responsive and high-performance websites from scratch.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Building modern mobile applications with responsive UI, cloud integration, and scalable architecture.",
  },  
  {
    icon: TrendingUp,
    title: "AI Strategist",
    description: "Developing AI-driven strategies for your business.",
  },
  {
    icon: Music,
    title: "Music Portfolio & Artist Websites",
    description: "Creating stunning portfolios and websites for musicians and artists.",
  },
  {
    icon: ShoppingBag,
    title: "Branding & Merchandise Design",
    description: "Designing custom merchandise and branding assets (e.g., T-shirts, logos).",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital services tailored to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
