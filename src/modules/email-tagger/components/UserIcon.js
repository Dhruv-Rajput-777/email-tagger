import React from "react";
import colors from "../static/colors";

function splitFullName(fullName) {
  const nameArray = fullName.split(" ");
  if (nameArray.length >= 2) {
    const firstName = nameArray[0];
    const lastName = nameArray[nameArray.length - 1];
    return { firstName, lastName };
  } else {
    return { firstName: fullName, lastName: "" };
  }
}

function hexToRgba(hex, opacity) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function djb2Hash(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return hash >>> 0;
}

function generateHashInRange(inputString, range) {
  const hashValue = djb2Hash(inputString);
  const scaledHash = hashValue % range;
  return scaledHash;
}

function UserIcon({ name }) {
  const { firstName, lastName } = splitFullName(name);
  const firstChar = firstName[0],
    secondChar =
      lastName === ""
        ? firstName.length > 1
          ? firstName[1]
          : ""
        : lastName[0];

  firstChar.toUpperCase();
  secondChar.toUpperCase();

  const hash = generateHashInRange(name, colors.length);
  const color = colors[hash];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bolder",
        color: color,
        backgroundColor: hexToRgba(color, 0.2),
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        fontSize: "12px",
      }}
    >
      {firstChar}
      {secondChar}
    </div>
  );
}

export default UserIcon;
