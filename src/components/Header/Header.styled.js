import styled from "styled-components";
import { after, hover01, hover02 } from "../Common/Common.styled";
export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;
export const HeaderLink = styled.a`
  color: #ffffff;
`;
export const HeaderUserLink = styled.a`
 height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;

  ${hover02};
  ${after}
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;
export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;
export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderLogo = styled.div`
  display: ${({ $show }) => ($show ? "block" : "none")};
`;
export const HeaderLogoImg = styled.img`
  width: 85px;
`;
export const HeaderBtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  ${hover01}

  @media (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;
