
import Banner from "./Container/Banner";
import Items from "./Container/Containers/Items";
import Email from "./Container/Email";
import Footer from "./Container/Footer";
import Navbar from "./Container/Navbar";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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

  const [initialValue, setInitialValue] =useState(0)
  const saveAmount = (amount) => {
    setInitialValue(initialValue + amount)
    if(amount){
      toast('Thanks for added amount',{amount})
    }
  }

  const handleDecreaseValue = (player)=>{
      setInitialValue(initialValue-player.bidding_price)
      if(player){
        toast('Welcome Our Team ')
      }
  }

  const handleIncreaseValue = (player) => {
    setInitialValue(initialValue+player.bidding_price)
    if(player){
      toast('Bad Luck!! See You Next Season')
    }
  }

  return (
    <div className="Container mx-36">
      {/* Header section */}
      <section>
        <Navbar initialValue={initialValue}></Navbar>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        />
        <Banner saveAmount={saveAmount}></Banner>
      </section>
      {/* Main Section */}
      <section>
        <Items isActive={isActive} initialValue={initialValue} handleIncreaseValue={handleIncreaseValue} handleDecreaseValue={handleDecreaseValue} handleIsActiveState={handleIsActiveState}></Items>
        

      </section>
      {/* Email section */}
      <Email></Email>
      {/* Footer section */}
      <Footer></Footer>
      
    </div>
  );
};

export default App;