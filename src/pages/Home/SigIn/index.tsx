import { ContainerContent, FormContent } from  "../SigIn/styles"

 export function SigInPage() {
    return( 
       <ContainerContent> 
         
         <h2>Fazer Login</h2>
          <FormContent>
          <form>
            <label >
            <b>Seu Email</b>
            <input type="text" placeholder="Insira Seu Email" />
            </label>
            <label >
            <b>Insira Sua Senha</b>
            <input type="password" placeholder="Insira Sua Senha" />
            </label> 
            <label >
            <b>Confirmar senha</b>
            <input type="password" placeholder="Confirme sua senha" />
             <button>Esqueci Minha Senha</button>
            </label> 
            
         </form>
         <div>
         <button type="submit">Entrar</button>
         </div>
       
          </FormContent>
          
         
       </ContainerContent>
       
    )
 }