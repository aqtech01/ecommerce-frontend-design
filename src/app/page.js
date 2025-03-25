import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Products from "./pages/products/page";
import HeroSection from "./components/HeroSection";



export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Main>
      <Products/>
    </Main>
    <Footer/>
    </>
  );
}
