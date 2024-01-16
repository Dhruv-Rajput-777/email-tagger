import React from "react";
import UserIcon from "./UserIcon";
import styles from "../styles/index.module.css";
import { useDispatch } from "react-redux";
import { setSearchString, tagUser } from "../redux";
import useFocus from "../hooks/useFocus";

function SuggestedUser({ user, inputRef }) {
  const dispatch = useDispatch();
  const { reFocus } = useFocus();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 8px",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "lime",
          color: "yellow",
        },
      }}
      className={styles.suggestedUser}
      onClick={(e) => {
        dispatch(tagUser(user));
      }}
    >
      <UserIcon name={user.name} />
      <div style={{ fontSize: "14px", minWidth: "120px" }}>{user.name}</div>
      <div style={{ fontSize: "14px", color: "#808080" }}>{user.email}</div>
    </div>
  );
}

export default SuggestedUser;
