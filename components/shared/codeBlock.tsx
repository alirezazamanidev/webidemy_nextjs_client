import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
const CodeBlock = ({ language, code }:any) => {
  const codeBlockRef = useRef<any>(null);

  useEffect(() => {
    hljs.highlightBlock(codeBlockRef?.current);
  }, [codeBlockRef]);

  return (
    <pre dir="ltr">
      <code ref={codeBlockRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;