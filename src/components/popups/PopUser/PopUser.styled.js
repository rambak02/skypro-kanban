import styled from 'styled-components';
import { hover03 } from '../../../Styles/Common.styled';

export const PopUserSet = styled.div`
display: block;
position: absolute;
top: 61px;
right: calc(50% - 602.5px);
width: 213px;
height: 180px;
border-radius: 10px;
border: 0.7px solid rgba(148, 166, 190, 0.4);
background: #fff;
box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
padding: 34px;
text-align: center;
z-index: 2;
`;

export const UserName = styled.p`
color: #000;
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: -0.14px;
margin-bottom: 4px;
`;

export const UserMail = styled.p`
color: #94a6be;
font-size: 14px;
line-height: 21px;
letter-spacing: -0.14px;
margin-bottom: 10px;
`;

export const ThemeContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
`;

export const ThemeText = styled.p`
color: #000;
font-size: 14px;
line-height: 21px;
letter-spacing: -0.14px;
`;

export const ThemeCheckbox = styled.input`
position: relative;
width: 24px;
height: 13px;
border-radius: 100px;
background: #eaeef6;
outline: none;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
`;

export const CheckboxIndicator = styled.div`
content: "";
position: absolute;
top: 1px;
left: 1px;
width: 11px;
height: 11px;
border-radius: 50%;
background-color: #94a6be;
transition: 0.5s;
`;

export const CheckboxCheckedIndicator = styled(CheckboxIndicator)`
left: 12px;
`;
export const LogoutButton = styled.button`
width: 72px;
height: 30px;
background: transparent;
color: #565eef;
border-radius: 4px;
border: 1px solid #565eef;

${hover03}
`;

export const LogoutLink = styled.span`
color: #565eef;
`;