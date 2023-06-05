import { GithubLogo, GitlabLogo, LinkedinLogo } from "phosphor-react";
import { ContainerContent, FormContent } from "../SigIn/styles";

export function SigInPage() {
  return (
    <ContainerContent>
      <h2>Fazer Login</h2>
      <FormContent>
        <span>
          <button>
            <GithubLogo size={22} /> Continue with Github
          </button>
        </span>
      </FormContent>
      <FormContent>
        <span>
          <button>
            <GitlabLogo size={22} /> Continue with GitLab
          </button>
        </span>
      </FormContent>
      <FormContent>
        <span>
          <button>
            <LinkedinLogo size={22} /> Continue with Linkdin
          </button>
        </span>
      </FormContent>

      <span>Don't have an account? Sign Up</span>
    </ContainerContent>
  );
}
