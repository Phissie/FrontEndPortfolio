import PhotoGallery from "../components/PhotoGallery";
import PageTemplate from "./PageTemplate";

export default function CommunitiesPage() {
  const photos = [
    {
      src: "/BournemouthUni.jpg",
      link: "https://www.bournemouth.ac.uk/news/2024-03-25/office-students-visit-bu-ai-scholarship-students",
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
