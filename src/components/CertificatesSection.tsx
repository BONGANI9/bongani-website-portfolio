import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Award, Bookmark } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  imageUrl: string;
  credentialId?: string;
  date?: string;
}

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Static certificates - Add your certificates here
  const certificates: Certificate[] = [
    {
      id: "1",
      title: "AI Essentials",
      issuer: "Intel",
      imageUrl: "https://via.placeholder.com/400x500?text=Add+Certificate+Image",
      credentialId: "AI-ESS-2023-001",
      date: "2023",
    },
    {
      id: "2",
      title: "AI For Everyone",
      issuer: "Coursera",
      imageUrl: "https://via.placeholder.com/400x500?text=Add+Certificate+Image",
      credentialId: "AME-2023-001",
      date: "2023",
    },
    {
      id: "3",
      title: "Active Listening & Communication",
      issuer: "Corporate Edge",
      imageUrl: "https://via.placeholder.com/400x500?text=Add+Certificate+Image",
      credentialId: "AL-COM-2023-001",
      date: "2023",
    },
    {
      id: "4",
      title: "Introduction to AI",
      issuer: "Corporate Edge",
      imageUrl: "https://via.placeholder.com/400x500?text=Add+Certificate+Image",
      credentialId: "INTRO-AI-2023-001",
      date: "2023",
    },
    {
      id: "5",
      title: "Google Cloud",
      issuer: "Google",
      imageUrl: "https://via.placeholder.com/400x500?text=Add+Certificate+Image",
      credentialId: "GC-2023-001",
      date: "2023",
    },
    {
      id: "6",
      title: "Introduction to AI & Generative AI",
      issuer: "Georgia Institute of Technology",
      imageUrl: "https://via.placeholder.com/400x500?text=Add+Certificate+Image",
      credentialId: "GTECH-AI-2023-001",
      date: "2023",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Certifications
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-80">
                  {/* Certificate Image */}
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-4">
                        <Award className="text-primary" size={32} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Details Card Below */}
                <div className="mt-4 space-y-2">
                  {/* Bookmark Icon and Date */}
                  <div className="flex items-start justify-between">
                    <Bookmark className="text-primary fill-primary" size={20} />
                    {cert.date && (
                      <span className="text-xs font-semibold text-muted-foreground">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-bold text-foreground text-sm leading-tight">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs text-muted-foreground">
                    {cert.issuer}
                  </p>

                  {/* Credential ID */}
                  {cert.credentialId && (
                    <Badge variant="secondary" className="text-xs mt-2">
                      ID: {cert.credentialId}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate View Dialog */}
      {selectedCert && (
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedCert.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="w-full rounded-lg border border-border"
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Issuing Organization
                  </p>
                  <p className="text-sm text-muted-foreground">{selectedCert.issuer}</p>
                </div>
                {selectedCert.date && (
                  <div>
                    <p className="text-sm font-semibold text-foreground">Year</p>
                    <p className="text-sm text-muted-foreground">{selectedCert.date}</p>
                  </div>
                )}
              </div>
              {selectedCert.credentialId && (
                <div>
                  <p className="text-sm font-semibold text-foreground">Credential ID</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedCert.credentialId}
                  </p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default CertificatesSection;
