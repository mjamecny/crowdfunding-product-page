import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root{
--color-moderate-cyan: hsl(176, 50%, 47%);
--color-dark-cyan: hsl(176, 72%, 28%);
--color-black: hsl(0, 0%, 0%);
--color-dark-gray: hsl(0, 0%, 48%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  font-size: 62.5%;
}

body {
  font-family: 'Commissioner', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
`

export default GlobalStyles
