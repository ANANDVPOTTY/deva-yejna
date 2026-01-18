import { useState } from "react";
import { MenuItem } from "@mui/material";

import {
  RightSectionContainer,
  FormContainer,
  FormRow,
  FormField,
  FieldLabel,
  StyledTextField,
  PhoneInputWrapper,
  CountrySelect,
  StyledTextArea,
  CheckboxWrapper,
  StyledCheckbox,
  PrivacyLink,
  SubmitButton,
} from "./RightSection.styles";

const RightSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    countryCode: "+1",
    phoneNumber: "",
    message: "",
    agreeToPolicy: false,
  });

  const countryCodes = [
    { code: "+1", flag: "US", label: "United States" },
    { code: "+44", flag: "GB", label: "United Kingdom" },
    { code: "+91", flag: "IN", label: "India" },
    { code: "+61", flag: "AU", label: "Australia" },
    { code: "+995", flag: "GE", label: "Georgia" },
  ];

  const handleChange = (field) => (event) => {
    const value =
      field === "agreeToPolicy" ? event.target.checked : event.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <RightSectionContainer>
      <FormContainer component="form" onSubmit={handleSubmit}>
        <FormRow>
          <FormField>
            <FieldLabel>First Name</FieldLabel>
            <StyledTextField
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange("firstName")}
              fullWidth
            />
          </FormField>
          <FormField>
            <FieldLabel>Last Name</FieldLabel>
            <StyledTextField
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange("lastName")}
              fullWidth
            />
          </FormField>
        </FormRow>

        <FormField fullWidth>
          <FieldLabel>Company Name</FieldLabel>
          <StyledTextField
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleChange("companyName")}
            fullWidth
          />
        </FormField>

        <FormField fullWidth>
          <FieldLabel>Email</FieldLabel>
          <StyledTextField
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange("email")}
            fullWidth
          />
        </FormField>

        <FormField fullWidth>
          <FieldLabel>Phone Number</FieldLabel>
          <PhoneInputWrapper>
            <CountrySelect
              value={formData.countryCode}
              onChange={handleChange("countryCode")}
              size="small"
            >
              {countryCodes.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.code}
                </MenuItem>
              ))}
            </CountrySelect>
            <StyledTextField
              placeholder="(+995) 555-55-55-55"
              value={formData.phoneNumber}
              onChange={handleChange("phoneNumber")}
              fullWidth
            />
          </PhoneInputWrapper>
        </FormField>

        <FormField fullWidth>
          <FieldLabel>Message</FieldLabel>
          <StyledTextArea
            placeholder="Tell us what we can help you with"
            value={formData.message}
            onChange={handleChange("message")}
            multiline
            rows={4}
            fullWidth
          />
        </FormField>

        <CheckboxWrapper
          control={
            <StyledCheckbox
              checked={formData.agreeToPolicy}
              onChange={handleChange("agreeToPolicy")}
            />
          }
          label={
            <>
              I&apos;d like to receive more information about company, I
              understand and agree to the{" "}
              <PrivacyLink href="#">Privacy Policy</PrivacyLink>
            </>
          }
        />

        <SubmitButton type="submit" fullWidth>
          Send Message
        </SubmitButton>
      </FormContainer>
    </RightSectionContainer>
  );
};

export default RightSection;
