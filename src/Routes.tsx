import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { SigInPage } from "./pages/Home/SigIn";
import { DefaultLayout } from "./layouts";
import { PlanoBackPage } from "./pages/PlanoBlack";

;
export function Router() {
    return(
        <Routes>
         <Route path="/" element={<DefaultLayout/>}>
         <Route path="/" element={<HomePage/>}></Route>
        <Route path="/SigIn" element={<SigInPage/>}></Route>
        <Route path="/PlanoBlack" element={<PlanoBackPage/>}></Route>
         </Route>
        </Routes>
    )
}