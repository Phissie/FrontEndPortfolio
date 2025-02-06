import PhotoGallery from "../components/PhotoGallery";
import PageTemplate from "./PageTemplate";

export default function CommunitiesPage() {
  const photos = [
    {
      src: "/BournemouthUni.jpg",
      link: "https://www.linkedin.com/in/fisayofagade/",
    },
    {
      src: "/CodebarCommunity.jpg",
      link: "https://www.linkedin.com/in/fisayofagade/",
    },
    {
      src: "/RTC.png",
      link: "https://www.linkedin.com/in/fisayofagade/",
    },
  ];
  return (
    <PageTemplate>
      <PhotoGallery photos={photos} justifyContent="center" />
    </PageTemplate>
  );
}
