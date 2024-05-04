import styled from "styled-components";
import { hover03 } from "../../../Styles/Common.styled";

export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  @media (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media (max-width: 660px) {
    border-radius: 0;
  }

  @media (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  @media (max-width: 495px) {
    display: none;
  }
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesThemeTopOrange = styled.div`
  opacity: 1;
  display: block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
`;

export const TopicTheme = styled.div`
  color: ${(props) => (props.$topic === "Research" ? "green" : props.$topic ==="Copywriting" ?  "purple" : "orange" )};
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  background-color: ${(props) => (props.$topic === "Research" ? "#b4fdd1" : props.$topic ==="Copywriting" ?  "#E9D4FF" : "#FFE4C2" )};
  border-radius: 20px;
  height: 30px;
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const PopBrowseStatusText = styled.div`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background-color: #94a6be;
  color: #ffffff;
`;
export const StatusThemeText = styled.div`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: #ffffff;
`;
export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 660px) {
    display: block;
  }
`;
export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media (max-width: 495px) {
    max-width: 100%;
  }
`;
export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media (max-width: 495px) {
    height: 37px;
    max-width: 100%;
  }
`;

export const CategoriesThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;
`;
export const CategoriesText = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;
export const BtnGroup = styled.div`
  width: 100%;
`;

export const PopBrowseBtnEdit = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BtnBorLink = styled.span`
 
`;
export const BtnEditBtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  margin-right: 8px;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;

  ${hover03}

  @media (max-width: 495px) {
    margin-right: 0px;
  }
`;
export const BtnBtnBg = styled.button`
  margin-right: 8px;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;

  &:hover {
    background-color: #33399b;
    color: #fff;
  }
`;
export const BtnEditLink = styled.span`
`;
export const BtnDeleteLink = styled.span`
`;
export const PopBrowseCalendar = styled.div`
  @media (max-width: 495px) {
    width: 100%;
  }
`;
