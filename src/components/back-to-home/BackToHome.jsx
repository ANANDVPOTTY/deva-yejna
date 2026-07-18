import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { BackNav, BackButton } from "./BackToHome.styles";

const BackToHome = () => (
  <BackNav>
    <BackButton to="/" aria-label="Back to home">
      <ArrowBackRoundedIcon sx={{ fontSize: 14 }} />
      Home
    </BackButton>
  </BackNav>
);

export default BackToHome;
