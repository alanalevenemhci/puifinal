import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

// The language selection is used to display which language is currently active
// It receives setLanguage as a prop (input) which is used to update the React App.js state which in turn
// passes the language value to other parts of the app

function LanguageSelector({ language, setLanguage }) {
  const handleLanguageUpdate = (event) => {
    const {
      target: { value },
    } = event;
    setLanguage(value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel label="Language selection" id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Language"
        value={language}
        onChange={handleLanguageUpdate}
      >
        <MenuItem value="en">
          English{" "}
          <ReactCountryFlag
            style={{ alignContent: "right" }}
            countryCode="US"
          />
        </MenuItem>
        <MenuItem value="es">
          Espanol{" "}
          <ReactCountryFlag
            style={{ alignContent: "right" }}
            countryCode="ES"
          />
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default LanguageSelector;
