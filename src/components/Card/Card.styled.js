import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
from {
  height: 0;
    opacity: 0;
}
to {
  height: auto;
    opacity: 1;
}
`;

export const CardItem = styled.div`
  padding: 5px;
  animation-name: ${cardAnimation} 500ms linear;
  animation-duration: 500ms;
  animation-timing-function: linear;
  
`;
export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

`;
export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

 
`;
export const TopicText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;
export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${(props) => (props.$topic === "Research" ? "#b4fdd1" : props.$topic ==="Copywriting" ?  "#E9D4FF" : "#FFE4C2" )};

  ${TopicText} {
    color: ${(props) => (props.$topic === "Research" ? 'green' : props.$topic ==="Copywriting" ? "purple" : "orange" )}
  }
`;
export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;
export const CardBtnDetail = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;
export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;
export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const CardDateText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;
export const CardDateImg = styled.img`
  width: 13px;
`;
