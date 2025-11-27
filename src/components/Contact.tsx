import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Instagram, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Made Larger */}
          <Card className="p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Email
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="resize-none"
                />
              </div>
              <Button type="submit" className="w-full h-12 text-lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">bongani.kokwe@capaciti.org.za</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold text-foreground">+27 74 600 0639</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-4 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <Linkedin className="text-primary group-hover:scale-110 transition-transform" size={32} />
                      <span className="text-sm font-medium text-foreground">LinkedIn</span>
                    </div>
                  </Card>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-4 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <Github className="text-primary group-hover:scale-110 transition-transform" size={32} />
                      <span className="text-sm font-medium text-foreground">GitHub</span>
                    </div>
                  </Card>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-4 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <Instagram className="text-primary group-hover:scale-110 transition-transform" size={32} />
                      <span className="text-sm font-medium text-foreground">Instagram</span>
                    </div>
                  </Card>
                </a>

                <a
                  href="https://bonganikokweportfolio.netlify.app/media/B.Kokwe%20Resume(Cv).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-4 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <FileText className="text-primary group-hover:scale-110 transition-transform" size={32} />
                      <span className="text-sm font-medium text-foreground">View CV</span>
                    </div>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
