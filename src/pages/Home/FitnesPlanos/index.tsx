import { FitContainer, ProductList, ProductPrice, SupContainer, TitleTextPlan } from "./styles";
import SmartCoach from "../../../assets/SmartCoach.svg"
import Smartnutri from "../../../assets/smartnutri.svg"
import smartenergy from "../../../assets/smartenergy.svg"

export function FitnesPlano() {
 return(
    <FitContainer>
        <div>
            <TitleTextPlan>
                <h1>Quer acelerar os </h1>
                <h2>resultados?</h2>
            </TitleTextPlan>
        </div> 

        <ul>
            <li>
             <ProductList>
                <img src={SmartCoach} alt="" />
                <h3>Fitnes Coach</h3>
                <p>Foco na disciplina e no resultado: orientação individual por chamada de vídeo</p>
                  
                <div>
                    <ProductPrice>
                     <sub>R$</sub>
                     <span>49</span>
                     <SupContainer className="sup">
                      <sup>,90</sup>
                      <span>/mes</span>
                       
                    </SupContainer> 
                    </ProductPrice>
                    <a href="">Assine Agora</a> 
                    </div>
                    </ProductList>
            </li>
            <li>
             <ProductList>
                <img src={Smartnutri} alt="" />
                <h3> Fitnes Club Nutri</h3>
                <p>Consulta online com nutricionista para alcançar resultados e alimentação saudável.</p>
                  
                <div>
                    <ProductPrice>
                     <sub>R$</sub>
                     <span>39</span>
                     <SupContainer className="sup">
                      <sup>,90</sup>
                      <span>/mes</span>
                       
                    </SupContainer> 
                    </ProductPrice>
                    <a href="">Assine Agora</a> 
                    </div>
                
             </ProductList>
            </li>
            <li>
             <ProductList>
                <img src={smartenergy} alt="" />
                <h3>Fitnes Energy</h3>
                <p>Bebidas funcionais para antes ou depois do treino.</p>
                  
                <div>
                    <ProductPrice>
                     <sub>R$</sub>
                     <span>19</span>
                     <SupContainer className="sup">
                      <sup>,90</sup>
                      <span>/mes</span>
                       
                    </SupContainer> 
                    </ProductPrice>
                    <a href="">Assine Agora</a> 
                    </div>
             </ProductList>
            </li>
        </ul>
        
    </FitContainer>
 )
}