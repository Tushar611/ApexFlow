import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ServicesSwipe from './components/ServicesSwipe';
import QuoteCalculator from './components/QuoteCalculator';
import Features from './components/Features';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <ServicesSwipe />
      <QuoteCalculator />
      <Features />
      <BeforeAfterSlider />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
