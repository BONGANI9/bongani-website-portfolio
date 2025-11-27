import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Software engineering",
    issuer: "IBM via Coursera",
    date: "2025",
    description: "Comprehensive certification in Software engineer fundamentals and essential concepts.",
    image: "certificates/B Kokwe - IBM intro to software engineer_page-0001.jpg",
    certificateId: "/certificates/B Kokwe - IBM intro to software engineer.pdf",
  },
  {
    title: "Introduction to Cloud Computing and web technologies",
    issuer: "Coursera",
    date: "2025",
    description: "Foundational course in cloud computing and web technologies for all skill levels.",
    image: "certificates/Bongani Kokwe - Foundations of Cloud Computing and Web Technologies_page-0001.jpg",
    certificateId: "/certificates/Bongani%Kokwe%-%Foundations%of%Cloud%Computing%and%Web%Technologies.pdf",
  },
  {
    title: "FNB Full Stack Developer Bootcamp",
    issuer: "FNB",
    date: "2025",
    description: "Intensive bootcamp covering full stack development with hands-on projects.",
    image: "certificates/Bongani Full stack development_page-0001.jpg",
    certificateId: "/certificates/Bongani Full stack development.pdf",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Fundamental understanding of AWS cloud services and architecture.",
    image: "certificates/Bongani Certified Cloud Practitioner certificate_page-0001.jpg",
    certificateId: "/certificates/Bongani Certified Cloud Practitioner certificate.pdf",
  },
  {
    title: "Introduction to AI",
    issuer: "coursera",
    date: "2025",
    description: "Introduction to artificial intelligence concepts and applications.",
    image: "certificates/Bongani Kokwe-IBM - intro to AI and Generative AI_page-0001.jpg",
    certificateId: "/certificates/Bongani Kokwe-IBM - intro to AI and Generative AI.pdf",
  },
  {
    title: "Developing Backend Apps with Node.js and Express",
    issuer: "IBM",
    date: "2025",
    description: "Comprehensive course on building backend applications using Node.js and Express framework.",
    image: "certificates/bongani dev back-end apps with Node.js and Express_page-0001.jpg",
    certificateId: "/certificates/bongani dev back-end apps with Node.js and Express.pdf",
  },
  {
    title: "Developing Frontend Apps with React",
    issuer: "IBM",
    date: "2025",
    description: "Comprehensive course on building frontend applications using React framework.",
    image: "certificates/bongani dev with react_page-0001.jpg",
    certificateId: "/certificates/bongani dev with react.pdf",
  },
  {
    title: "Html,CSS and Javascript for Web Developers",
    issuer: "IBM",
    date: "2025",
    description: "Comprehensive course on building web applications using Html, CSS and Javascript.",
    image: "certificates/bongani html,css and Javascript_page-0001.jpg",
    certificateId: "/certificates/bongani html,css and Javascript.pdf",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and credentials demonstrating my expertise and commitment to continuous learning.
            <br></br> <strong>Click on the certificates to view them.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <a href={cert.certificateId} target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4">
                    <Award size={32} className="text-yellow-400 mb-2" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-xs font-semibold text-primary">{cert.date}</p>
                </div>
              </Card>
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
