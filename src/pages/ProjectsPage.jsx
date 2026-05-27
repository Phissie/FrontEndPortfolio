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
      link: "https://github.com/Phissie/lists/original-ux-research",
    },
    
  ];
  return (
    <PageTemplate>
      <PhotoGallery photos={photos} justifyContent="center" />
    </PageTemplate>
  );
};

export default ProjectsPage;
