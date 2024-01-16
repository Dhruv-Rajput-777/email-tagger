import React from "react";
import { useSelector } from "react-redux";
import SuggestedUser from "./SuggestedUser";
import styles from "../styles/index.module.css";
import { tagUser } from "../redux";

function SuggestionBox({ suggestionBoxRef }) {
  const users = useSelector((state) => state.emailTagger.suggestedUsers);
  return (
    <div
      ref={suggestionBoxRef}
      style={{
        zIndex: 3,
        backgroundColor: "white",
        position: "absolute",
        maxHeight: "200px",
        minWidth: "400px",
        overflowY: "scroll",
        borderRadius: "10px",
        boxShadow: "1px 2px 13px 3px rgba(181,179,181,0.4)",
      }}
      className={styles.scroll}
      id="suggestionBox"
    >
      {users.length === 0 ? (
        <div style={{ padding: "14px 10px", fontSize: "14px" }}>
          No results found!
        </div>
      ) : (
        users.map((user, idx) => (
          <SuggestedUser inputRef user={user} key={idx} />
        ))
      )}
    </div>
  );
}

export default SuggestionBox;
