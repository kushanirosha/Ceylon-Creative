import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhoWeAre from '@/components/WhoWeAre';
import AffordableData from '@/components/AffordableData';
import Testamonial from '@/components/Testamonial';
import Faq from '@/components/Faq';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <WhoWeAre/>
        <Services />
        {/* <Packages /> */}
        <AffordableData/>
        {/* <Portfolio /> */}
        <Testamonial/>
        {/* <About /> */}
        <Faq/>
        {/* <Contact /> */}
      </main>
    </div>
  );
}