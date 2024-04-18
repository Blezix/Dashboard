import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, TextField } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
export default function ApiForm() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [user, SetUser] = useState({
    name: "",
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response);
        SetUser(response.data);
      });
  }, []);

  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("https://nonexistentapi.com/users", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log("nuh uh uh! you didn't say the magic word!");
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100%",
      }}
    >
      <Button
        sx={{
          bgcolor: colors.blueAccent[300],
          " &:hover": {
            bgcolor: colors.blueAccent[400],
          },
          width: "200px",
          height: "50px",
          position: "absolute",
        }}
        onClick={() => setOpen(true)}
      >
        otwórz Modal
      </Button>
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <>
          <form
            onSubmit={handleSubmit}
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              width: "50%",
              height: "100%",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              name="name"
              value={user.name}
              onChange={handleChange}
              sx={{
                width: "80%",
              }}
            />
            <Button
              type="submit"
              sx={{
                backgroundColor: colors.blueAccent[300],
                "&:hover": {
                  backgroundColor: colors.blueAccent[400],
                },
                width: "200px",
                height: "50px",
              }}
            >
              submit
            </Button>
          </form>
        </>
      </Modal>
    </div>
  );
}
