import styled from 'styled-components';
import telegramIcon from './Images/telegram.jpeg';
import githubIcon from './Images/GitHub.jpeg';
import BottomNav from "./ButtonNav.tsx";

const Profile = () => {
  return (
    <Wrapper>
    <ScrollableContent>
    <ContentWrapper>
    <Description><h2>Soon...</h2></Description>

    <SocialButtonsContainer>
    <SocialButton href="https://t.me/GameevB" target="_blank" rel="noopener noreferrer"> 
      <SocialIcon src={telegramIcon} alt="Telegram" />
    </SocialButton>

    <SocialButton href="https://github.com/IncognitoMarketPlaceG" target="_blank" rel="noopener noreferrer"> 
      <SocialIcon src={githubIcon} alt="GitHub" />
    </SocialButton>

    </SocialButtonsContainer>    
        </ContentWrapper>
        </ScrollableContent>
        <BottomNav />
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // Расстояние между кнопками
  width: 100%;
`;

const SocialButton = styled.a`
    display: inline-block;
    cursor: pointer;
    transition: transform 0.2s;
    
    &:hover {
        transform: scale(1.1);
    }
`;

const SocialIcon = styled.img`
    height: 40px;
    weight: 40px;
    // width: 140px;
    border-radius: 10px;
`;

const Description = styled.div`
  border-radius: 8px;
  color: #A6A6A6;
  line-height: 1.6;
  width: 100%;
  padding-top: 300px;

  h2 {
    color: #ffffff;
    margin: 0px;
    text-align: center;
    text-shadow: 0 0 10px rgba(189, 10, 14, 0.5);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;  
  width: 100%;
  padding-bottom: 100px;
`;

const ScrollableContent = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  overflow-y: auto;    
  overflow-x: hidden; 

  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
  }
`;