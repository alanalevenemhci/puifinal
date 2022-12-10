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
      <label for="language-input" style={{display: "hidden"}}>Language</label>
      <InputLabel label="Language" id="language-selector-select-label">Language</InputLabel>
      <Select
        labelId="language-selector-select-label"
        id="language-selector-select"
        label="Language"
        value={language}
        inputProps={{id: "language-input"}}
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
