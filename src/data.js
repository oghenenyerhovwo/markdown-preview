
const header ="# Welcome to my React Markdown Previewer! \n\n## This is a sub-heading...\n\n"
const link = "There's also [links](https://www.freecodecamp.org),\n\n"
const inlineCode = "Here is `<span></span>` \n\n\n"
const blockCode = "```\nfunction add(a + b){\n      return a + b\n}\n```\n\n\n"
const listItem= "- And of course there are lists.\n - Some are bulleted.\n   - With different indentation levels.\n     - That look like this.\n\n\n"
const orderList = "1. Egg\n1. Beef\n1. Mango\n\n\n" 
const blockquote = "> My Block Quotes!\n\n\n"
const image = "![city](city2.jpg)"
const boldText = "_**Bold me**_"


export const data = header + link + inlineCode + blockCode + listItem+orderList+blockquote+image+boldText


// an image, 
// and 
// bolded text.
// ```
// # Welcome to my React Markdown Previewer!

// ## This is a sub-heading...
// ### And here's some other cool stuff:

// Heres some code, \`<div></div>\`, between 2 backticks.

// \```
// // this is multi-line code:

// function anotherExample(firstLine, lastLine) {
//   if (firstLine == \'``\`' && lastLine == \'``\`') {
//     return multiLineCode;
//   }
// }
// \```

// You can also make text **bold**... whoa!
// Or _italic_.
// Or... wait for it... **_both!_**
// And feel free to go crazy ~~crossing stuff out~~.

// There's also [links](https://www.freecodecamp.org), and
// > Block Quotes!

// And if you want to get really crazy, even tables:

// Wild Header | Crazy Header | Another Header?
// ------------ | ------------- | -------------
// Your content can | be here, and it | can be here....
// And here. | Okay. | I think we get it.

// - And of course there are lists.
//   - Some are bulleted.
//      - With different indentation levels.
//         - That look like this.


// 1. And there are numbered lists too.
// 1. Use just 1s if you want!
// 1. And last but not least, let's not forget embedded images:

// ![city](city2.jpg)


// ```