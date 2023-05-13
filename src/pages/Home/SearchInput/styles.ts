import styled from "styled-components";

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding: 28px 16px;
background-color: #f6f6f6;

form {
width: 100%;
max-width: 650px;

> div {
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;

button {
display: flex;
align-items: center;
justify-content: center;
max-width: 315px;
padding: 12px 18px;
border-radius: 26px;
border: 0;
font-size: 17px;
line-height: 21px;
text-align: center;
text-decoration: none;
cursor: pointer;
background-color: ${({theme})=> theme.colors["base-grenn"]};
} 

button:hover {
color: #1c1c1c!important;
background-color: ${({theme})=> theme.colors["base-grenn2"]};
}
}
input {
width: 100%;
max-width: 465px;
padding: 12px;
background-color: #fff;
border-radius: 10px;
border: 0;
font-family: Gotham,sans-serif;
font-size: 16px;
color: #8d8d8d;
}
}
`