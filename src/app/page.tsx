import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import YarnFiber from "@/components/YarnFiber";
import Store from "@/components/Store";
import Factory from "@/components/Factory";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <YarnFiber />
        <Store />
        <Factory />
        <Vision />
      </main>
      <Footer />
    </>
  );
}
