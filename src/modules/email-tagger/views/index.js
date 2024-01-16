import TaggedList from "../components/TaggedList";
import InputBox from "../components/InputBox";
import { useRef } from "react";
import useFocus from "../hooks/useFocus";

function EmailTagger() {
  const inputRef = useRef(null);
  function handleRefocus() {
    inputRef.current?.focus();
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "70vw",
        padding: "10px",
        flexWrap: "wrap",
        gap: "10px",
        borderBottom: "2px solid blue",
      }}
    >
      <TaggedList handleRefocus={handleRefocus} />
      <InputBox inputRef={inputRef} />
    </div>
  );
}

export default EmailTagger;
