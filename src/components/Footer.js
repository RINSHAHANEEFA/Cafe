import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "black", color: "white", p: 2 }}
      >
        <Box sx={{ my: 2, "& svg": {  fontSize: "30px",  cursor: "pointer",  mr: 2,},
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >



          {/* icons */}
          <InstagramIcon />
          <GitHubIcon />

        </Box>
        <Typography
          variant="h6"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Rinsha
        </Typography>
      </Box>
    </>
  );
};

export default Footer;