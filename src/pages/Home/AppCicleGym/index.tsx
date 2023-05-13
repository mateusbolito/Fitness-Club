import { AppContainer, AppContent, AppsLinks, ImgContainer } from "./styles";
import qrcode from "../../../assets/qrcode.png"
import AppDevice from "../../../assets/AppDevice.png"
import AppStoreBg from "../../../assets/AppStoreBg.png"

 export function AppCicleGym() {
    return(
    <AppContainer>
    <AppContent>
    <h1>Com o Fitnes Gym App o aluno Fitnes Club pode:</h1>
    <div>
    <p>Acompanhar o progresso de treino</p>
    <p>Ver os exercícios em vídeo</p>
    <p>Assistir às aulas on-line onde e quando quiser</p> 
    <span>Sem pagar nada a mais por isso!Escaneie o código para baixar grátis</span>
    </div>

    <AppsLinks>
    <div>
    <img src={qrcode} alt="" />
    <a href="https://play.google.com/store/apps/details?id=com.eokoe.smartfitcoach&hl=pt_BR&gl=US"><img src={AppStoreBg} alt="" /></a>
    </div>
    </AppsLinks>

                
    </AppContent> 
    <ImgContainer>
    <img src={AppDevice} alt="" />
    </ImgContainer>
        
    </AppContainer>
    )
 }