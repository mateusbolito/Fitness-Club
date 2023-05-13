import { InputContainer } from "./styles";

export function SearchInput() {
    return(
        <InputContainer>
          <h3>Receba novidades e promoções exclusivas da Fitness Club</h3>

          <form>
            <div>
            <input type="text" placeholder="Informe o seu Email" />
            <button type="submit">Cadastrar</button>
            </div>
            
          </form>
        </InputContainer>
    )
}