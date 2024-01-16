import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TaggedUser from "./TaggedUser";

function TaggedList({ handleRefocus }) {
  const taggedUsers = useSelector((state) => state.emailTagger.taggedUsers);
  return (
    <>
      {taggedUsers.map((user, idx) => (
        <TaggedUser handleRefocus={handleRefocus} user={user} key={idx} />
      ))}
    </>
  );
}

export default TaggedList;
