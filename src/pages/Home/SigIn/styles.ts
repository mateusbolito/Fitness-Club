import styled from "styled-components";


export const ContainerContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 200px;
width: 100%;
height: 100%;
padding: 24px 0;
background: ${({theme})=> theme.colors["base-white2"]};


h2 {
color: #112;
}
` 

export const FormContent = styled.div`
width: 600px;
height: 400px;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border-radius: 20px;
border:1px solid rgba(255, 255, 255, 0.18);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
margin-top: 1rem;


form {
width: 100%;
flex-direction: column;
}
label {
width: 600px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;

button {
margin-top: 4px;
padding: 4px 0;
cursor: pointer;
border: none;
background-color: transparent;
font-style: normal;
font-weight: normal;
font-size: 15px;line-height: 17px;
-webkit-text-decoration-line: underline;
text-decoration-line: underline;
text-align: left;
-webkit-transition: opacity 0.25s ease-in-out;
transition: opacity 0.25s ease-in-out;
color: #1a5baf;
}
}
input {
width: 100%;
max-width: 465px;
padding: 12px;
background-color: #1c1c1c;
color: #fff;
border-radius: 10px;
border: 0;
font-family: Gotham,sans-serif;
font-size: 16px;


}
b {
font-size: 15;
color: ${({theme})=> theme.colors["base-white2"]};
}

> div {
display: flex;
align-items: center;
justify-content: center;
margin-top: 2rem;

button {
width: 230px;
display: flex;
align-items: center;
justify-content: center;
max-width: 415px;
padding: 12px 18px;
border-radius: 10px;
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
`

