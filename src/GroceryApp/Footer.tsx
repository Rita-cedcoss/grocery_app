import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      
      {/* footer */}
      <div className="container-fluid  bg-dark-subtle mt-5">
        <div className="container-fluid d-flex justify-content-between border-bottom border-danger border-2">
          <p>Get new recipes & blogs in your inbox every week</p>
          <div className="col-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Your Email-Id"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                className="input-group-text bg-success text-light"
                id="basic-addon2"
              >
                Subscribe
              </span>
            </div>
          </div>
        </div>
        <div className=" container-fluid">
          <div className="row">
            <div className="col-3 p-3 text-align-center border-end">
              <img
                alt=""
                height="40px"
                width="100%"
                src="https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/logo.jpg"
              />
            </div>
            <div className="col-2 p-3 text-align-center border-end">
              <h6>Information</h6>
              <Link to="/about_us">
              <p>About US</p>
              </Link>
              <p>Privacy</p>
              <p>Store Locator</p>
            </div>
            <div className="col-2 p-3 text-align-center border-end">
              <h6>Shopping</h6>
              <p>Your Account</p>
              <p>FAQ</p>
              <p>Return Policy</p>
            </div>
            <div className="col-2 p-3 text-align-center border-end">
              <h6>Engage</h6>
              <p>Contact Us</p>
              <p>Share Feedback</p>
              <p>Coperate Site</p>
            </div>
            <div className="col-3 p-3 text-align-center ">
              <img src="foot.png" height="140px" width="100%" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <div className="col-2  text-align-center">
            <img
              alt=""
              height="30px"
              width="100%"
              src="https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/payoptions.png"
            />
          </div>
          <div>
            <p className="pe-4">
              <i className="bi bi-cart3 fs-4 "></i>HASSLE FREE RETURNS AND NO
              QUESTIONS ASKED
            </p>
          </div>
        </div>
        
        
      </div>
      <div className="container-fluid foot-img">
          <img alt="" src="img2.png" height="70px" width="100%" />
        </div>
      <div className="container-fluid bg-success p-4 text-light ">
    
          <h6>POPULAR PRODUCTS:</h6>
          <p>
            Sona Masoori RiceSunflower OilGheeBasmati RiceLeaf TeaWhole Wheat
            AttaCashewAlmondTur DalKolam RiceSugarDetergent Powder MwDetergent
            Powder BwFabric Care - Detergent LiquidMopUrad Whole WhitePonni
            RiceNamkeensChocolate Bars MilkFabric Care - Post WashChipsOlive
            OilInstant NoodlesDishwash LiquidCream BiscuitsCoffeeOther Regional
            RiceToilet CleanersDatesGingelly OilFloor CleanersBlended OilMoong
            DalSoap Sanitary PadWalnutIdly RiceHair Shampoo BeautyRaw PeanutSoap
            BeautyMuesliCookieBrown Malt DrinksKitchen TowelNectar Juices
          </p>
          <h6>POPULAR CATEGORIES:</h6>
          <p>
            Fruits & VegetablesGroceryMeat, Poultry & FishDairy, Frozen &
            BattersBeveragesBranded FoodSnacks & SweetsHome & HygieneBeauty &
            Personal CareBaby Food & CareHome & KitchenLuggage & TravelToys &
            StationeryClothing & AccessoriesBakery & CakesElectronics &
            Appliances
          </p>
          <h6>POPULAR BRANDS:</h6>
          <p>
            SurfexcelAmulAashirvaadFortuneTataNGK Chef ChoiceBritanniaSafe
            HarvestSunpureGTSCadburysMother DairyMilton -spotzeroNandiniBrooke
            BondKellogg'SIndia GateMaggiComfortGold WinnerMilky
            MistParleIdhyamLaysHarpicMTRGalaSaffolaDaawatSunfeastVimMc-cainDoveColgateNiveaArielWhisperHorlicksDettolKissanDaburHimalaya
          </p>
          <h6>CITIES WE SERVE:</h6>
          <p>
            Chennai, Bangalore, Hyderabad, New Delhi, Gurgaon, Ghaziabad,
            Coimbatore, Shimoga, Mangalore SPAR India © All rights Reserved
          </p>
        </div>
    </>
  );
};

export default Footer;
