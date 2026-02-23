import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ContactFormSection from './components/ContactFormSection';
import WhyChooseSection from './components/WhyChooseSection';
import NetworkStats from './components/NetworkStats';
import FlexibleOptions from './components/FlexibleOptions';
import PricingTable from './components/PricingTable';

function App() {
  return (
    <Layout>
      <HeroSection />
      <ContactFormSection />
      <WhyChooseSection />
      <NetworkStats />
      <FlexibleOptions />
       <PricingTable /> 
    </Layout>
  );
}

export default App;