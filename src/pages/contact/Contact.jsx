import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { WhatsApp } from "@mui/icons-material";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import {
  ContactSection,
  PageHeader,
  ContactInner,
  CardBody,
  FormArea,
  FormHeading,
  FormSubtitle,
  StyledForm,
  FieldGroup,
  FormInput,
  FormTextarea,
  FieldError,
  SubmitButton,
  SuccessNote,
  SocialStrip,
  SocialLink,
  ContactInfoBox,
  InfoBoxTitle,
  InfoRow,
  InfoRowText,
  MapSection,
  MapInner,
  MapHeading,
  MapText,
  MapBind,
} from "./Contact.styles";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeI-mMJ7inFiucoKYGxM7v__EL1Kus5SviePC9Damhv0wzm_A/formResponse";

const FIELD = {
  name: "entry.2005620554",
  email: "entry.1045781291",
  address: "entry.1065046570",
  location: "entry.1229962499",
  phone: "entry.1166974658",
  comments: "entry.839337160",
};

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  location: "",
  address: "",
  comments: "",
};

// Client-side validation mirroring the Google Form's own rules (Google does
// NOT enforce them on a direct POST, so they have to live here).
const VALIDATORS = {
  name: (v) => {
    const t = v.trim();
    if (!t) return "Name is required.";
    if (t.length < 2 || t.length > 100 || !/[a-zA-Z]/.test(t))
      return "Enter a valid name.";
    return "";
  },
  email: (v) => {
    const t = v.trim();
    if (!t) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))
      return "Please enter a valid email address.";
    return "";
  },
  phone: (v) => {
    const t = v.trim();
    if (!t) return "Phone number is required.";
    const digits = t.replace(/\D/g, "");
    if (!/^\+?[\d\s-]+$/.test(t) || digits.length < 7 || digits.length > 15)
      return "Enter a valid phone number.";
    return "";
  },
  location: (v) => {
    const t = v.trim();
    if (!t) return "This field is required.";
    if (t.length < 2) return "Enter valid location detail.";
    return "";
  },
  address: (v) => {
    const t = v.trim();
    if (!t) return "Address is required.";
    if (t.length < 5) return "Enter a valid address.";
    return "";
  },
  comments: (v) => {
    const t = v.trim();
    if (!t) return "Comments are required.";
    if (t.length > 500) return "Please keep comments under 500 characters.";
    return "";
  },
};

const ADDRESS =
  "Govindapuram Vadakke Madom, TC 43/972(1) VYASA 222, Valiyashalai Street, Thiruvananthapuram 695036";

const SOCIAL_LINKS = [
  { icon: <FacebookIcon />, url: "#", label: "Facebook" },
  { icon: <InstagramIcon />, url: "#", label: "Instagram" },
  { icon: <WhatsApp />, url: "https://wa.me/7736558150", label: "WhatsApp" },
];

const Contact = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");

  // Recompute errors every render; the form is valid only when all are empty
  const errors = Object.fromEntries(
    Object.keys(VALIDATORS).map((key) => [key, VALIDATORS[key](form[key])]),
  );
  const isValid = Object.values(errors).every((msg) => !msg);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === "sent") setStatus("idle");
  };

  const handleBlur = (e) =>
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus("sending");

    const body = new URLSearchParams();
    body.append(FIELD.name, form.name);
    body.append(FIELD.email, form.email);
    body.append(FIELD.address, form.address);
    body.append(FIELD.location, form.location);
    body.append(FIELD.phone, form.phone);
    body.append(FIELD.comments, form.comments);

    try {
      await fetch(FORM_ACTION, { method: "POST", mode: "no-cors", body });
    } catch {
      // no-cors returns an opaque response; nothing to handle here
    }

    setStatus("sent");
    setForm(EMPTY_FORM);
    setTouched({});
  };

  return (
    <>
      <ContactSection>
        <PageHeader>
          <FormHeading>Contact Us</FormHeading>

          <FormSubtitle>
            Feel free to contact us any time. We will get back to you as soon as
            we can!
          </FormSubtitle>
        </PageHeader>

        <ContactInner>
          <CardBody>
            <FormArea>
              <StyledForm onSubmit={handleSubmit} noValidate>
                <FieldGroup>
                  <FormInput
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    hasError={Boolean(touched.name && errors.name)}
                  />
                  {touched.name && errors.name && (
                    <FieldError>{errors.name}</FieldError>
                  )}
                </FieldGroup>

                <FieldGroup>
                  <FormInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    hasError={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FieldError>{errors.email}</FieldError>
                  )}
                </FieldGroup>

                <FieldGroup>
                  <FormInput
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    hasError={Boolean(touched.phone && errors.phone)}
                  />
                  {touched.phone && errors.phone && (
                    <FieldError>{errors.phone}</FieldError>
                  )}
                </FieldGroup>

                <FieldGroup>
                  <FormInput
                    name="location"
                    placeholder="Where are you from?"
                    value={form.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    hasError={Boolean(touched.location && errors.location)}
                  />
                  {touched.location && errors.location && (
                    <FieldError>{errors.location}</FieldError>
                  )}
                </FieldGroup>

                <FieldGroup>
                  <FormTextarea
                    name="address"
                    placeholder="Address"
                    rows={2}
                    value={form.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    hasError={Boolean(touched.address && errors.address)}
                  />
                  {touched.address && errors.address && (
                    <FieldError>{errors.address}</FieldError>
                  )}
                </FieldGroup>

                <FieldGroup>
                  <FormTextarea
                    name="comments"
                    placeholder="Comments"
                    rows={4}
                    value={form.comments}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    hasError={Boolean(touched.comments && errors.comments)}
                  />
                  {touched.comments && errors.comments && (
                    <FieldError>{errors.comments}</FieldError>
                  )}
                </FieldGroup>

                <SubmitButton
                  type="submit"
                  disabled={!isValid || status === "sending"}
                >
                  {status === "sending"
                    ? "Sending…"
                    : status === "sent"
                      ? "Message Sent ✓"
                      : "Send"}
                </SubmitButton>

                {status === "sent" && (
                  <SuccessNote>
                    Thank you for contacting Deva Yajna. I have received your
                    message and We&apos;ll get back to you soon.
                  </SuccessNote>
                )}
              </StyledForm>
            </FormArea>

            <ContactInfoBox>
              <InfoBoxTitle>Contact Info</InfoBoxTitle>

              <InfoRow>
                <HeadsetMicOutlinedIcon />
                <InfoRowText>
                  <a href="tel:7736558150" style={{ color: "inherit" }}>
                    7736558150
                  </a>
                </InfoRowText>
              </InfoRow>

              <InfoRow>
                <MarkEmailReadOutlinedIcon />
                <InfoRowText>
                  <a
                    href="mailto:devayajna@gmail.com"
                    style={{ color: "inherit" }}
                  >
                    devayajna@gmail.com
                  </a>
                </InfoRowText>
              </InfoRow>

              <InfoRow>
                <MapOutlinedIcon />
                <InfoRowText>{ADDRESS}</InfoRowText>
              </InfoRow>
            </ContactInfoBox>

            <SocialStrip>
              {SOCIAL_LINKS.map((social) => (
                <SocialLink
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialStrip>
          </CardBody>
        </ContactInner>
      </ContactSection>

      <MapSection>
        <MapInner>
          <MapHeading>Find Us on Google Map</MapHeading>

          <MapText>
            Visit us at our Thiruvananthapuram centre — we&apos;re easy to find
            and always happy to welcome you in person.
          </MapText>

          <MapBind>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4855.6070807287!2d76.9539509758243!3d8.485360097260163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf23a321025%3A0xcd886821ceac4a86!2sDeva%20Yajna!5e1!3m2!1sen!2sin!4v1768748663921!5m2!1sen!2sin"
              title="Deva Yajna Location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapBind>
        </MapInner>
      </MapSection>
    </>
  );
};

export default Contact;
