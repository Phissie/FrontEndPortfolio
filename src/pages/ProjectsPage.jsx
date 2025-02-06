import PhotoGallery from "../components/PhotoGallery";
import PageTemplate from "./PageTemplate";

const ProjectsPage = () => {
  const photos = [
    {
      src: "/BlogGeneratorApp.jpg",
      link: "https://www.linkedin.com/in/fisayofagade/",
    },
    {
      src: "/CookBookApp.jpeg",
      link: "https://www.linkedin.com/in/fisayofagade/",
    },
    {
      src: "/MachineLearningApps.jpg",
      link: "https://www.linkedin.com/in/fisayofagade/",
    },
  ];
  return (
    <PageTemplate>
      <PhotoGallery photos={photos} justifyContent="center" />
    </PageTemplate>
  );
};

export default ProjectsPage;
