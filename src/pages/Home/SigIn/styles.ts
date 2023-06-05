import styled from "styled-components";


export const ContainerContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 50px;
width: 100%;
height: 100%;
padding: 24px 0;
background: ${({theme})=> theme.colors["base-white2"]};
cursor: pointer;

h2 {
color: #112;
font-weight: 400;
font-size: 30px;
}

span {
color: #1a5baf;
margin-top: 30px;
}


` 

export const FormContent = styled.div`
width: 320px;
height: 48px;
flex-direction: column;
align-items: center;
justify-content: center;
background: #000;
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border-radius: 5px;
border:1px solid rgba(255, 255, 255, 0.18);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
margin-top: 1rem;


button:hover {
color: #1a5baf;
}

span {
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;




button {
display: flex;
align-items: center;
justify-content: center;
background: transparent;
border: none;
color: ${({theme})=> theme.colors["base-white"]};
font-size: 17px;
font-weight: 400;


svg {
margin-right: 10px;
}
}

}


`

