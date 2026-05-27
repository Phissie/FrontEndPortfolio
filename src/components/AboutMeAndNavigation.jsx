import { Stack, Button } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

const AboutMe = () => {
  const location = useLocation();

  const colors = {
    primary: "#630011",
    primaryHover: "#8B0016",
    white: "#FFFFFF",
  };

  const headingStyles = {
    color: colors.primary,
    textAlign: "center",
    zIndex: 100,
  };

  const buttonStyles = {
    backgroundColor: colors.primary,
    color: colors.white,
    "&:hover": {
      backgroundColor: colors.primaryHover,
    },
    padding: "10px 20px",
    borderRadius: "25px",
    minWidth: "180px",
  };

  return (
    <Stack
      direction={"column"}
      spacing={4}
      alignItems="center"
      sx={{
        width: "100%",
        padding: "40px 0px",
      }}
    >
      <h1
        style={{
          ...headingStyles,
          fontSize: "48px",
        }}
      >
        Fisayo Fagade
      </h1>
      <h2
        style={{
          ...headingStyles,
          fontSize: "31px",
        }}
      >
        AI & UX Research Professional
      </h2>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button
          href="https://www.linkedin.com/in/fisayof/"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={buttonStyles}
        >
          My LinkedIn
        </Button>

        <Button
          component={Link}
          to="/communities"
          variant="contained"
          sx={{
            ...buttonStyles,
            backgroundColor:
              location.pathname === "/communities"
                ? colors.primaryHover
                : colors.primary,
          }}
        >
          My Communities
        </Button>

        <Button
          href = "https://github.com/stars/Phissie/lists/ubs-software-design-incubator"
          component={Link}
          to="/projects"
          variant="contained"
          sx={{
            ...buttonStyles,
            backgroundColor:
              location.pathname === "/projects"
                ? colors.primaryHover
                : colors.primary,
          }}
        >
          Projects
        </Button>

        <Button
        href = "https://github.com/stars/Phissie/lists/ubs-software-design-incubator"
          component={Link}
          to="/hackathons"
          variant="contained"
          sx={{
            ...buttonStyles,
            backgroundColor:
              location.pathname === "/hackathons"
                ? colors.primaryHover
                : colors.primary,
          }}
        >
          Hackathons
        </Button>

        <Button
          href = "https://github.com/stars/Phissie/lists/original-ux-research"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={buttonStyles}
        >
          UX & AI Research
        
        </Button>
        
        
  



        
      </Stack>
      <section id="intro">
        <div className="Intro"></div>
      </section>
    </Stack>
  );
};

export default AboutMe;