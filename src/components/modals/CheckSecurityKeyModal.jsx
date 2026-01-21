import { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { InputAdornment } from "@mui/material";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalTitle,
  ModalDescription,
  SecurityKeyInput,
  SubmitButton,
  ErrorMessage,
} from "./CheckSecurityKeyModal.styles";

const CheckSecurityKeyModal = ({ onClose, onSuccess }) => {
  const [securityKey, setSecurityKey] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const envSecurityKey = import.meta.env.VITE_GALLERY_SECURITY_KEY;

    if (securityKey === envSecurityKey) {
      onSuccess();
    } else {
      setError("Invalid security key. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setSecurityKey(e.target.value);
    if (error) {
      setError("");
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close modal" size="small">
          <CloseIcon sx={{ fontSize: "18px" }} />
        </CloseButton>

        <ModalTitle>Security Verification</ModalTitle>

        <ModalDescription>
          Please enter the security key to access the upload feature. This
          ensures only authorized users can add content.
        </ModalDescription>

        <form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SecurityKeyInput
            label="Security Key"
            type="password"
            value={securityKey}
            onChange={handleInputChange}
            placeholder="Enter security key"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: "#999" }} />
                </InputAdornment>
              ),
            }}
          />

          <SubmitButton
            type="submit"
            disabled={!securityKey.trim() || isSubmitting}
          >
            {isSubmitting ? "Verifying..." : "Verify & Continue"}
          </SubmitButton>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

CheckSecurityKeyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default CheckSecurityKeyModal;
