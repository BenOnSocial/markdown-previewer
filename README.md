# Build a Markdown Previewer

This project is part of my [Front-End Development Libraries V8 certification from freeCodeCamp](https://www.freecodecamp.org/certification/benonsocial/front-end-development-libraries).

## Objective

Build an app that is functionally similar to this: https://markdown-previewer.freecodecamp.rocks/.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a front-end framework (like React for example) because this section is about learning front-end frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other front-end frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

## User Stories

1. I can see a `textarea` element with a corresponding `id="editor"`.

2. I can see an element with a corresponding `id="preview"`.

3. When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the textarea.

4. When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

5. When my markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

6. When my markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.
