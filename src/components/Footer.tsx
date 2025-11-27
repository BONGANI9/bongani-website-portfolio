const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="text-2xl font-bold text-primary">BK</div>
            <span className="text-muted-foreground">|</span>
            <span className="text-foreground font-medium">Bongani Kokwe</span>
          </div>
          
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Digital Associate specializing in Mobile Application development, web development, UI/UX design, and AI-powered solutions.
          </p>
          
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bongani Kokwe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
