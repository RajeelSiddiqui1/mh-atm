import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import WhyChooseSection from './components/WhyChooseSection';
import FlexibleOptions from './components/FlexibleOptions';
import ATMProducts from './components/ATMProducts';
import NetworkStats from './components/NetworkStats';
import PricingTable from './components/PricingTable';
import ContactFormSection from './components/ContactFormSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseSection />
      <FlexibleOptions />
      <ATMProducts />
      <NetworkStats />
      <PricingTable />
      <ContactFormSection />
    </Layout>
  );
}

export default App;
