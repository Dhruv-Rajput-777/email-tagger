import { useState, useRef } from "react";

function useFocus() {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const reFocus = () => inputRef.current?.focus();

  return { focused, inputRef, onFocus, onBlur, reFocus };
}

export default useFocus;
