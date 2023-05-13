import {  Content, ContentContainer, ExpContainer,  } from "./styles";
import exp1 from "../../../assets/exp1.jpeg"
import exp2 from "../../../assets/exp2.jpeg"
import exp3 from "../../../assets/exp3.jpeg"
 
 export function Experiencia() {
    return(
        <ExpContainer>
            <div>
            <h1>Experiência </h1>    
           <h2>Fitnes Club</h2>
            </div>
           
           <ContentContainer>
            <Content>
            <div>
            <img  src={exp1} alt="" />
            <span>Equipamentos de alto padrão</span>
            </div>
            
            </Content>
          
             <Content>
            <div>
            <img src={exp2} alt="" />
             <span>Salas exclusivas de aulas coletivas</span>
            </div>
             
             </Content>
            
            <Content>
            <div>
            <img src={exp3} alt="" /> 
            <span>Áreas de musculação e cárdio</span>
            </div>
            
            </Content>
            
           </ContentContainer>
        </ExpContainer>  

         
    )
 }