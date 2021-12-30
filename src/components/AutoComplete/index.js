import React, { useRef, useState } from "react";
import "./AutoComplete.css";
import Suggestion from "./Suggestion";

export default function AutoComplete({ getSuggestions, onChange, ...props }) {
  const lastRequestId = useRef(null);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  async function onBlur() {
    setSuggestions([]);
    setError("");
  }

  async function _getSuggestions(value) {
    onChange(value);
    setError("");
    try {
      // Empty value should resets the suggestions.
      if (!value) {
        lastRequestId.current = null;
        setSuggestions([]);
        return;
      }

      // TODO: Would be good generating an UUID for  preventing conflicts.
      let currentRequestId = Math.floor(Math.random() * 100000);
      lastRequestId.current = currentRequestId;
      let result = await getSuggestions(value);

      // Prevents a old request from updating the DOM with trash values;
      if (currentRequestId !== lastRequestId.current) {
        return;
      }
      setSuggestions(result);
    } catch (error) {
      setError("Something went wrong");
    }
  }

  return (
    <div className="AutoComplete">
      <input
        {...props}
        className="AutoComplete-input"
        onBlur={onBlur} // When the user taps outside the input it closes the dropdown.
        type="text"
        onChange={(e) => _getSuggestions(e.target.value)}
      ></input>
      {error}
      {suggestions.length !== 0 && (
        <ul className="AutoComplete-suggestions">
          {suggestions.map((suggestion, id) => (
            <li className="AutoComplete-suggestions-item" key={suggestion.key}>
              <Suggestion
                highlightText={props.value}
                title={suggestion.name}
                onMouseDown={() => onChange(suggestion.name)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
