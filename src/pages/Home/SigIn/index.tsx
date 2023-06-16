import { ContainerContent, FormContent } from "./styles";
import google from "../../../assets/google.svg";
import hub from "../../../assets/hub.png";
import rocket from "../../../assets/rocket.svg";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../../services/firebaseConfig";

export const provider = new GoogleAuthProvider();

export function SigInPage() {
  const auth = getAuth(app);
  const SignInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

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
          <button onClick={SignInGoogle}>
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
