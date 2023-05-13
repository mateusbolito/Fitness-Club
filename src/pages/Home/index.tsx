import { About } from "./About";
import { Equipamentos } from "./Equipamentos";
import { Experiencia } from "./Experiencia";
import  {SmartFit} from "../Home/SmartFit"
import { TreinoExclusivo } from "./TreinosExclusivos";
import { AppCicleGym } from "./AppCicleGym";
import { FitnesPlano } from "./FitnesPlanos";
import { SearchInput } from "./SearchInput";
import { Footer } from "./Footer";


export function HomePage() {
    return(
        <>
         <SmartFit/>
         <About />
        <Equipamentos />
        <Experiencia />
        <TreinoExclusivo />
        <AppCicleGym />
        <FitnesPlano />
        <SearchInput />
        <Footer />
        </>
       
        
    )
}