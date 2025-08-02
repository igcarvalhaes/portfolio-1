import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6 auto-rows-min">
          {/* Hero Section - Large tile */}
          <HeroSection />

          {/* Skills Section - Medium tile */}
          <SkillsSection />

          {/* About Section - Medium tile spanning 10 columns to match hero + skills width */}
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <AboutSection />
          </div>

          {/* Projects Section - Large tile spanning 10 columns to match hero + skills width */}
          <div
            id="projetos"
            className="col-span-12 lg:col-span-10 lg:col-start-2"
          >
            <ProjectsSection />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
