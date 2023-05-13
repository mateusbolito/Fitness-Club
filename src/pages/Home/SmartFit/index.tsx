import { HomeContainer, ImgContainer } from "./styles";

import smartfit from "../../../assets/smartfit.jpg"

export function SmartFit() {
    return(
        <HomeContainer className="container">
            <ImgContainer>
             <img src={smartfit} className="top"/>  
            </ImgContainer>
        </HomeContainer>
    )
}