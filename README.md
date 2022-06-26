# CV-Application

CV-Application as part of The Odin Project curriculum

[Click here to view project live](https://athma-vasi.github.io/CV-Application/)

## Things I learned

### TL;DR

- React
- Hooks
- useReducer
- styled-components
- dark mode
- JSX

### React

This is my first official React project and I must say, it was kinda tough going in the beginning. I had already worked out a system to render and update using plain javascript, and I now realize how utterly unscalable that was. I finally understand the difference between declarative programming in React and imperative programming in plain javascript.

Using create-react-app feels like magic. I sincerely hope none of the >1200 dependent modules ever break...

### Hooks

I did have time with the traditional way of using class components. However, I decided to learn the modern way of using React, and went all-in on hooks. In preparation for learning Redux, I practised using useReducer for overall appState management in this project. Although I did use useState for local state management.

I like the idea of having a centralized state management. Passing dispatch functions down and having local states trigger update was easier to reason about than a multitude of useStates peppered throughout.

Next stop: all the rest of the hooks, then custom hooks

### styled-components

In my on-going quest towards reducing the amount of CSS I have to write, I have finally hit upon a solution that I like. styled-components promises modularity by using tagged templates.

I still had to write global CSS as I am still experimenting with styled-components, but I see the light(mode)! It allowed me to do dark mode in a fairly straightforward way, something I had been looking forward to implement ever since I started this journey.

Next stop: using HOCs to further improve component reusability

### JSX

This is the killer feature of React imo. At first, I was horrified having to write HTML-like syntax in my javascript, but I am now a convert. With the zeal of the newly converted, I am ready to preach to the unconverted! It was bit of an uphill struggle figuring out conditional rendering though.
