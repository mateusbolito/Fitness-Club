import styled from "styled-components";

 

 export const ExpContainer = styled.section`
 width: 100%;
 font-size: 20px;

> div {
    display: flex;
    align-items: center;
    justify-content: center;
}
 
 h1 {
    color: ${({theme})=> theme.colors["base-grenn"]};
 } 

 h2 {
 margin: 10px;
 } 




img {
padding: 1.5rem;
gap: 1rem;
border-radius: 30px;
box-shadow: 0 3px 17px rgba(0,0,0,.1);

}  


 `

export const ContentContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 1.5rem;
gap: 1rem;
transition: all .40s ease;

`
export const Content = styled.div`

> div {
   img:hover {
    background:  ${({theme})=> theme.colors["base-grenn"]};
   }
}
span {
display: flex;
align-items: center;
justify-content: center;
}
`