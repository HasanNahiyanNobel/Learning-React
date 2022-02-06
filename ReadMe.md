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
