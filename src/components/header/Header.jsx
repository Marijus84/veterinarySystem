import { useContext } from "react";
import logo from "../../assets/images/vetbeeIcon.svg";
import {
  StyledLinksDiv,
  StyledNavigation,
  StyledTitleDiv,
} from "./Header.styled";
import { Link, Typography, Button, Box, Switch } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const { pathname } = useLocation();

  const pathnameForDataSelection = pathname.replace(/[0-9]/g, "");

  const routeData = () => {
    switch (pathnameForDataSelection) {
      case "/":
        return {
          links: ["Pets", "Medications"],
          title: "Pet List",
          buttons: ["Add pet"],
        };
      case "/healthLogs/":
        return {
          links: ["Pets", "Logs"],
          title: "Health Records",
          buttons: ["Add prescription", "Add log"],
        };

      default:
        break;
    }
  };

  return (
    <>
      <StyledNavigation>
        <Link component={RouterLink} to="/">
          <img src={logo} alt="vetbee logo" />
        </Link>
        <StyledLinksDiv>
          {routeData().links.map((link) => (
            <Link
              key={link}
              underline="none"
              fontWeight={600}
              component={RouterLink}
              to="/"
            >
              {link}
            </Link>
          ))}
        </StyledLinksDiv>
      </StyledNavigation>
      <StyledTitleDiv>
        <Typography variant="h3">{routeData().title}</Typography>
        <StyledLinksDiv>
          <Box alignSelf="center">
            <Typography paragraph>Toggle dark mode</Typography>
            <Switch checked={darkMode} onChange={toggleDarkMode} />
          </Box>
        </StyledLinksDiv>
        <StyledLinksDiv>
          {routeData().buttons.map((button) => (
            <Button key={button} variant="contained">
              {button}
            </Button>
          ))}
        </StyledLinksDiv>
      </StyledTitleDiv>
    </>
  );
};

export default Header;
