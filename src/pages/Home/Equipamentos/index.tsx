 
import { MagnifyingGlass } from "phosphor-react"
import imagem4 from "../../../assets/image4.png"
import { Container, EquipeContainer } from "./styles"
 export function Equipamentos() {
    return(
        <EquipeContainer>
        <Container>
        
       

        <div>
        <img src={imagem4} alt="" />
        <h1>40+ cursos 560+ equipamentos  20+ estrutores</h1>   
        </div>
        <div>
        <input type="text" placeholder="Escolher Academia" />
         <button type="submit"><MagnifyingGlass size={22} /></button>
        </div>
        </Container> 
        
        </EquipeContainer>
    )
 }