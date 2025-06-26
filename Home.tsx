// import { useState } from "react";
// import { init } from "@telegram-apps/sdk"; //invoice
// // import TON from "./Images/Ton.png";
// import starIcon from "./Images/ss.png";
// import copywrImg from "./Images/copywriter.jpeg";
// import privateImg from "./Images/private.jpeg";
// import privatepayImg from "./Images/privatepay.jpeg";
// import starImg from './Images/starpay.jpeg';
// import weatherImg from "./Images/weather.jpeg";
// import marketdbImg from "./Images/marketbd.jpeg";
// import feedbackImg from "./Images/Feedback.jpeg";
// import checkImg from "./Images/check.jpeg";
// import dbImg from "./Images/db.jpeg";
// import cr7 from "./Images/cr7.jpeg";
// import minicin from "./Images/minicin.jpeg";
// import sh from "./Images/shopicon.png";
// import minipay from "./Images/minipay.jpeg";
// import minifilm from "./Images/minifilm.jpeg";
// import minicrypto from "./Images/minicrypto.jpeg";
// import minimarket from "./Images/minimarket.jpeg";
// import minimarketdb from "./Images/minimarketdb.jpeg";
// import minimusic from "./Images/minimusic.jpeg";
// import musk from "./Images/minimusk.jpeg";
// import pop from "./Images/popcorn.jpeg";
// import coff from "./Images/coffee.jpeg";
// import red from "./Images/redbull.jpeg";
// import pizza from "./Images/pizza.jpeg";
// import ton from "./Images/ton.jpeg";
// import dunkin from "./Images/dunkin.jpeg";
// import strr from "./Images/stardon.jpeg";
// import flappybImg from "./Images/flappybird.jpeg";
// import astrolog from "./Images/astrolog.jpeg";
// import DeepSeekImg from "./Images/DeepSeek.jpeg";
// import SearchImg from "./Images/Search.jpeg";
// import MarketImg from "./Images/Market.jpeg";
// import CryptoImg from './Images/Crypto.jpeg';
// import FitnessIcon from './Images/Fitness.jpeg';
// import rickImg from "./Images/Rick.jpeg";
// import BottomNav from './ButtonNav';
// import { handlePayment1 } from "./Donate";
// import './App.css';

// // init();

// const HomePage: React.FC = () => {
//   const [loading] = useState<boolean>(false); //setLoading

//   const menuItems = [
//     { id: 1, name: "Mini App с оплатой в TG Stars", price: 999, image: minipay },
//     { id: 2, name: "Mini App с внедрением/ показом фильма", price: 1299, image: minicin },
//     { id: 3, name: "Mini App мини интернет магазин", price: 1999, image: minimarket },
//     { id: 4, name: "Mini App мини интернет магазин с Базой Данных", price: 2299, image: minimarketdb },
//     { id: 5, name: "Mini App фан страница CR7", price: 1499, image: cr7 },
//     { id: 6, name: "Mini App фан страница Илона Маска", price: 1499, image: musk },
//     { id: 7, name: "Mini App c капитализацией крипты", price: 1349, image: minicrypto },
//     { id: 8, name: "Mini App мини стриминг сервис с музыкой", price: 1499, image: minimusic },
//     { id: 9, name: "Mini App мини стриминг сервис с фильмами", price: 1499, image: minifilm },
//     { id: 10, name: "Flappy Bird(игра в мини приложении TG)", price: 499, image: flappybImg },
//     { id: 11, name: "Бот с оплатой в TG Stars", price: 99, image: starImg },
//     { id: 12, name: "Бот с подключением DeepSeek", price: 299, image: DeepSeekImg },
//     { id: 13, name: "Бот с ИИ астрологом", price: 299, image: astrolog },
//     { id: 14, name: "Бот с ИИ Риком Санчезом", price: 349, image: rickImg },
//     { id: 15, name: "Бот с ИИ копирайтером для тг канала", price: 399, image: copywrImg },
//     { id: 16, name: "Бот с поисков фильмов", price: 349, image: SearchImg },
//     { id: 17, name: "Бот с допуском в закрытые каналы", price: 299, image: privateImg },
//     { id: 18, name: "Бот с капитализацией крипты", price: 199, image: CryptoImg },
//     { id: 19, name: "Бот с обратной связью/предложкой", price: 249, image: feedbackImg },
//     { id: 20, name: "Бот мини интернет магазин", price: 499, image: MarketImg },
//     { id: 21, name: "Бот мини интернет магазин(с базой данных)", price: 599, image: marketdbImg },
//     { id: 22, name: "Бот с добавлением в закрытый канал после оплаты", price: 349, image: privatepayImg },
//     { id: 23, name: "Бот с ИИ фитнес-тренером", price: 399, image: FitnessIcon },
//     { id: 24, name: "Бот прогноз погоды", price: 199, image: weatherImg },
//     { id: 25, name: "Бот с проверкой подписки на каналы", price: 199, image: checkImg },
//     { id: 26, name: "Бот с простой базой данных", price: 149, image: dbImg },
//     { id: 27, name: "Поддержать разработчика", price: 99, image: pop },
//     { id: 28, name: "Поддержать разработчика", price: 249, image: coff },
//     { id: 29, name: "Поддержать разработчика", price: 499, image: pizza },
//     { id: 30, name: "Поддержать разработчика", price: 999, image: dunkin },
//     { id: 31, name: "Поддержать разработчика", price: 2499, image: red },
//     { id: 32, name: "Поддержать разработчика", price: 4999, image: strr },
//     { id: 33, name: "Поддержать разработчика", price: 9999, image: ton }















//   ];

//   return (
//     <div className="dg-app">
//       <div className="dg-header">
//         <img 
//         src={sh} 
//         className="dg-header-image"
//         />
//       </div>
//       <div className="dg-menu-scroll">
//         <div className="dg-products-grid">
//           {menuItems.map((item) => (
//             <div key={item.id} className="dg-product-card">
//               <div className="dg-image-container">
//                 <img 
//                   src={item.image} 
//                   alt={item.name} 
//                   className="dg-product-image"
//                 />
//               </div>
//               <div className="dg-product-bottom">
//                 <h3 className="dg-product-name">{item.name}</h3>
//                 {/* <img src={starIcon} alt="Star" className="star-icon" /> */}
//                 <div className="dg-product-price"><img src={starIcon} alt="Star" className="star-icon" /> {item.price.toFixed(2)}</div>
//                 <button 
//                   className={`dg-add-button ${loading ? 'loading' : ''}`}
//                   onClick={() => handlePayment1(item.price)}
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'BUY'}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <BottomNav />
//     </div>
//   );
// };

// export default HomePage;








































import { useState, useEffect } from 'react'; //React
import { TonConnectUI } from '@tonconnect/ui';
import axios from 'axios';

// Конфигурация TonConnect (замени на свой манифест)
const tonConnectUI = new TonConnectUI({
  manifestUrl: 'http://localhost:5173/tonconnect-manifest.json', // https://your-website.com/tonconnect-manifest.json
});

// Адреса контрактов (замени на свои)
const TON_ADDRESS = 'EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c'; // TON 
const MEMCOIN_ADDRESS = 'EQAyrrAjgSuyHrgGO1HimNbGV9tVLndZ3uocLaOyTw_FgegD'; // Адрес мемкоина в TON

const HomePage = () => {
  const [wallet, setWallet] = useState<string | null>(null);
  const [tonBalance, setTonBalance] = useState<string>('0');
  const [memBalance, setMemBalance] = useState<string>('0');
  const [price, setPrice] = useState<string>('0');
  const [amount, setAmount] = useState<string>('1');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Подключение кошелька
  const connectWallet = async () => {
    await tonConnectUI.connectWallet();
    const wallet = tonConnectUI.wallet;
    if (wallet) {
      setWallet(wallet.account.address);
      fetchBalances(wallet.account.address);
    }
  };

  // Получение балансов TON и мемкоина
  const fetchBalances = async (address: string) => {
    try {
      // Запрос баланса TON (можно через TON API или TonCenter)
      const tonBalance = await axios.get(`https://tonapi.io/v1/account/getInfo?account=${address}`);
      setTonBalance((tonBalance.data.balance / 1e9).toFixed(2));

      // Запрос баланса мемкоина (через Jetton API)
      const memBalance = await axios.get(`https://tonapi.io/v1/jetton/getBalances?account=${address}`);
      const memcoinData = memBalance.data.balances.find(
        (jetton: any) => jetton.jetton_address === MEMCOIN_ADDRESS
      );
      setMemBalance(memcoinData ? (memcoinData.balance / 1e9).toFixed(2) : '0');
    } catch (error) {
      console.error('Error fetching balances:', error);
    }
  };

  // Получение курса MEM/TON через STON.FI API
  const fetchPrice = async () => {
    try {
      const response = await axios.get(
        `https://api.ston.fi/v1/rates?token_in=${TON_ADDRESS}&token_out=${MEMCOIN_ADDRESS}`
      );
      setPrice(response.data.rate);
    } catch (error) {
      console.error('Error fetching price:', error);
    }
  };

  // Обмен TON → MEMCOIN через STON.FI
  const buyMemcoin = async () => {
    if (!wallet || !amount) return;
    setIsLoading(true);
    try {
      const response = await axios.post('https://api.ston.fi/v1/swap', {
        offer_address: wallet,
        ask_address: MEMCOIN_ADDRESS,
        units: (parseFloat(amount) * 1e9).toString(), // 1 TON = 1e9 наноTON
        slippage_tolerance: '0.5', // 0.5% slippage
      });
      alert(`Успешно! Tx: ${response.data.tx_hash}`);
      fetchBalances(wallet);
    } catch (error) {
      console.error('Swap error:', error);
      alert('Ошибка обмена!');
    } finally {
      setIsLoading(false);
    }
  };

  // Обмен MEMCOIN → TON
  const sellMemcoin = async () => {
    if (!wallet || !amount) return;
    setIsLoading(true);
    try {
      const response = await axios.post('https://api.ston.fi/v1/swap', {
        offer_address: wallet,
        ask_address: TON_ADDRESS,
        units: (parseFloat(amount) * 1e9).toString(), // MEM → TON
        slippage_tolerance: '0.5',
      });
      alert(`Успешно! Tx: ${response.data.tx_hash}`);
      fetchBalances(wallet);
    } catch (error) {
      console.error('Swap error:', error);
      alert('Ошибка обмена!');
    } finally {
      setIsLoading(false);
    }
  };

  // При загрузке страницы подгружаем цену
  useEffect(() => {
    fetchPrice();
    if (tonConnectUI.wallet) {
      setWallet(tonConnectUI.wallet.account.address);
      fetchBalances(tonConnectUI.wallet.account.address);
    }
  }, []);

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Мемкоин ↔ TON</h1>
      
      {!wallet ? (
        <button onClick={connectWallet}>🔗 Подключить кошелек</button>
      ) : (
        <>
          <p>Кошелек: {wallet.slice(0, 6)}...{wallet.slice(-4)}</p>
          <p>Баланс TON: {tonBalance}</p>
          <p>Баланс MEM: {memBalance}</p>
          <p>Текущий курс: 1 MEM = {price} TON</p>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Количество"
          />

          <button onClick={buyMemcoin} disabled={isLoading}>
            {isLoading ? 'Загрузка...' : `Купить ${amount} MEM`}
          </button>

          <button onClick={sellMemcoin} disabled={isLoading}>
            {isLoading ? 'Загрузка...' : `Продать ${amount} MEM`}
          </button>
        </>
      )}
    </div>
  );
};

export default HomePage;