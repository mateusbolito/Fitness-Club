import { ContainerExclusive, IconsImg, TitleIcon, TitleTextP, TreinoContainer } from "./styles";
import fitdance from "../../../assets/fitdance.png"
import smartcros from "../../../assets/smartcros.png"
import bodycombat from "../../../assets/bodycombat.png"
import { BatteryHigh, Watch } from "phosphor-react";
export function TreinoExclusivo() {
    return(
        <TreinoContainer>
            <div>
            <h1>Aulas e treinos </h1>
            <h2>exclusivos!</h2>
            </div>

            <ContainerExclusive>
            <div>
                <img src={fitdance} alt="" />
                <IconsImg>
                <p>FitDance</p>
                </IconsImg>
                 
                 <IconsImg>
                 <Watch size={32} />
                 <BatteryHigh size={32} />
                 </IconsImg>
                 <div>
                 <TitleIcon>Duraçao</TitleIcon>
                 <span>intensidade</span>
                 <TitleTextP>
                <p> Pra você manjar de todos os passinhos</p>
                <p>as aulas de dança da </p>
                <p>Smart Fit comandada</p>
                <p> por professores licenciados</p>
                 <p>pela FitDance.</p>
                  <a href="">Saiba mais</a>
                 </TitleTextP>
                 </div>
                </div>
                
               
                <div>
                <img src={smartcros} alt="" />
                <IconsImg>
                <p>SmartCros</p>
                </IconsImg>
                 
                 <IconsImg>
                 <Watch size={32} />
                 <BatteryHigh size={32} />
                 </IconsImg>
                 <div>
                 <TitleIcon>Duraçao</TitleIcon>
                 <span>intensidade</span>
                 <TitleTextP>
                <p>Emagrecimento com ganho</p>
                <p>de massa muscular esse é o</p>
                <p> o Smart Cros</p>
                <a href="">Saiba mais</a>
                
                 </TitleTextP>
                 </div>
                </div>
                <div>
                <img src={bodycombat} alt="" />
                <IconsImg>
                <p>BodyCombat</p>
                </IconsImg>
                 
                 <IconsImg>
                 <Watch size={32} />
                 <BatteryHigh size={32} />
                 </IconsImg>
                 <div>
                 <TitleIcon>Duraçao</TitleIcon>
                 <span>intensidade</span>
                 <TitleTextP>
                  <p> Karatê, Jiu-jitsu, Capoera</p>
                  <p>Kung Fu e Taekwondo sao algumas</p>
                  <p>das inspirações das aulas de </p> 
                  <p>body combat, so na CicleGym</p>
                  <a href="">Saiba mais</a>
                 </TitleTextP>
                 </div>
                </div>
            </ContainerExclusive>
        </TreinoContainer>
    )
}