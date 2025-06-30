import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ShopIcon from './Images/profile.png';
import HomeIcon from './Images/homeicon.png';
import SearchIcon from './Images/search.png';
import './BottomNav.css';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bottom-nav">
      <button 
        className="nav-button"
        onClick={() => navigate('/search')}
      >
        <SocialIcon src={SearchIcon} alt="x" />
      </button>

      <button 
        className="nav-button"
        onClick={() => navigate('/main')}
      >
        <SocialIcon src={HomeIcon} alt="x" />
      </button>
    
      <button 
        className="nav-button"
        onClick={() => navigate('/profile')}
      >
        <SocialIcon src={ShopIcon} alt="x" />
      </button>
    </div>
  );
};

export default BottomNav;



const SocialIcon = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 30%;
`;