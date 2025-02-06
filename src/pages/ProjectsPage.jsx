import PhotoGallery from "../components/PhotoGallery";
import PageTemplate from "./PageTemplate";

const ProjectsPage = () => {
  const photos = [
    {
      src: "/BlogGeneratorApp.jpg",
      link: "https://github.com/Phissie/Blog_generator_AI",
    },
    {
      src: "/CookBookApp.jpeg",
      link: "https://github.com/Phissie/API-BackEnd",
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
