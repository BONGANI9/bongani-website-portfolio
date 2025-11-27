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

  const handleSubmit = () => {
    // Show toast immediately when user clicks submit
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
          {/* Contact Form */}
          <Card className="p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form
              action="https://formspree.io/f/xblvgoaz" // Formspree endpoint
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit} // toast trigger
            >
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
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
                  name="email"
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
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="resize-none"
                />
              </div>

              {/* Hidden inputs for Formspree */}
              <input type="hidden" name="_subject" value="New message from your portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              {/* Optional: redirect after submission */}
              {/* <input type="hidden" name="_next" value="https://your-portfolio.netlify.app/thank-you" /> */}

              <Button type="submit" className="w-full h-12 text-lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            {/* Contact Info */}
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
                      <p className="font-semibold text-foreground">kwessjunior36@gmail.com</p>
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

            {/* Socials */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://github.com", icon: Github, label: "GitHub" },
                  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
                  { href: "https://bonganikokweportfolio.netlify.app/media/B.Kokwe%20Resume(Cv).pdf", icon: FileText, label: "View CV" },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group">
                    <Card className="p-4 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                      <div className="flex flex-col items-center gap-2">
                        <Icon className="text-primary group-hover:scale-110 transition-transform" size={32} />
                        <span className="text-sm font-medium text-foreground">{label}</span>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
