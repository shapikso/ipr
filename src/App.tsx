import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import Features from "./components/Features/Features";
import Organize from "./components/Organize/Organize";
import Prototyping from "./components/Prototyping/Prototyping";
import Partners from "./components/Partners/Partners";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
      <Layout>
          <Features/>
          <Organize/>
          <Prototyping/>
          <Partners/>
          <Testimonials/>
          <Pricing/>
          <ContactUs/>
      </Layout>)
}

export default App;
