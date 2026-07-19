import { RightSectionContainer, GoogleFormFrame } from "./RightSection.styles";

// Google Form embed URL — configured via env so it can change without code edits.
// Falls back to the current form if the env var is not set.
const GOOGLE_FORM_URL =
  import.meta.env.VITE_CONTACT_FORM_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLSeI-mMJ7inFiucoKYGxM7v__EL1Kus5SviePC9Damhv0wzm_A/viewform?embedded=true";

const RightSection = () => {
  return (
    <RightSectionContainer>
      <GoogleFormFrame
        src={GOOGLE_FORM_URL}
        title="Contact Us Form"
        loading="lazy"
      >
        Loading…
      </GoogleFormFrame>
    </RightSectionContainer>
  );
};

export default RightSection;
