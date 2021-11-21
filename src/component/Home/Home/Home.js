import React from "react";
import NavigationBar from "../../Shared/Navbar/NavigationBar";
import Banner from "../Banner/Banner";
import BannerFooter from "../BannerFooter/BannerFooter";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Banner> </Banner>
      <BannerFooter></BannerFooter>
      <Services></Services>
    </div>
  );
};

export default Home;
