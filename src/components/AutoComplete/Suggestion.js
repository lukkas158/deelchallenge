import React from "react";

export default function Suggestion({
  title = "",
  highlightText = "",
  ...props
}) {
  let parts = title.split(new RegExp(highlightText, "gi"));

  return (
    <div>
      {parts.map((part, i) => {
        return (
          <a {...props} key={i}>
            {part}
            {i != parts.length - 1 && <b>{highlightText}</b>}
          </a>
        );
      })}
    </div>
  );
}
