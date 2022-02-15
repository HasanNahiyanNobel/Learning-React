# Learning Log

Following the [Modern React Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d) created by the channel *The Net Ninja*.



<img src="images/icon.svg" style="display: block; margin-left: auto; margin-right: auto; max-width: 200px; width: 50%" alt="Logo of React">



## 1. Introduction
* React is just an open-source JS library—used to build user interfaces.
* And one interesting thing—it is maintained by [Meta](https://en.wikipedia.org/wiki/Meta_Platforms)! Literally, their GitHub repository reads: [github.com/facebook/react](https://github.com/facebook/react).



## 2. Creating a React Application
* Created a new app named *bilu-web* using the command `npx create-react-app bilu-web`. This generated loads of files. 😕 Although this comes with a fun-part—an automatically-generated `.gitignore` file.
* Started the server using `npm run start`.
* Learnt a good thing. Our `package.json` file contains all the dependencies—so when we clone a repo and run `npm install`—all the necessary dependencies are installed automatically.



## 3. Components and Templates
* What we are working with is almost identical to html, and we call this *jsx*.
* One big difference between jsx and html is, in jsx, we use `className` instead of `class`. This is obvious, because `class` is a reserved keyword in JavaScript.
* React is based on *components*. A component, in a nutshell, just a function, and inside that function, we return jsx templates (generally), but as we are being said, it can also be otherwise.



## 4. Dynamic Values in Templates
* Learnt to use constants (and essentially, variables) inside jsx.



## 5. Multiple Components
* React has a root component. In this case, it is `App.js`. We may add subcomponents (navbar, details, sidebar etc.) under this root component.
* Also, we may have sub-subcomponents.
* To create a component, for example, navbar, we have to
	* Create `Navbar.js` inside `src` directory.
	* Crete a function inside that file.
	* Import the function to `Apps.js`.



## 6. Adding Styles
* Got rid of `App.css` and used `index.css` for all the styling.
* Used object for inline styling.



## 7. Click Events
* Used functions, with and without parameters, to handle button click events.



## 8. Using State (`useState` Hook)
* Learnt to use the `useState` hook to change page content on the fly. This is awesome!



## 9. Intro to React Dev Tools
* Learnt how useful a browser extension can be!



## 10. Outputting Lists
* Used a JS array method to generate blog posts.



## 11. Props
* Passed a property—which seemed magical—as I had a hard time to understand how this works.



## 12. Reusing Components
* As the title says, learnt to reuse components. React seems powerful now.



## 13. Functions
* Used a function to delete blogs.



## 14. `useEffect` Hook (The Basics)
* We need to be careful here, because changing the DOM inside `useEffect` may end up in endless loops.



## 15. `useEffect` Dependencies
* Learnt to use dependencies on `useEffect`. This is beautiful!



## 16. Using the JSON Server
* Used `npx json-server --watch data/db.json --port 8000` to start a *JSON server*, perhaps.



## 17. Fetching Data with `useEffect`
* Fetched data from the json db, using `useEffect`. Felt like magic.



## 18. Conditional Loading Message
* Showed a loading message (although I'd preferred a spinner!) while the blogs are loading.



## 19. Handling Fetch Errors
* Learnt basic handling for fetch errors.



## 20. Making a Custom Hook
* Custom hooks in React need to start with `use`. Otherwise, they won't work. 😕
* Implemented a custom hook `useFetch`.



## 21. The React Router
* Used `npm install react-router-dom` to install that package.
* Imported some components from react-router-dom.
* Added The route for home component.



## 22. Exact Match Routes
* React has a strange way of matching routes, that's why we need a `<Route exact path="/">` for the index page.



## 23. Router Links
* Use `<Link>` instead of `<a>` tag to prevent requests to servers.



## 24. `useEffect` Cleanup
* I don't think I understood any of this.



## 25. Route Parameters
* Used parameter for paths.
