## Install tailwind with CRA

- https://tailwindcss.com/docs/guides/create-react-app

## Install daisy UI

- https://daisyui.com/docs/install/

## We saw:

- what is react
- Its need.
- component base architecture, declarative, reuse
- SPA
- Snippets: Es7 snippet in VS Code, chrome react dev tools.

## Explain components

- Class component vs functional component
- Prior to React 16.7
- Single responsibility principle & DRY
- "UI is a function of state"
- We define the target state, let react takes care of rendering the same into the DOM
- JSX ( HTMLish ( htmlFor, className, etc ) )
- workflow: webpack, babel, etc
- wiring up flow.
- package json and the packages/ script inside.
- We use the angle brackets to instantiate a component.
- Need to return one root element
- Component is just a function that returns JSX
- Component encapsulates HTML, CSS and JS. Name starts with uppercase.

## Pass inputs

- We created props and children
- Smart / dumb components or Container / Presentation components
- Add proptypes `https://www.npmjs.com/package/prop-types`
- We start with functional components first, since that will be the "go to" approach moving forward
