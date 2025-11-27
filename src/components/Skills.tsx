import { Card } from "@/components/ui/card";
import { Code2, Palette, Brain, Database, Globe, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Code2,
    items: ["React", "TypeScript", "HTML5/CSS3", "JavaScript"],
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    items: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Prototyping"],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    items: ["ChatGPT Integration", "Sentiment Analysis", "AI Tools", "Python", "Data Visualization"],
  },
  {
    category: "Backend & Database",
    icon: Database,
    items: ["Node.js", "APIs", "PostgreSQL", "Authentication", "Cloud Functions"],
  },
  {
    category: "Web Technologies",
    icon: Globe,
    items: ["SEO", "Performance Optimization", "Web Accessibility", "Progressive Web Apps"],
  },
  {
    category: "Tools & Workflow",
    icon: Zap,
    items: ["Git/GitHub", "VS Code", "Netlify", "Vercel", "Agile/Scrum"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
