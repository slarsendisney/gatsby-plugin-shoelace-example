import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"

export default props => (
  <SyntaxHighlighter
    wrapLines
    style={darcula}
    language={props.language}
    customStyle={{
      padding: 10,
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 5,
      margin: 10,
    }}
    {...props}
  />
)
