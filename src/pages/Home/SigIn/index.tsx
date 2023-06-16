import { ContainerContent, FormContent } from "./styles";
import google from "../../../assets/google.svg";
import hub from "../../../assets/hub.png";
import rocket from "../../../assets/rocket.svg";

export function SigInPage() {
  return (
    <ContainerContent>
      <h2>Fazer Login</h2>
      <FormContent>
        <span>
          <button>
            <img src={rocket} alt="" /> Entrar como visitante
          </button>
        </span>
      </FormContent>
      <FormContent>
        <span>
          <button>
            <img src={google} alt="" /> Entrar com o Google
          </button>
        </span>
      </FormContent>
      <FormContent>
        <span>
          <button>
            <img src={hub} alt="" /> Entrar com o Github-
          </button>
        </span>
      </FormContent>

      <span>Don't have an account? Sign Up</span>
    </ContainerContent>
  );
}
