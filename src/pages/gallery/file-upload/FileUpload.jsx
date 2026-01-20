import { useState, useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { MenuItem, FormControl } from "@mui/material";
import { filterOptions } from "../galleryData";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalTitle,
  ModalSubtitle,
  UploadArea,
  UploadIcon,
  UploadText,
  UploadHint,
  FilePreviewContainer,
  FilePreviewThumbnail,
  FileInfo,
  FileName,
  FileSize,
  RemoveFileButton,
  FormField,
  FieldLabel,
  StyledTextField,
  StyledSelect,
  ButtonContainer,
  CancelButton,
  UploadButton,
  SuccessMessage,
  SuccessTitle,
  SuccessDescription,
} from "./FileUpload.styles";

// Accepted file types
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/bmp",
  "image/svg+xml",
  "image/tiff",
  "image/avif",
];

const ACCEPTED_VIDEO_TYPES = [
  "video/mp4",
  "video/webm",
  "video/ogg",
  "video/mpeg",
  "video/quicktime",
  "video/x-msvideo",
  "video/x-ms-wmv",
  "video/3gpp",
];

const ALL_ACCEPTED_TYPES = [...ACCEPTED_IMAGE_TYPES, ...ACCEPTED_VIDEO_TYPES];

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

const FileUpload = ({ onClose, onUpload }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef(null);

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

  useEffect(() => {
    // Cleanup preview URL on unmount
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const validateFile = (selectedFile) => {
    if (!selectedFile) return "Please select a file";

    if (!ALL_ACCEPTED_TYPES.includes(selectedFile.type)) {
      return "Invalid file type. Please upload an image or video file.";
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      return "File size exceeds 100MB limit.";
    }

    return null;
  };

  const handleFileSelect = (selectedFile) => {
    const validationError = validateFile(selectedFile);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setFile(selectedFile);

    // Create preview
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setFile(null);
    setPreview(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (!file || !description.trim() || !category) {
      setError("Please fill in all fields");
      return;
    }

    setIsUploading(true);
    setError("");

    try {
      const isVideo = file.type.startsWith("video/");
      const newItem = {
        id: Date.now(),
        type: isVideo ? "video" : "image",
        src: preview,
        thumbnail: preview,
        description: description.trim(),
        category: category,
        file: file,
      };

      // Call the onUpload callback with the new item
      await onUpload(newItem);
      setUploadSuccess(true);
    } catch {
      setError("Upload failed. Please try again.");
      setIsUploading(false);
    }
  };

  const isVideo = file?.type?.startsWith("video/");
  const categoryOptions = filterOptions.filter((opt) => opt.value !== "all");

  if (uploadSuccess) {
    return (
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose} aria-label="Close modal">
            <CloseIcon />
          </CloseButton>

          <SuccessMessage>
            <CheckCircleOutlineIcon />
            <SuccessTitle>Upload Successful!</SuccessTitle>
            <SuccessDescription>
              Your {isVideo ? "video" : "image"} has been added to the gallery.
            </SuccessDescription>
            <UploadButton onClick={onClose}>Close</UploadButton>
          </SuccessMessage>
        </ModalContainer>
      </ModalOverlay>
    );
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </CloseButton>

        <ModalTitle>Upload Media</ModalTitle>
        <ModalSubtitle>
          Add a new image or video to your gallery collection
        </ModalSubtitle>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleInputChange}
          accept={ALL_ACCEPTED_TYPES.join(",")}
          style={{ display: "none" }}
        />

        {!file ? (
          <UploadArea
            isDragging={isDragging}
            hasFile={false}
            onClick={handleUploadClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <UploadIcon>
              <CloudUploadIcon />
            </UploadIcon>
            <UploadText>
              {isDragging ? "Drop your file here" : "Click or drag to upload"}
            </UploadText>
            <UploadHint>
              Supports: JPG, PNG, GIF, WEBP, SVG, MP4, WEBM, OGG
              <br />
              Maximum file size: 100MB
            </UploadHint>
          </UploadArea>
        ) : (
          <FilePreviewContainer>
            <FilePreviewThumbnail>
              {isVideo ? (
                <video src={preview} muted />
              ) : (
                <img src={preview} alt="Preview" />
              )}
            </FilePreviewThumbnail>
            <FileInfo>
              <FileName>{file.name}</FileName>
              <FileSize>
                {formatFileSize(file.size)} • {isVideo ? "Video" : "Image"}
              </FileSize>
            </FileInfo>
            <RemoveFileButton
              onClick={handleRemoveFile}
              aria-label="Remove file"
            >
              <DeleteOutlineIcon />
            </RemoveFileButton>
          </FilePreviewContainer>
        )}

        {error && (
          <UploadHint sx={{ color: "#d32f2f", marginBottom: "16px" }}>
            {error}
          </UploadHint>
        )}

        <FormField>
          <FieldLabel>Description *</FieldLabel>
          <StyledTextField
            placeholder="Enter a description for this media"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={2}
          />
        </FormField>

        <FormField>
          <FieldLabel>Category *</FieldLabel>
          <FormControl fullWidth>
            <StyledSelect
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select a category
              </MenuItem>
              {categoryOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledSelect>
          </FormControl>
        </FormField>

        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <UploadButton
            onClick={handleSubmit}
            disabled={!file || !description.trim() || !category || isUploading}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </UploadButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

FileUpload.propTypes = {
  onClose: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
};

export default FileUpload;
