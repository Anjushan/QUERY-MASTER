import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect } from "react";
import axios from "axios";
import React, { useState } from "react";

export default function ComboBox2({ onUserSelect }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/demo/users/teachers");
    setUsers(result.data);
    console.log(result.data);
  };

  const handleSelectUser = (event, value) => {
    if (value) {
      const selectedUser = users.find((user) => user.firstname === value);
      if (selectedUser) {
        onUserSelect(selectedUser.firstname, selectedUser.uid);
      }
    } else {
      onUserSelect(null, null);
    }
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={users.map((user) => user.firstname)}
        onChange={handleSelectUser}
        // getOptionLabel={(option) => option.fieldname}
        sx={{ width: 170 }}
        style={{ backgroundColor: "white" }}
        renderInput={(params) => <TextField {...params} label="Teachers" />}
      />
    </div>
  );
}
