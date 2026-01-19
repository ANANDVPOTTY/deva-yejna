import { useState, useCallback, useMemo } from "react";

import {
  RightSectionContainer,
  FormContainer,
  FormRow,
  FormField,
  FieldLabel,
  RequiredIndicator,
  StyledTextField,
  StyledTextArea,
  ErrorText,
  SubmitButton,
} from "./RightSection.styles";

// Sanitize input to prevent XSS attacks
const sanitizeInput = (input) => {
  if (typeof input !== "string") return input;
  return input
    .replaceAll(/[<>]/g, "") // Remove angle brackets
    .replaceAll(/javascript:/gi, "") // Remove javascript: protocol
    .replaceAll(/on\w+=/gi, "") // Remove event handlers
    .replaceAll(/data:/gi, "") // Remove data: protocol
    .trim();
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Validate phone number (exactly 10 digits)
const isValidPhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};

const RightSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    place: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    email: false,
    phoneNumber: false,
    message: false,
  });

  // Validation errors
  const errors = useMemo(() => {
    const newErrors = {};

    // First Name - mandatory
    if (touched.firstName && !formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Email - mandatory with format validation
    if (touched.email) {
      if (!formData.email.trim()) {
        newErrors.email = "Email address is required";
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Phone Number - mandatory with 10 digit validation
    if (touched.phoneNumber) {
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone number is required";
      } else if (!isValidPhone(formData.phoneNumber)) {
        newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
      }
    }

    // Message - mandatory
    if (touched.message && !formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  }, [formData, touched]);

  // Check if form is valid for submission
  const isFormValid = useMemo(() => {
    const hasFirstName = formData.firstName.trim() !== "";
    const hasValidEmail =
      formData.email.trim() !== "" && isValidEmail(formData.email);
    const hasValidPhone =
      formData.phoneNumber.trim() !== "" && isValidPhone(formData.phoneNumber);
    const hasMessage = formData.message.trim() !== "";

    return hasFirstName && hasValidEmail && hasValidPhone && hasMessage;
  }, [
    formData.firstName,
    formData.email,
    formData.phoneNumber,
    formData.message,
  ]);

  const handleChange = useCallback(
    (field) => (event) => {
      let value = event.target.value;

      // Sanitize input to prevent XSS
      value = sanitizeInput(value);

      // For phone number, only allow digits and limit to 10
      if (field === "phoneNumber") {
        value = value.replaceAll(/\D/g, "").slice(0, 10);
      }

      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const handleBlur = useCallback(
    (field) => () => {
      setTouched((prev) => ({ ...prev, [field]: true }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      // Mark all mandatory fields as touched to show errors
      setTouched({
        firstName: true,
        email: true,
        phoneNumber: true,
        message: true,
      });

      if (!isFormValid) {
        return;
      }

      // Sanitize all data before submission
      const sanitizedData = {
        firstName: sanitizeInput(formData.firstName),
        lastName: sanitizeInput(formData.lastName),
        place: sanitizeInput(formData.place),
        email: sanitizeInput(formData.email),
        phoneNumber: sanitizeInput(formData.phoneNumber),
        message: sanitizeInput(formData.message),
      };

      console.log("Form submitted:", sanitizedData);
    },
    [formData, isFormValid],
  );

  return (
    <RightSectionContainer>
      <FormContainer component="form" onSubmit={handleSubmit} noValidate>
        <FormRow>
          <FormField>
            <FieldLabel>
              First Name <RequiredIndicator>*</RequiredIndicator>
            </FieldLabel>

            <StyledTextField
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              error={!!errors.firstName}
              fullWidth
            />
            {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}
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
          <FieldLabel>Where are you from?</FieldLabel>

          <StyledTextField
            placeholder="Enter your city or country"
            value={formData.place}
            onChange={handleChange("place")}
            fullWidth
          />
        </FormField>

        <FormField fullWidth>
          <FieldLabel>
            Email <RequiredIndicator>*</RequiredIndicator>
          </FieldLabel>

          <StyledTextField
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            error={!!errors.email}
            fullWidth
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
        </FormField>

        <FormField fullWidth>
          <FieldLabel>
            Phone Number <RequiredIndicator>*</RequiredIndicator>
          </FieldLabel>

          <StyledTextField
            placeholder="Enter your 10-digit phone number"
            value={formData.phoneNumber}
            onChange={handleChange("phoneNumber")}
            onBlur={handleBlur("phoneNumber")}
            error={!!errors.phoneNumber}
            slotProps={{ htmlInput: { maxLength: 10, inputMode: "numeric" } }}
            fullWidth
          />
          {errors.phoneNumber && <ErrorText>{errors.phoneNumber}</ErrorText>}
        </FormField>

        <FormField fullWidth>
          <FieldLabel>
            Message <RequiredIndicator>*</RequiredIndicator>
          </FieldLabel>

          <StyledTextArea
            placeholder="Tell us what we can help you with"
            value={formData.message}
            onChange={handleChange("message")}
            onBlur={handleBlur("message")}
            error={!!errors.message}
            multiline
            rows={4}
            fullWidth
          />
          {errors.message && <ErrorText>{errors.message}</ErrorText>}
        </FormField>

        <SubmitButton type="submit" disabled={!isFormValid} fullWidth>
          Send Message
        </SubmitButton>
      </FormContainer>
    </RightSectionContainer>
  );
};

export default RightSection;
