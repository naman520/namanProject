import Section from "../components/Section";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="scroll-smooth overflow-y-scroll h-screen snap-y snap-mandatory">
        <Section bgColor="#F8FAFC"><Hero /></Section>
<Section bgColor="#FFFFFF"><About /></Section>
<Section bgColor="#F1F5F9"><Services /></Section>
<Section bgColor="#E2E8F0"><Projects /></Section>
<Section bgColor="#FFFFFF"><Testimonials /></Section>
<Section bgColor="#F8FAFC"><Contact /></Section>


      </main>
    </>
  );
}