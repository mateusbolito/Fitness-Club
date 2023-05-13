import styled from "styled-components";

export const FitContainer = styled.section`
width: 100%;
margin-top: 3.5rem;

> div {
margin-left: auto;
margin-right: auto;
padding: 0 16px;
width: 100%

}

ul {
    margin: 0 auto;
    padding: 35px 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    grid-gap: 30px;
    gap: 30px;
    overflow-x: scroll;
    
} 

img {
width: 100px;
height: 50px;
display: block;
margin: 0 auto;
}
` 

export const TitleTextPlan = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin: 23px 0; 
font-size: 20px;

h1 {
    color: ${({theme})=> theme.colors["base-grenn"]};
 } 

 h2 {
 margin: 10px;
 } 

` 

export const ProductList = styled.div`
margin: 0;
display: flex;
flex-direction: column;
grid-gap: 10px;
gap: 10px;
width: 230px;
min-height: 430px;
padding: 20px 15px;
background: hsla(0,0%,100%,.8);
border-radius: 20px;
outline: 2px solid transparent; 


&:hover {
 border: 2px solid #16A34A;
}
h3 {
font-size: 20px;
font-weight: 500;
line-height: 24px;
text-align: center;
color: #1c1c1c;
}

p {
    padding-bottom: 20px;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #656565;
    border-bottom: 0.9px solid #e1e1e1;
    
}

a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    max-width: 315px;
    border-radius: 26px;
    border: 0;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    background-color: #16A34A;
}
` 
export const ProductPrice = styled.div`
display: flex;
justify-content: center;
flex-wrap: nowrap;
color: #1c1c1c;

sub {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    position: relative;
    top: 20px;
}
span {
    font-weight: 700;
    font-size: 37px;
}

` 

export const SupContainer = styled.div`
position: relative;
top: 5px; 

sup {
    font-weight: 500;
    font-size: 20px;
    margin-right: 3px;
}
span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    position: relative;
    top: -7px;
    left: -5px;
}

`