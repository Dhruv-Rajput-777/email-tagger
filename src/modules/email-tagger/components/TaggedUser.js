import React from "react";
import { useDispatch } from "react-redux";
import { removeTag } from "../redux";
import CloseIcon from "../static/icons/CloseIcon";
import UserIcon from "../components/UserIcon";

function TaggedUser({ user, handleRefocus }) {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        boxShadow: "1px 2px 13px 3px rgba(181,179,181,0.3)",
        border: "thin solid rgba(181,179,181,0.5)",
        width: "fit-content",
        paddingRight: "5px",
        borderRadius: "16px",
        fontSize: "14px",
      }}
    >
      <div>
        <UserIcon name={user.name} />
      </div>
      <div>{user.name}</div>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={() => {
          dispatch(removeTag({ user }));
          handleRefocus();
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
}

export default TaggedUser;
