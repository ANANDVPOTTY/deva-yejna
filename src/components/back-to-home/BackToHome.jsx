import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { BackNav, BackNavInner, BackButton } from "./BackToHome.styles";

const BackToHome = () => (
  <BackNav>
    <BackNavInner>
      <BackButton to="/" aria-label="Back to home">
        <ArrowBackRoundedIcon sx={{ fontSize: 14 }} />
        Home
      </BackButton>
    </BackNavInner>
  </BackNav>
);

export default BackToHome;
