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

## Create Navbar, MovieCard, State

- `https://www.sampleapis.com/api-list/movies`
- Create a top level state
- pass data down as props
- Conditionally show content
- Add Responsive layouts.

## Key points till now

- Updater fn is async & a call to this fn will re-render the component
- hooks should be called at the top level of the component. ( not within nested conditions )
- State updates are always scheduled.
- State lifting
- controlled vs uncontrolled components
- setState object syntax vs function syntax
- State flows down, events flow up
- We pass pointers to functions
- why is passing events up, changing the state in parent component & passing the new value down as prop recommended?
- styling - will be looked into it later. `styles.module.scss` and import them.
  `import styles from './styles.module.scss'`
- CSS in JS, styled components.
- scoped styles & dynamically adding props.
- To add images, just import them like any other file.

```
import carImage from './path';

<img src={carImage}>
```

- Fragments & its need.
- What is ref? What is its need?
- Affect DOM directly. Dont do DOM manipulation with ref.
- If the requirement is to just read the value, refs are better. But the input becomes uncontrolled component.

## Side effects

- Till now, we dealt with static contents. But there are async stuffs that happen.
- useState rerenders the component.
- API calls, network requests, timeouts, intervals, storage etc

## UseReducer and api calls with Load more

- Instead of useState, we did the useReducer
- when to use what
- So what about Context ? ( app wide state )

## Review time

- Find areas of improvement in the code we wrote till now.
- Note down all the suggestions

- The import paths isnt clean.
- Add craco config
- `https://www.npmjs.com/package/@craco/craco`
- Can divide components based on its use and functionality
- Needs a restart when we add more alias
- Too much content in App.js
- Can split them into various pages.
- In footer, we can divide the social media icons into its own components ( future )
- comment the code if needed
- Plugin to sort imports ascending
- Dont use strings littered around the app.
- See if there is any reason to life the state to parent components

## Context

- Now the state of the application is littered around
- App.js has movies related slice
- AppUsers contain the user slice data
- When we need state that needs to be shared throughout the app, and if that state is not changed / updated often, then context is a good alternative
- Different components have different axios calls, need to be a unified one.
- When we refactor, the craco aliases come in handy

## Routing

- We splitted the whole app into routes
- Now app looks good, but open the network tab and switch back and forth.
- We get to see the requests being sent on each route change.

- We added a COntext, wrapped them in a common component
- We hide the buttons and links if the user is not authorized

## Redux

- `npm i redux redux-thunk react-redux redux-devtools-extension --save`
- `npm i reselect --save`

## Redux toolkit

- `npm install @reduxjs/toolkit`
