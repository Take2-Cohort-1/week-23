# 🚀 Welcome to Week 23 🚀

Get ready to sharpen your React skills with a focus on practical hooks, better
app design. We round it off with some fun project work using two-dimensional arrays

## Learning Objectives

- Reason about when to use `useCallback`
- Decide on an array of dependencies for a React hook
- Determine functionality of an application by reading code
- Use two-dimensional arrays
- Read from a URL's query string
- Interact with the DOM using `useRef`
- Understanding API documentation
- Describe and create elements of a good user experience in a web app
- Listen for keyboard events in a React app

## Questions

- When do I use `useCallback` and what's the alternative?
- How do I decide whether something is a dependency for a React hook?
- From looking at other people's code, can I understand what the code does?
- Can I understand foreign API docs well enough to start using the API?
- When looking at a website, can I spot common patterns that make it polished or
  unpolished?
- What is a callback function?

## Slides

- "More on state" - an idea how to approach the React Tic Tac Toe state management

## Reading

Dive into articles on hooks, dependency management, and async effects.

[//]: # "Numbered lists don't need the actual numbers"

- https://react.dev/reference/react/useCallback
- https://devtrium.com/posts/dependency-arrays
- https://devtrium.com/posts/async-functions-useeffect
- https://hygraph.com/blog/react-usecallback-a-complete-guide
- https://react.dev/reference/react/useRef#manipulating-the-dom-with-a-ref

## Exercise: Reading other people's code

- Check out the `ReadingExercise.jsx` file in this repository
- Describe the resulting application _without_ running it
- Find the bug
- Describe what would make this code easier to read

## Exercise: Polish your weather app

- Add loading indicators
- Good keyboard support (autofocus, support for "Enter")
- Auto-refresh (and last refresh time)
- Responsive screen layouts
- Add a custom font from https://fonts.google.com
- Ability to start at another location by using a query parameter.
  Hint: look at the docs for `URLSearchParams` and try: `new URLSearchParams(window.location.search)`

## External Facilitation

- None this week

## Your Achievements For This Week

- [ ] Finish your weather app - a polished version
- [ ] Start a React tic-tac-toe project

---

## Extra Reading

- https://kentcdodds.com/blog/usememo-and-usecallback
  - Don't worry if you don't understand it all
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
  - Find out what's up with the `new URLSearchParams()` syntax. What does the `new` keyword do?
- https://www.coinlore.com/cryptocurrency-data-api
  - Try a new API!

