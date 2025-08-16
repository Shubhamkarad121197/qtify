import React from "react";
import Card from "@mui/material/Card";


import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./cardComponent.css"

const CardComponetUI = ({follows,image,title,type}) => {
  return (
    <>
      <div className="cardComponent">
        <Card sx={{ minWidth: 159, borderRadius: 5 ,maxHeight:210 }}>
        <CardMedia
          sx={{ height: 150 }}
          image={image}
          title="green iguana"
        />
        <CardContent sx={{display:"flex",justifyContent:"start"}}>
          <Stack direction="row" spacing={1}>
            <Chip sx={{background: "#121212",color:"#fff"}} label={`${follows} ${type}`}  />
          </Stack>
        </CardContent>
      </Card>
       <span className="albumTitle">{title}</span>
      </div>
      
    </>
  );
};

export default CardComponetUI;
