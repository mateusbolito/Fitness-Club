import { HeaderContainer, ImgHeader, ListContainer } from "../Header/styles";

import gym from "../../../assets/gym.jpg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <ListContainer>
        <ImgHeader>
          <img src={gym} alt="" />
        </ImgHeader>

        <div>
          <Link to="/">
            <a href="">Espaço Do Clinte</a>
          </Link>
          <a href="">Seja um Franqueado</a>
          <Link to="/PlanoBlack">
            <a href="">Academias</a>
          </Link>
        </div>
        <Link to="/SigIn">
          <button>Entrar</button>
        </Link>
      </ListContainer>
    </HeaderContainer>
  );
}
