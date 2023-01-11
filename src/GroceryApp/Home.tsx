import React from "react";
import productData from "./data.json";
import CategoryProduct from "./CategoryProduct";
import DealsSlider from "./DealsSlider";
import ProdBanner from "./ProdBanner";
import ProdSlider from "./ProdSlider";
import ProdSlider1 from "./ProdSlider1";
import About from "./About";

const Home = () => {
  const arrImg = [
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Tableware-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Home-Care-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Bedsheets-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-11/Spar-Day-Grocery-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Tableware-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Pasta-and-Noodles-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Drinkware-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Tableware-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Home-Care-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Bedsheets-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-11/Spar-Day-Grocery-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Tableware-min.png",
  ];
  const categoryImage = [
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Fruits-&-Vegetable-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Daily-Essentials-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Fish-and-Meat-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Packaged%20Food-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Masala-and-Dry-Fruits-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Soft-Drinks-and-Juices-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Tea-coffee-and-more-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Home%20Care-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Cookware-and-Serveware-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Juicer-Mixer-Blenders-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Glassware-and-Mugs-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Winter-Winter-Ready-min.png",
  ];
  return (
    <>
      <ProdSlider />
      <ProdBanner
        height="50px"
        imgs="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/nov_20_2020_greestrip.jpg"
      />
      <ProdSlider1 heading="Offers" arrimg={arrImg} height="200px" />
      <CategoryProduct categorymage={categoryImage} />
      <DealsSlider prodData={productData} heading="Fresh Deals" />
      <ProdBanner
        height="100px"
        imgs="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/Online%20Grocery%20Shopping-Buy%20grocery%20online%20save.jpg"
      />
      <DealsSlider prodData={productData} heading="Product Categories" />
      
      <ProdBanner
        height="100px"
        imgs="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/Online%20Grocery%20Shopping-Buy%20grocery%20online%20save.jpg"
      />
      <div className="container border p-4 mt-4 mb-4">
        <h6>Online Grocery Store With the Freshest Produce — SPAR</h6>
        <p>
          Online Grocery Store With the Freshest Produce — SPAR SPAR is the
          leading hypermarket and focuses to provide its customers with fresh
          produce every time they visit the store, be it the physical or online
          grocery store. SPAR has 12,500+ stores in 44 countries across 4
          continents. In India SPAR currently has 25 stores across 9 cities
          including — Bangalore, Mangalore, Shimoga, Chennai, Coimbatore,
          Hyderabad, New Delhi, Gurugram and Ghaziabad. Apart from physical
          stores, SPAR also has an online presence. It is great to get all your
          groceries and daily essentials delivered right to your doorstep? Isn't
          it?
        </p>
        <h6>
          SPAR's 25 online hypermarket in India is convenient, has top brands,
          exclusive deals and so much more to offer
        </h6>
      </div>
    </>
  );
};

export default Home;
