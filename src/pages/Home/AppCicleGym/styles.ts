import styled from "styled-components";

export const AppContainer = styled.section`
width: 100%;
height: 400px;
margin: 20px 0 0;
margin-top: 5.5rem;
background-color: #34D399;

> div {
width: 1900px;
border: 1px solid #000;
}
` 

export const AppContent = styled.div`
width: 100%;
max-width: 425px;
padding-top: 20px;
display: flex;
flex-direction: column;
grid-gap: 12px;
gap: 12px;
margin-left: 350px;
> div {
display: flex;
flex-direction: column;
grid-gap: 15px;
gap: 15px;
}
` 

export const AppsLinks = styled.div`
display: flex;
align-items: center;
justify-content: center;
grid-gap: 16px;
gap: 16px;

> div {
img {
padding: 0 0 0 40px 0 30px;
}
}
img {
width: 113px;
height: 113px;
}
` 
export const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 530px;
    min-width: 300px;
    align-self: end;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-top: -270px;
    margin-left: 1000px;

img {
width: 350px;
}
`