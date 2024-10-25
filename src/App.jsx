
import Banner from "./Container/Banner";
import Items from "./Container/Containers/Items";
import Email from "./Container/Email";
import Footer from "./Container/Footer";
import Navbar from "./Container/Navbar";
import { useState } from "react";



const App = () => {
const [isActive, setIsActive] = useState({
  available: true, 
  Status: "available"
})
  const handleIsActiveState = (status) =>{
    if(status == "available"){
      setIsActive({
        available:true,
        status: "available"
      })
    }else{
      setIsActive({
        available: false,
        status: "selected"
      })
    }
  }




  return (
    <div className="Container mx-36 my-10">
      {/* Header section */}
      <section>
        <Navbar></Navbar>
        <Banner></Banner>
      </section>
      {/* Main Section */}
      <section>
        <Items isActive={isActive} handleIsActiveState={handleIsActiveState}></Items>
        

      </section>
      {/* Email section */}
      <Email></Email>
      {/* Footer section */}
      <Footer></Footer>
      
    </div>
  );
};

export default App;