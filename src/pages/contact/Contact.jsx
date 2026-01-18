import {
  ContactContainer,
  ContactHeader,
  ContactTitle,
  ContactDescription,
  ContactContent,
  AnimatedSection,
} from "./Contact.styles";
import LeftSection from "./left-section/LeftSection";
import RightSection from "./right-section/RightSection";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>Contact Us</ContactTitle>

        <ContactDescription>
          Have questions or want to get in touch? We&apos;d love to hear from
          you. Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </ContactDescription>
      </ContactHeader>

      <ContactContent>
        <AnimatedSection delay={200}>
          <LeftSection />
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <RightSection />
        </AnimatedSection>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
