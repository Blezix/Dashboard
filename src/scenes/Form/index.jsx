import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, TextField, Modal } from "@mui/material";
import { Form } from "react-router-dom";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { AddBox } from "@mui/icons-material";
function MyForm() {
  const { handleSubmit, control } = useForm();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100%",
        height: "100%",
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
        Otwórz Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            width: "30%",
            gap:"40px",
            bgcolor: colors.blueAccent[200]
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="pole1"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Pole 1" />}
          />
          <Controller
            name="pole2"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Pole 2" />}
          />
          <Button
            sx={{
              bgcolor: colors.blueAccent[200],
              " &:hover": {
                bgcolor: colors.blueAccent[400],
              },
            }}
            type="submit"
          >
            Zapisz
          </Button>
        </form>
      </Modal>
    </Box>
  );
}

export default MyForm;
