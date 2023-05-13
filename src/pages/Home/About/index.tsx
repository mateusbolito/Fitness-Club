import { AboutContainer, LikeImg, TitleText,    } from "./styles";
import imagem3 from "../../../assets/image3.png"
import like from "../../../assets/like.png"

export function About() {
    return(
        <AboutContainer>
          
          <TitleText>
            <div>
            <h1>Treino diário e estadia</h1>
            <h1>Ativo em casa</h1>
            
            <LikeImg>
            <div>
            <img src={like} alt="" />
            <p>Equipamentos De Qualidade</p> 
            </div>
            </LikeImg> 
            <LikeImg>
            <div>
            <img src={like} alt="" />
            <p>Acesse Cicle Club App exclusivo para alunos</p> 
            </div>
            </LikeImg>
            <LikeImg>
            <div>
            <img src={like} alt="" />
            <p>Temos os Melhores Coach Para ajudar voce aplicar a testo</p> 
            </div>
            </LikeImg>
            
            </div>
             
          </TitleText> 

           <div>
            <img src={imagem3} alt="" />
           </div>
        </AboutContainer>
    )
}