import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, TextField } from "@mui/material";
function UserForm() {
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
        backgroundColor: "white",
        display: "flex",
      }}
    >
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        sx={{
          backgroundColor: "white",
          display: "flex",
          width: "500px",
          height: "500px",
        }}
        open={true}
        onClose={() => setOpen(false)}
      >
        <>
          <form onSubmit={handleSubmit}>
            <TextField name="name" value={user.name} onChange={handleChange} />
            <Button type="submit">submit</Button>
          </form>
        </>
      </Modal>
    </div>
  );
}

export default UserForm;
