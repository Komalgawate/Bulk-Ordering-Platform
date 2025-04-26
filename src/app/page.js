
import About from '../components/About';
import Contact from '../components/Contact';
import './globals.css';
import Hero from '../components/Hero'
import Menuitem from '../components/Menuitem';
import Productcatalog from '../components/Productcatalog';
export default function Home() {
  return (
  <>
   <Hero/>
   <Productcatalog/>
  <Menuitem/>
  <Menuitem/>
  <Menuitem/>
  <About/>
  <Contact/>
   </>
  );
}
