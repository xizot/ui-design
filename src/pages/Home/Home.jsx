import { Button } from "@mui/material";
import React from "react";
// Test css
import { styled } from "@mui/material/styles";
const CustomButton = styled(Button)`
  color: white;
`;

function Home() {
  return (
    <div>
      This is home page
      <div>
        <CustomButton variant='contained'>Test</CustomButton>;
      </div>
    </div>
  );
}

export default Home;
