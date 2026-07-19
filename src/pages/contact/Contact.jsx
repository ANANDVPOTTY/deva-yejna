import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { WhatsApp } from "@mui/icons-material";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import {
  ContactSection,
  ContactInner,
  FormArea,
  FormHeading,
  FormSubtitle,
  StyledForm,
  FormInput,
  FormTextarea,
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

const ADDRESS =
  "Govindapuram Vadakke Madom, TC 43/972(1) VYASA 222, Valiyashalai Street, Thiruvananthapuram 695036";

const SOCIAL_LINKS = [
  { icon: <FacebookIcon />, url: "#", label: "Facebook" },
  { icon: <InstagramIcon />, url: "#", label: "Instagram" },
  { icon: <WhatsApp />, url: "https://wa.me/7736558150", label: "WhatsApp" },
];

const Contact = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  return (
    <>
      <ContactSection>
        <ContactInner>
          <FormArea>
            <FormHeading>Contact Us</FormHeading>

            <FormSubtitle>
              Feel free to contact us any time. We will get back to you as soon
              as we can!
            </FormSubtitle>

            <StyledForm onSubmit={handleSubmit}>
              <FormInput
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <FormInput
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <FormInput
                name="phone"
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <FormInput
                name="location"
                placeholder="Where are you from?"
                value={form.location}
                onChange={handleChange}
                required
              />

              <FormTextarea
                name="address"
                placeholder="Address"
                rows={2}
                value={form.address}
                onChange={handleChange}
                required
              />

              <FormTextarea
                name="comments"
                placeholder="Comments"
                rows={4}
                value={form.comments}
                onChange={handleChange}
                required
              />

              <SubmitButton type="submit" disabled={status === "sending"}>
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                    ? "Message Sent ✓"
                    : "Send"}
              </SubmitButton>

              {status === "sent" && (
                <SuccessNote>
                  Thank you! We&apos;ll get back to you soon.
                </SuccessNote>
              )}
            </StyledForm>
          </FormArea>

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
