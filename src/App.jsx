import React, {useEffect} from 'react'
import Navbar from "./components/navbar/index"
import Homepage from "./components/homepage/index"
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh(); // Cleanup AOS when the component unmounts
    };
  }, []);

  return (
    <div className='bg-[#FEF9F6]'>
      <Navbar/>
      <Homepage/>
    </div>
  )
}

export default App