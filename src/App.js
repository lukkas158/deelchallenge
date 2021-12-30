import "./App.css";
import AutoComplete from "./components/AutoComplete";

import React, { useState } from "react";
import AutoCompleteService from "./services/AutoCompleteService";

function App() {
  const [country, setCountry] = useState("");
  return (
    <div className="App">
      <div className="App-auto-complete">
        Country selected: {country}
        <AutoComplete
          placeholder="Countries"
          value={country}
          onChange={setCountry}
          getSuggestions={AutoCompleteService.getSuggestions}
        />
      </div>
    </div>
  );
}

export default App;
