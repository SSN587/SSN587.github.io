import { useState } from "react";
// import { init } from "@telegram-apps/sdk"; //invoice
import telegramIcon from './Images/telegram.jpeg';
import githubIcon from './Images/GitHub.jpeg';
import TON from "./Images/TON.png";
// import starIcon from "./Images/ss.png";
import copywrImg from "./Images/aicopywriter.jpeg";
// import privateImg from "./Images/private.jpeg";
// import privatepayImg from "./Images/privatepay.jpeg";
import starImg from './Images/starpay.jpeg';
// import weatherImg from "./Images/weather.jpeg";
// import marketdbImg from "./Images/marketbd.jpeg";
// import feedbackImg from "./Images/Feedback.jpeg";
// import checkImg from "./Images/check.jpeg";
// import dbImg from "./Images/db.jpeg";
// import cr7 from "./Images/cr7.jpeg";
import minicin from "./Images/minicin.jpeg";
import sh from "./Images/shopicon.png";
import minipay from "./Images/minipay.jpeg";
import minifilm from "./Images/minifilm.jpeg";
import minicrypto from "./Images/minicrypto.jpeg";
// import minimarket from "./Images/minimarket.jpeg";
// import minimarketdb from "./Images/minimarketdb.jpeg";
import minimusic from "./Images/minimusic.jpeg";
// import musk from "./Images/minimusk.jpeg";
// import pop from "./Images/popcorn.jpeg";
import coff from "./Images/coffee.jpeg";
import red from "./Images/redbull.jpeg";
import pizza from "./Images/pizza.jpeg";
import ton from "./Images/ton.jpeg";
import dunkin from "./Images/dunkin.jpeg";
import strr from "./Images/stardon.jpeg";
// import flappybImg from "./Images/flappybird.jpeg";
// import astrolog from "./Images/astrolog.jpeg";
// import DeepSeekImg from "./Images/DeepSeek.jpeg";
// import SearchImg from "./Images/Search.jpeg";
// import MarketImg from "./Images/Market.jpeg";
import CryptoImg from './Images/Crypto.jpeg';
// import FitnessIcon from './Images/Fitness.jpeg';
import rickImg from "./Images/Rick.jpeg";
import BottomNav from './ButtonNav';
import { handlePayment1 } from "./Donate";
import './App.css';

// init();

const HomePage: React.FC = () => {
  const [loading] = useState<boolean>(false); //setLoading

  const menuItems = [
    { id: 1, type: "Code", name: "Automatic AI Bot CopyWriter", price: 10, image: copywrImg },
    { id: 2, type: "Code", name: "Mini App with payments in TG Stars", price: 5, image: minipay },
    { id: 3, type: "Code", name: "Mini App demo online cinema", price: 3, image: minicin },
    { id: 4, type: "Code", name: "TG Bot with payments in TG STARS", price: 1, image: starImg },
    { id: 5, type: "Code", name: "TG Bot AI Rick Sanchez", price: 2, image: rickImg },
    { id: 6, type: "Code", name: "TG Bot with Crypto Capitalization", price: 2, image: CryptoImg },
    { id: 7, type: "Models", name: "3D model Rick Sanchez", price: 2, image: minicrypto },
    { id: 8, type: "Models", name: "3D model Miki TMNT", price: 2, image: minimusic },
    { id: 9, type: "Models", name: "3D model Shrek", price: 2, image: minifilm },
    { id: 10, type: "Donate", name: "Donate 1 TON for Dev", price: 1, image: coff },
    { id: 11, type: "Donate", name: "Donate 5 TON for Dev", price: 5, image: pizza   },
    { id: 12, type: "Donate", name: "Donate 10 TON for Dev", price: 10, image: strr },
    { id: 13, type: "Donate", name: "Donate 25 TON for Dev", price: 25, image: dunkin },
    { id: 14, type: "Donate", name: "Donate 100 TON for Dev", price: 100, image: red },
    { id: 15, type: "Donate", name: "Donate 1000 TON for Dev", price: 1000, image: ton }
  ];



  return (
    <div className="dg-app">
      <div className="dg-header">
        <img 
        src={sh} 
        className="dg-header-image"
        />
      </div>
      <div className="dg-menu-scroll">
        <div className="dg-products-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="dg-product-card">
              <div className="dg-image-container">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="dg-product-image"
                />
              </div>
              <div className="dg-product-bottom">
                <h3 className="dg-product-name">{item.name}</h3>
                {/* <img src={starIcon} alt="Star" className="star-icon" /> */}
                <div className="dg-product-price"><img src={TON} alt="Star" className="star-icon" /> {item.price.toFixed(2)}</div>
                <button 
                  className={`dg-add-button ${loading ? 'loading' : ''}`}
                  onClick={() => handlePayment1(item.price)}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'BUY'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="SocialButtonsContainer">
          <a className="SocialButton" href="https://t.me/GameevB" target="_blank" rel="noopener noreferrer"> 
            <img className="SocialIcon" src={telegramIcon} alt="Telegram" />
          </a>

          <a className="SocialButton" href="https://github.com/IncognitoMarketPlaceG" target="_blank" rel="noopener noreferrer"> 
            <img className="SocialIcon" src={githubIcon} alt="GitHub" />
          </a>

        </div>   
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage;















































































