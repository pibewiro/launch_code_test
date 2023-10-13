import { Grid, Typography } from "@mui/material";
import React from "react";
import { GridContainer, HeaderTitle } from "./styles";

const HeaderComponent = () => {
  return (
    <GridContainer container className="gradient__bg">
      <Grid item xs={4} color="white">
        <HeaderTitle variant="h4">Welcome to your dashboard</HeaderTitle>
        <Typography fontSize={14}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          deserunt molestiae. Velit esse, tempore nesciunt, excepturi blanditiis
          eaque ipsa corrupti quam dolor asperiores quaerat. Laborum culpa
          fugiat omnis modi voluptas sunt ut, doloremque voluptatum repellendus
          vero quae quo veniam dolore aliquam dignissimos placeat dolorem
          consectetur sapiente fugit facere quasi quia totam suscipit
          perferendis? Dicta, quasi aliquid.
        </Typography>
      </Grid>
    </GridContainer>
  );
};

export { HeaderComponent };
