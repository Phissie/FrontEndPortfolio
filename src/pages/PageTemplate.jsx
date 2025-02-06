import StrawberryBackground from "../components/StrawberryBackground";
import AboutMe from "../components/AboutMeAndNavigation";
import { Stack } from "@mui/material";

const PageTemplate = ({ children }) => {
  return (
    <>
      <AboutMe />
      {children}
      <StrawberryBackground />
    </>
  );
};

export default PageTemplate;
