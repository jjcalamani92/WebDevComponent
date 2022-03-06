import { FooterLink } from "./FooterLink";
import { FooterHorario } from "./FooterHorario";
import { FooterContact } from "./FooterContact";
import { FooterInfo } from "./FooterInfo";

export const FooterLayout = () => {
  return (
    <footer className="footer">
      <FooterLink />
      <FooterHorario />
      <FooterContact />
      <FooterInfo />
    </footer>
  );
};
