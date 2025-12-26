import { Download, FolderArchive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useState } from "react";

const files = [
  { name: "index.html", path: "/static-site/index.html", label: "HTML File" },
  { name: "styles.css", path: "/static-site/styles.css", label: "CSS Styles" },
  { name: "script.js", path: "/static-site/script.js", label: "JavaScript" },
  { name: "capital-run-logo.png", path: "/static-site/capital-run-logo.png", label: "Logo Image" },
  { name: "hero-banner.jpg", path: "/static-site/hero-banner.jpg", label: "Hero Image" },
  { name: "The_Capital_Run.pdf", path: "/static-site/The_Capital_Run.pdf", label: "Event PDF" },
  { name: "Sponsorship_Deck.pdf", path: "/static-site/Sponsorship_Deck.pdf", label: "Sponsorship PDF" },
];

const DownloadSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadAllAsZip = async () => {
    setIsDownloading(true);
    try {
      const zip = new JSZip();
      
      await Promise.all(
        files.map(async (file) => {
          const response = await fetch(file.path);
          const blob = await response.blob();
          zip.file(file.name, blob);
        })
      );

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "capital-run-static-site.zip");
    } catch (error) {
      console.error("Error creating ZIP:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download <span className="text-primary">Static Site Files</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download all files below and place them in the same folder. Open index.html in a browser to run the site.
          </p>
          
          <Button
            size="lg"
            className="mt-6"
            onClick={downloadAllAsZip}
            disabled={isDownloading}
          >
            <FolderArchive className="mr-2 h-5 w-5" />
            {isDownloading ? "Creating ZIP..." : "Download All as ZIP"}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {files.map((file) => (
            <Card key={file.name} className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.label}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-3"
                asChild
              >
                <a href={file.path} download={file.name}>
                  Download
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
