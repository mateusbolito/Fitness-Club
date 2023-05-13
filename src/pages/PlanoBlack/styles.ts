import styled from "styled-components";


export const LocationContainer = styled.div`
grid-gap: 12px;
gap: 12px;
grid-row-gap: 12px;
row-gap: 12px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 8.5rem;
margin-left: 200px;

a {
color: inherit;

}

> div {
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
align-items: center;
justify-content: center;
gap: 4rem;

h1 {
display: flex;
align-items: center;
justify-content: center;
}

}

` 


export const LocationItemns = styled.div`
display: flex;
flex-flow: column;


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
border: 1px solid #8d8d8d;

} 



` 
export const LocationCard = styled.div`
max-width: 360px;
min-width: 320px;
height: 100%;
display: flex;
flex-direction: column;
border-radius: 8px;
background-color: #fff;

a {
 display: block;
 align-items: center;
 justify-content: center;
img {
    width: 100%;
    height: 142px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
}
}


` 

export const CardGym = styled.div`
display: flex;
flex-direction: column;
grid-gap: 16px;
gap: 16px;
padding: 16px;
a {
color: #1a5baf;
margin-top: 10px;
}
p {
color: rgba(1,1,20,.64);
font-size: 14px;
margin-top: 10px;
}
> div {
display: block;
align-items: center;
justify-content: center;
}
` 
export const CardCheckout = styled.div`
height: 100%;
padding-top: 8px;
display: grid;
align-content: end;
grid-gap: 0;
gap: 0;


` 

export const CardPlanos = styled.div`
display: flex;
flex-direction: column;
grid-gap: 8px;
gap: 8px;


ul {
    display: flex;
    justify-content: center;
}
span {
font-weight: 700;
font-size: 14px;
line-height: 24px;
margin: 15px;
}
a {
display: flex;
flex-direction: column;
width: 100%;
padding: 16px 0;
align-items: center;
text-transform: uppercase;


}


` 
export const ButtonContent = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
height: 40px;
background: ${({theme})=> theme.colors["base-grenn"]};
border-radius: 200px;
border: none;
font-family: Gotham-Bold,helvetica,arial,sans-serif;
text-transform: math-auto;
font-weight: 700;
font-size: 14px;
color: rgba(1,1,20,.88);

`