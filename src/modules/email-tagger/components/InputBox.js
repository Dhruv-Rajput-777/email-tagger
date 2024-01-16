import React, { useEffect, useRef } from "react";
import SuggestionBox from "./SuggestionBox";
import useFocus from "../hooks/useFocus";
import { useDispatch, useSelector } from "react-redux";
import { setSearchString, findSuggestions } from "../redux";

function InputBox({ inputRef }) {
  const dispatch = useDispatch();

  const suggestionBoxRef = useRef(null);
  const { focused, onFocus, onBlur } = useFocus();

  const { searchString } = useSelector((state) => state.emailTagger);

  useEffect(() => {
    if (searchString === undefined) return;
    dispatch(findSuggestions());
  }, [searchString]);

  const handleClickOutside = (event) => {
    if (
      inputRef.current?.contains(event.target) ||
      suggestionBoxRef.current?.contains(event.target.parentNode)
    ) {
      inputRef.current?.focus();
    } else {
      onBlur();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search User"
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          minWidth: "300px",
          margin: "5px 0px",
        }}
        ref={inputRef}
        value={searchString}
        onFocus={onFocus}
        onChange={(e) => dispatch(setSearchString(e.target.value))}
      />
      {focused ? <SuggestionBox suggestionBoxRef={suggestionBoxRef} /> : <></>}
    </div>
  );
}

export default InputBox;
