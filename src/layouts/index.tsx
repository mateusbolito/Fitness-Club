 

 import { Outlet } from "react-router-dom";
 import { LayoutContainer } from "../layouts/DefaultLayout/styles"
 import { Header } from "../pages/Home/Header";

 export function DefaultLayout() {
  return(
 <LayoutContainer>
  <Header />
 <Outlet/>
  </LayoutContainer>
     )
 }