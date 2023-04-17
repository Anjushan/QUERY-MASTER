import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function FullWidthTextField() {
  const [search, setSearch] = useState("");
  console.log(search);

  // submit the search strin using keypress

  let navigate_search = useNavigate();
  const routeChange_search = () => {
    let path = `/Timeline/Search/?${search}`;
    navigate_search(path);
  };

  function useKey(key, cb) {
    const callbackRef = React.useRef(cb);

    useEffect(() => {
      callbackRef.current = cb;
    });

    useEffect(() => {
      function handle(event) {
        if (event.code === key) {
          callbackRef.current(event);
        }
      }

      document.addEventListener("keypress", handle);
      return () => document.removeEventListener("keypress", handle);
    }, [key]);
  }

  function handleEnter() {
    routeChange_search();
  }
  useKey("Enter", handleEnter);

  return (
    <Box style={{ width: "15cm" }}>
      <TextField fullWidth onChange={(e) => setSearch(e.target.value)} />
    </Box>
  );
}
