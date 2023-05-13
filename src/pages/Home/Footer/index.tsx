import { FacebookLogo, InstagramLogo, SpotifyLogo, YoutubeLogo } from "phosphor-react";
import { ContentTitle, FooterContainer, MidiasContent } from "./styles";

export function Footer() {
    return(
        <FooterContainer>
            <ContentTitle>
                <div>
                <h1>Fitness</h1>
                <h2>Club</h2>
                </div>
            </ContentTitle>

             <MidiasContent>
                <h3>Siga a Fitness Club</h3>
                <ul>
                    <li>
                    <InstagramLogo size={32} />
                    </li>
                    <li>
                    <YoutubeLogo size={32} />
                    </li>
                    <li>
                    <FacebookLogo size={32} />
                    </li>
                    <li>
                    <SpotifyLogo size={32} />
                    </li>
                </ul>
             </MidiasContent>
        </FooterContainer>
    )
}