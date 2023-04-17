import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect } from "react";
import axios from "axios";
import React, { useState } from "react";

export default function ComboBox({ user, setUser, onFieldSelect }) {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    loadFields();
  }, []);

  const loadFields = async () => {
    const result = await axios.get("http://localhost:3003/demo/fields");
    setFields(result.data);
    console.log(result.data);
  };

  const handleSelect = (event, value) => {
    if (value) onFieldSelect(value.fid);
  };
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={fields}
        onChange={handleSelect}
        getOptionLabel={(option) => option.fieldname}
        isOptionEqualToValue={(option, value) => option.fid === value.fid}
        sx={{ width: 170 }}
        style={{ backgroundColor: "white" }}
        renderInput={(params) => <TextField {...params} label="Fields" />}
      />
    </div>
  );
}
