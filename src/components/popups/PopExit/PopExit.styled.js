import styled from "styled-components";

export const PopExit = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;
export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;
export const ExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: 375px) {
    padding: 50px 20px;
  }
`;
export const ExitTtl = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;
export const ExitForm =styled.form`
`;
export const ExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 375px) {
    display: block;
  }
`;
export const ExitButtonYes = styled.div`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;

  @media (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
export const ExitButtonYesLink = styled.span`
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ExitButtonNo = styled.div`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  @media (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`;
export const ExitButtonNoLink = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
