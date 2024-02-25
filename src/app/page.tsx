import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import Backgroundimg from "./components/Backgroundimg";
export default function Home() {
  return (
   <div>
    <Backgroundimg/>
      <Header/>
      <Hero/>
      <Feature/>
      <Price/>
      <Footer/>
   </div>
  );
}
