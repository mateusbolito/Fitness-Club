import styled from "styled-components";

export const FooterContainer = styled.footer`
width: 100%;
padding: 45px 20px 90px;
background-color: #000;
font-family: Roboto ,sans-serif;
` 
export const ContentTitle = styled.section`
max-width: 1200px;
margin: 0 auto;
padding: 30px 0;
display: flex;
flex-direction: column;
align-items: center;
border-bottom: 1px solid #c2c2c2;
color: #fff;


> div {
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
font-size: 20px;

h1 {
display: flex;
align-items: center;
justify-content: center;
color: ${({theme})=> theme.colors["base-grenn"]};
}
h2 {
display: flex;
}
}
` 
export const MidiasContent = styled.section`
max-width: 1200px;
margin: 0 auto;
padding: 30px 0;
display: flex;
flex-direction: column;
align-items: center;
border-bottom: 1px solid #c2c2c2;
color: #fff;


ul {
display: flex;
flex-wrap: wrap;
align-items: center;
grid-gap: 15px;
gap: 15px;
}

li {
list-style: none;
}

svg {
margin-top: 2rem;
}
`