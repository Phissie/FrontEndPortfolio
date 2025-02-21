import React from "react";
import { Stack } from "@mui/material";

const ClickablePhoto = ({ photoSrc, linkUrl, width = 300, height = 300 }) => {
  return (
    <a
      href={linkUrl}
      style={{
        display: "block",
        width: width,
        height: height,
        aspectRatio: "1",
        cursor: "pointer",
        textDecoration: "none",
        zIndex: 1000,
        overflow: "hidden",
        borderRadius: "200px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "transform 0.9s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
        maxHeight: "100px",
      }}
    >
      <img
        src={photoSrc}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </a>
  );
};

const PhotoGallery = ({
  photos,
  photoHeight = 200,
  justifyContent = "space-between",
  photoWidth = "400",
}) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1}
      justifyContent={justifyContent}
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        gap: "16px",
      }}
    >
      {photos.map((photo, index) => (
        <ClickablePhoto
          key={index}
          photoSrc={photo.src}
          linkUrl={photo.link}
          height={photoHeight}
          width={photoWidth}
        />
      ))}
    </Stack>
  );
};

export default PhotoGallery;
