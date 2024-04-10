import * as React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box, Skeleton } from "@mui/material";
import axios from "axios";
function Workers(sx) {
  const [rows, setRows] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = React.useState(true);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "website", headerName: "Website", width: 110 },
  ];

  useEffect(() => {
    const fetchdata = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log(response);
          setRows(response.data);
        });
    };

    fetchdata();
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  if (loading) {
    return (
      <Box flexShrink={1} width="100%" height="100%">
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
        />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        sx={{
          "& .MuiDataGrid-columnHeaderRow": {
            backgroundColor: "black !important",
            width: "100%",
          },
        }}
      />
    </Box>
  );
}

export default Workers;
