
Here are two examples of implementing our color picker using React.

## Version 1

This is the version we did in class using React from the CDN. The color-picker.js code shows the evolution of our `LabeledSlider` as we pushed the state up out of the slider and into the color picker.


## Version 2

This version replicates how React is typically used.

First, we created a stub project using the tool `create-react-app`. This created a project directory for us, and set us up to be able to incorporate JSX with the React code.

The main entry point for our work will be index.js. In this instance, it creates an instance of the `ColorPicker` component and installs it on the page.

The `create-react-app` tool actually sets us up with a full development server and build process.

Start by typing `npm install` from within this "version 2" folder. This will install all of the dependancies that are listed in `package.json` (which is the basic configuration file for node applications).

Once the installation is complete, type `npm start`. This will start a local development server for your application. The server plays a couple of roles. First, it serves your web application. If you direct your browser towards `http://localhost:3000`, you will be served your page (in truth, running `npm start` has probably already opened your browser for you).

The second thing it does is bundle your code using a tool called `webpack`. This collects all of the JavaScript and CSS files in src (and any libraries you may include) and assembles them into one single file. The JavaScript files are run through a parser which converts JSX into JavaScript.

JSX is an extension to JavaScript that allows you to use a syntax similar to HTML for specifying DOM elements in your code. If you look at ColorPicker.js, you will see that it is virtually identical to the first version, we just have replaced all of the `React.createElement()` calls with some nicer syntax. To learn more about JSX, read this page: <https://facebook.github.io/react/docs/introducing-jsx.html>.

The final cool thing that the server does for you is a process called "hot loading". If you edit any of the files and save the changes, the server will re-bundle the code, and the browser will refresh to show your changes.   
