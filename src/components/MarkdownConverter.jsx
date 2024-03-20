import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import "./markdownConverter.css";

const MarkdownConverter = () => {
  const [inputText, setInputText] = useState({ input: "" });

  useEffect(() => {
    const defaultText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
    
Heres some code, \`<div></div>\`, between 2 backticks.
  
\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://d33wubrfki0l68.cloudfront.net/52edd2dfddbec5db22a65dba39951af8fa9bdff6/006f7/img/fcc_primary_large.svg)
  `;

    setInputText({ input: defaultText });

    return () => {};
  }, []);

  const handleChange = (e) => {
    setInputText({
      input: e.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <div className="textarea-container">
          <textarea
            id="editor"
            value={inputText.input}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="textarea-container">
          <div className="preview-container">
            <div id="preview">
              <Markdown>{inputText.input}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkdownConverter;
