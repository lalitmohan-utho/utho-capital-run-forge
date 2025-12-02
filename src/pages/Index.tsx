import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RaceCategories from "@/components/RaceCategories";
import WhyRunWithUs from "@/components/WhyRunWithUs";
import Sustainability from "@/components/Sustainability";
import RaceExperience from "@/components/RaceExperience";
import FinishLine from "@/components/FinishLine";
import Sponsors from "@/components/Sponsors";
import TeamRegistration from "@/components/TeamRegistration";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyRunWithUs />
      <RaceCategories />
      <Sustainability />
      <RaceExperience />
      <FinishLine />
      <Sponsors />
      <TeamRegistration />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
