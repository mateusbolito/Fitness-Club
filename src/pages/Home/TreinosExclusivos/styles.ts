import styled from "styled-components";

export const TreinoContainer = styled.section`
width: 100%;

> div {
display: flex;
align-items: center;
justify-content: center;
margin-top: 4.5rem;


h1 {
    color: ${({theme})=> theme.colors["base-grenn"]};
    font-size: 30px;
 } 

 h2 {
 margin: 10px;
 font-size: 30px;
 } 
}
`

export const ContainerExclusive = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 10rem;

img {
border-radius: 10px;
border: 2px solid #16A34A;
}

` 
export const IconsImg = styled.div`
display: flex;
align-items: center;
justify-content: center;

svg {
margin: 0 40px;
margin-top: 1rem;
}

> div {
display: flex;
align-items: center;
justify-content: center;


}
`
export const TitleIcon = styled.span`
 padding: 50px;

` 
export const TitleTextP =  styled.div`
margin-top: 1rem;
text-align: center;


a {
color: ${({theme})=> theme.colors["base-yellow2"]};
margin-top: 12rem;
}


`