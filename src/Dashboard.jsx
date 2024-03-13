import { Box, Card, Typography } from "@mui/material";
import Flex from "./Flex";
import React from "react";
import CustomCard from "./CustomCard";

function Dashboard() {
  return (
    <Flex height={"100vh"} width={"75%"}>
      <Box
        sx={{
          height: "10%",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color="initial">
          Dashboard
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap", // Allows the items to wrap onto multiple lines
          height: "90%",
          width: "100%", // Takes the full width of its parent
          backgroundColor: "#f0f7f6",
          gap: "2%",
        }}
      >
        <Box
          minWidth="50%"
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "30%",
              mr: "auto",
              height: "100%",
              borderRadius: "15px",
              justifySelf: "flex-start",
              backgroundColor: "#fff",
            }}
          ></Box>

          <Box
            sx={{
              width: "60%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "",
              oignItems: "center",
              gap: "5%",
            }}
          >
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
            >
              dsada
            </Box>

            <Box
              sx={{
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
            >
              dsada
            </Box>

            <Box
              sx={{
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
            >
              dsada
            </Box>

            <Box
              sx={{
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
            >
              dsada
            </Box>
          </Box>
        </Box>
        <CustomCard minWidth="40%" backgroundColor="#fff">
          Panel 1
        </CustomCard>
        <CustomCard minWidth="60%" backgroundColor="#fff">
          Panel 1
        </CustomCard>
        <CustomCard minWidth="20%" backgroundColor="#fff">
          Panel 1
        </CustomCard>
        <CustomCard minWidth="50%" backgroundColor="#fff">
          Panel 1
        </CustomCard>
      </Box>
    </Flex>
  );
}

export default Dashboard;
