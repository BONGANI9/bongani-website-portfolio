import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">+7 Projects Completed</span>
              <span className="text-sm text-muted-foreground">|</span>
              <span className="text-sm text-muted-foreground">+0 Startup Raised</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Welcome
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              It's <span className="text-primary font-semibold">Bongani Kokwe</span>, a Digital Associate
            </p>
            
            <button
              onClick={scrollToAbout}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mx-auto md:mx-0"
            >
              Scroll down <ArrowDown className="animate-bounce" size={20} />
            </button>
          </div>

          {/* Image - Made smaller and more contained */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <img
                src="/media/Bongani2.jpg"
                alt="Bongani Kokwe"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
