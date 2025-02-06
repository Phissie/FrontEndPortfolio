import PhotoGallery from "../components/PhotoGallery";
import PageTemplate from "./PageTemplate";
const HackathonsPage = () => {
  const photos = [
    {
      src: "/TravelAssistanceApp.jpg",
      link: "https://github.com/Choggsy/ConnectHackApp",
    },
    {
      src: "/Softwaredesign hackathon.png",
      link: "https://www.linkedin.com/in/fisayofagade/",
    },
  ];
  return (
    <PageTemplate>
      <PhotoGallery
        photos={photos}
        justifyContent="center"
        photoWidth="fit-content"
      />
    </PageTemplate>
  );
};

export default HackathonsPage;
