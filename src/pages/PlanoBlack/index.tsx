import { ButtonContent, CardCheckout, CardGym, CardPlanos,   LocationCard, LocationContainer, LocationItemns } from "./styles";
import smartfoto from "../../assets/smartfoto.jpg"
import smart2 from "../../assets/smart2.jpg"
import smart3 from "../../assets/smart3.jpeg"
import smart4 from "../../assets/smart4.jpeg"
import smart5 from "../../assets/smart5.jpeg"
import smart6 from "../../assets/smart6.jpeg"

import { useEffect, useState } from "react";
import axios from "axios";


 type INGECities = {
 id: number;
 nome: string;

 }
 
 export function PlanoBackPage() {
  const [cities, setCities] = useState<INGECities[]>([]);
   
   useEffect(() => {
     axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/51|33")
     .then(response =>{
      setCities(response.data)
     })
    }, [])
   return(
        
        <LocationContainer>
         
          <div>

            <LocationItemns>
            
            <LocationCard>
               <a title="Sinop">
                <img src={smartfoto} alt="" />
                 <CardGym>
                    <div>
                     {cities.map(cities =>(
                        <h3 key={cities.id}>{cities.nome} </h3>
                        ))}
                        <p>rua dois quadra j</p>
                        <a href="https://www.smartfit.com.br/academias/augusta">Ver Academia</a>
                    </div>
                 </CardGym>
               </a>
            </LocationCard> 
             <a href="https://www.smartfit.com.br/carts?location_id=422&plan=black">
                <CardCheckout>
                    <CardPlanos>
                     <span>Valores mensais</span>
                     <ul>
                        <li>
                            <a href="">
                             <span>Fitnes</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                             <span>Black</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                     </ul>
                    </CardPlanos>
                    <ButtonContent>Contratar</ButtonContent>
                </CardCheckout>
             </a>
            </LocationItemns>

            <LocationItemns>
               
            <LocationCard>
               <a title="Sinop">
               <input type="text" placeholder="Digite aqui CEP ou Cidade"/>
                <img src={smart2} alt="" />
                 <CardGym>
                    <div>
                        <h3>Sinop </h3>
                        <p>rua dois quadra j</p>
                        <a href="https://www.smartfit.com.br/academias/rua-da-consolacao-ii" >Ver Academia</a>
                    </div>
                 </CardGym>
               </a>
            </LocationCard> 
             <a href="https://www.smartfit.com.br/carts?location_id=422&plan=black">
                <CardCheckout>
                    <CardPlanos>
                     <span>Valores mensais</span>
                     <ul>
                        <li>
                            <a href="">
                             <span>Fitnes</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                             <span>Black</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                     </ul>
                    </CardPlanos>
                    <ButtonContent>Contratar</ButtonContent>
                </CardCheckout>
             </a>
            </LocationItemns>
            
            <LocationItemns>
            <LocationCard>
               <a title="Sinop">
                <img src={smart3} alt="" />
                 <CardGym>
                    <div>
                        <h3>Sinop</h3>
                        <p>rua dois quadra j</p>
                        <a href="https://www.smartfit.com.br/academias/augusta">Ver Academia</a>
                    </div>
                 </CardGym>
               </a>
            </LocationCard> 
             <a href="https://www.smartfit.com.br/carts?location_id=422&plan=black">
                <CardCheckout>
                    <CardPlanos>
                     <span>Valores mensais</span>
                     <ul>
                        <li>
                            <a href="">
                             <span>Fitnes</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                             <span>Black</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                     </ul>
                    </CardPlanos>
                    <ButtonContent>Contratar</ButtonContent>
                </CardCheckout>
             </a>
            </LocationItemns>

            <LocationItemns>
            <LocationCard>
               <a title="Sinop">
                <img src={smart4} alt="" />
                 <CardGym>
                    <div>
                        <h3>Sinop</h3>
                        <p>rua dois quadra j</p>
                        <a href="https://www.smartfit.com.br/academias/augusta">Ver Academia</a>
                    </div>
                 </CardGym>
               </a>
            </LocationCard> 
             <a href="https://www.smartfit.com.br/carts?location_id=422&plan=black">
                <CardCheckout>
                    <CardPlanos>
                     <span>Valores mensais</span>
                     <ul>
                        <li>
                            <a href="">
                             <span>Fitnes</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                             <span>Black</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                     </ul>
                    </CardPlanos>
                    <ButtonContent>Contratar</ButtonContent>
                </CardCheckout>
             </a>
            </LocationItemns>

            <LocationItemns>
            <LocationCard>
               <a title="Sinop">
                <img src={smart5} alt="" />
                 <CardGym>
                    <div>
                        <h3>Sinop</h3>
                        <p>rua dois quadra j</p>
                        <a href="https://www.smartfit.com.br/academias/augusta">Ver Academia</a>
                    </div>
                 </CardGym>
               </a>
            </LocationCard> 
             <a href="https://www.smartfit.com.br/carts?location_id=422&plan=black">
                <CardCheckout>
                    <CardPlanos>
                     <span>Valores mensais</span>
                     <ul>
                        <li>
                            <a href="">
                             <span>Fitnes</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                             <span>Black</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                     </ul>
                    </CardPlanos>
                    <ButtonContent>Contratar</ButtonContent>
                </CardCheckout>
             </a>
             
            </LocationItemns>

            <LocationItemns>
            <LocationCard>
               <a title="Sinop">
                <img src={smart6} alt="" />
                 <CardGym>
                    <div>
                        <h3>Sinop</h3>
                        <p>rua dois quadra j</p>
                        <a href="https://www.smartfit.com.br/academias/augusta">Ver Academia</a>
                    </div>
                 </CardGym>
                 
               </a>
            </LocationCard> 
             <a href="https://www.smartfit.com.br/carts?location_id=422&plan=black">
                <CardCheckout>
                    <CardPlanos>
                     <span>Valores mensais</span>
                     <ul>
                        <li>
                            <a href="">
                             <span>Fitnes</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                             <span>Black</span>
                              <span>R$ 120,90</span>
                            </a>
                        </li>
                     </ul>
                    </CardPlanos>
                    <ButtonContent>Contratar</ButtonContent>
                </CardCheckout>
             </a>
             
            </LocationItemns>
            <h1></h1>
          </div> 
           <div>
           </div>
           
        </LocationContainer>
        
    )
 }