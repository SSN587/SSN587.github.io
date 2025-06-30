// import styled from 'styled-components';
// import telegramIcon from './Images/telegram.jpeg';
// import githubIcon from './Images/GitHub.jpeg';
// import BottomNav from "./ButtonNav.tsx";



// const Profile = () => {
//   return (
//     <Wrapper>
//     <ScrollableContent>
//     <ContentWrapper>
//     <Description><h2>Soon...</h2></Description>

//     <SocialButtonsContainer>
//     <SocialButton href="https://t.me/GameevB" target="_blank" rel="noopener noreferrer"> 
//       <SocialIcon src={telegramIcon} alt="Telegram" />
//     </SocialButton>

//     <SocialButton href="https://github.com/IncognitoMarketPlaceG" target="_blank" rel="noopener noreferrer"> 
//       <SocialIcon src={githubIcon} alt="GitHub" />
//     </SocialButton>

//     </SocialButtonsContainer>    
//         </ContentWrapper>
//         </ScrollableContent>
//         <BottomNav />
//     </Wrapper>
//   );
// };

// export default Profile;

// const Wrapper = styled.div`
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     overflow-x: hidden;
// `;

// const SocialButtonsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px; // Расстояние между кнопками
//   width: 100%;
// `;

// const SocialButton = styled.a`
//     display: inline-block;
//     cursor: pointer;
//     transition: transform 0.2s;
    
//     &:hover {
//         transform: scale(1.1);
//     }
// `;

// const SocialIcon = styled.img`
//     height: 40px;
//     weight: 40px;
//     // width: 140px;
//     border-radius: 10px;
// `;

// const Description = styled.div`
//   border-radius: 8px;
//   color: #A6A6A6;
//   line-height: 1.6;
//   width: 100%;
//   padding-top: 300px;

//   h2 {
//     color: #ffffff;
//     margin: 0px;
//     text-align: center;
//     text-shadow: 0 0 10px rgba(189, 10, 14, 0.5);
//   }
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   max-width: 800px;  
//   width: 100%;
//   padding-bottom: 100px;
// `;

// const ScrollableContent = styled.div`
//   width: 100%;
//   max-width: 800px;
//   height: 100%;
//   overflow-y: auto;    
//   overflow-x: hidden; 

//   &::-webkit-scrollbar {
//     width: 8px;
//   }
  
//   &::-webkit-scrollbar-thumb {
//     border-radius: 4px;
//   }
// `;

















































































































































import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import copywrImg from "./Images/aicopywriter.jpeg";
import starImg from './Images/starpay.jpeg';
import minicin from "./Images/minicin.jpeg";
import minipay from "./Images/minipay.jpeg";
import minifilm from "./Images/minifilm.jpeg";
import minicrypto from "./Images/minicrypto.jpeg";
import minimusic from "./Images/minimusic.jpeg";
// import weatherImg from "./Images/weather.jpeg";
// import marketdbImg from "./Images/marketbd.jpeg";
// import feedbackImg from "./Images/Feedback.jpeg";
// import checkImg from "./Images/check.jpeg";
// import dbImg from "./Images/db.jpeg";
// import cr7 from "./Images/cr7.jpeg";

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
import rickImg from "./Images/Rick.jpeg";
import BottomNav from './ButtonNav';
// import { init } from "@telegram-apps/sdk";
// import telegramIcon from './Images/telegram.jpeg';
// import githubIcon from './Images/GitHub.jpeg';
// import TON from "./Images/TON.png";
import sh from "./Images/shopicon.png";
// import { handlePayment1 } from "./Donate";
import './Search.css';

interface MenuItem {
  id: number;
  type: string;
  name: string;
  price: number;
  image: string;
}

const Search: React.FC = () => {
  // const [loading] = useState<boolean>(false);
  const menuItems: MenuItem[] = [
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

  const allTypes = Array.from(new Set(menuItems.map(item => item.type)));
  const [selectedTypes, setSelectedTypes] = useState<string[]>(allTypes);

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      if (selectedTypes.length > 1) {
        setSelectedTypes(selectedTypes.filter(t => t !== type));
      }
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filteredItems = menuItems.filter(item => selectedTypes.includes(item.type));

  return (
    <div style={styles.container}>
      <div className="dg-header">
        <img src={sh} className="dg-header-image" alt="Shop Logo" />
      </div>
      {/* Фильтр по типам */}
        <div style={styles.typesScrollContainer}>
          <div style={styles.typeButtons}>
            <button
              onClick={() => setSelectedTypes(allTypes)}
              style={{
                ...styles.typeButton,
                ...(selectedTypes.length === allTypes.length ? styles.activeTypeButton : {})
              }}
            >
              All
            </button>
            
            {allTypes.map(type => (
              <button
                key={type}
                onClick={() => toggleType(type)}
                style={{
                  ...styles.typeButton,
                  ...(selectedTypes.includes(type) ? styles.activeTypeButton : {})
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Список товаров */}
        <div style={styles.itemsScrollContainer}>
          {/* <div style={styles.itemsGrid}> */}
            {filteredItems.map(item => (
              <Link 
                to={`/product/${item.id}`} 
                key={item.id} 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={styles.menuItem}>
                  <img src={item.image} alt={item.name} style={styles.itemImage} />
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemPrice}>Price: ${item.price}</p>
                </div>
              </Link>
            ))}
          {/* </div> */}
        </div>
        <BottomNav />
      </div>
    );
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      height: '100vh',
      padding: '20px',
      boxSizing: 'border-box' as const,
    },
    typesScrollContainer: {
      overflowX: 'auto' as const,
      marginBottom: '20px',
      paddingBottom: '10px',
    },
    typeButtons: {
      display: 'flex',
      gap: '10px',
      width: 'max-content',
    },
    typeButton: {
      padding: '8px 16px',
      background: '#f0f0f0',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      whiteSpace: 'nowrap' as const,
      fontSize: '14px',
    },
    activeTypeButton: {
      background: '#007bff',
      color: 'white',
    },
    itemsScrollContainer: {
      flex: 1,
      overflowY: 'auto' as const,
    },
    itemsGrid: {
      display: 'flex',          
      flexDirection: 'column',  
      gap: '20px',              
      // display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      // gap: '20px',
      paddingRight: '10px',
      paddingBottom: '120px',
    },
    menuItem: {
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      height: 'fit-content',
      width: '100%',           
      maxWidth: '600px',      
      margin: '0 auto',      
      // border: '1px solid #ddd',
      // padding: '15px',
      // borderRadius: '8px',
      // height: 'fit-content',
      transition: 'transform 0.2s',
      ':hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }
    },
    itemImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover' as const,
      borderRadius: '4px',
      marginBottom: '10px',
    },
    itemName: {
      margin: '0 0 10px 0',
      fontSize: '16px',
    },
    itemPrice: {
      margin: '0',
      color: '#666',
      fontSize: '14px',
    },
  };

export default Search;






