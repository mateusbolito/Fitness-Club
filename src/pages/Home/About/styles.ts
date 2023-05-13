import styled from "styled-components";

export const AboutContainer = styled.div`
width: 100%;
 display: grid;
 grid-template-columns: 1fr 1fr;
 align-items: center;
 justify-content: center;
 margin-top: 5.5rem;
 border: 2px solid "#16A34A";

 > div {
   display: flex;
   align-items: center;
   justify-content: center;
   img{
      width: 400px;
   }
 }
`  
export const TitleText = styled.div`
margin-top: 2.5rem;
display: flex;
align-items: center;
justify-content: center;

h1 {
   color: ${({theme})=> theme.colors["base-background"]};
}


` 
export const LikeImg = styled.div`
display: flex;
align-items: center;

> div {
   display: flex;
   align-items: center;
   margin-top: 1rem;

   img {
      width: 30px;
   } 

   p {
      padding: 0.4rem;
   }
}

`
 
