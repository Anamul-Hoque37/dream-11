import Banner from "./Container/Banner";
import Available from "./Container/Containers/Available";
import Items from "./Container/Containers/Items";
import Selected from "./Container/Containers/Selected";
import Email from "./Container/Email";
import Footer from "./Container/Footer";
import Navbar from "./Container/Navbar";


const App = () => {
  return (
    <div>
      {/* Header section */}
      <section>
        <Navbar></Navbar>
        <Banner></Banner>
      </section>
      {/* Main Section */}
      <section>
        <Items></Items>
        <Available></Available>
        <Selected></Selected>
      </section>
      {/* Email section */}
      <Email></Email>
      {/* Footer section */}
      <Footer></Footer>
      
    </div>
  );
};

export default App;