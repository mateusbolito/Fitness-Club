import styled from "styled-components";

export const EquipeContainer = styled.div`
 margin-top: 2.5rem;
 


 img {
 width: 100%;
 height: 16.5rem;
 border-radius: 30px;
 }
`
export const Container = styled.div`
 height: 450px;
 
h1 {
 margin-top: -12rem;
display: flex;
 align-items: center;
justify-content: center;
color:${({theme})=> theme.colors["base-white"]};
    
}

> div {
align-items: center;
text-align: center;


input {
width: 100%;
max-width: 465px;
padding: 12px;
background-color: #fff;
border-radius: 10px;
border: none;
font-family: Roboto,sans-serif;
font-size: 16px;
color: #8d8d8d;
font-weight: 700;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border-radius: 20px;
border:1px solid rgba(255, 255, 255, 0.18);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
} 

button {

margin: 20px;
width: 50px;
border-radius: 6px;
border: 0;
font-size: 17px;
text-align: center;
text-decoration: none;
cursor: pointer;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border-radius: 20px;
border:1px solid rgba(255, 255, 255, 0.18);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
} 
button:hover {
color: #1c1c1c!important;
background-color: ${({theme})=> theme.colors["base-grenn2"]};
}

}
`