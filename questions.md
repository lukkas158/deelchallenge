1. What is the difference between Component and PureComponent? give an example where it might break my app.

PureComponent re-renders only when its props change. Component re-re-render every time its props change and when its the parent re-render as well.    The only cases that I thought of are when the pure component receives complex props and can't be easily compared to the older one( shallow props)


2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I don't know. 

3. Describe 3 ways to pass information from a component to its PARENT.


I could only remember using callbacks and the "render props" pattern, which is a kind of callback as well; Maybe we can use an "event emitter" too.


4. Give 2 ways to prevent components from re-rendering.

Using PureComponent or doing a custom shouldComponentUpdate method.


5. What is a fragment and why do we need it? Give an example where it might
break my app.

I use fragments when I want to return two siblings but without knowing the parent. 

6. Give 3 examples of the HOC pattern.

the connect function from Redux library; the withRouter from React-router;
and a custom withLoadingComponent that reuses the loading logic between components.

7. what's the difference in handling exceptions in promises, callbacks and
async...await.

In promise, we handle the exception from the catch method from the promise.   

Using a callback is almost the same as a promise.
async..await the same, but with is the prettier format for me.
Basically, they are pretty the same for me. I would only use callbacks in a case that is running in the background and I need an event when some error occurs.


8. How many arguments does setState take and why is it async.

I remember the first that could be overloaded, so it could be an object or a function and return an object.
And the second could be a function that will be run after the async setState function gets done.

It's async because of performance. They can save some rendering by grouping setState calls into one.


9. List the steps needed to migrate a Class to Function Component.

Create a function
transform all the state into useState
transform the lifecycle into useEffect functions.
( compenentDidMount, compenetDidUpdate, etc)
transfrom the instance variables in useRef


10. List a few ways styles can be used with components.

Using style directly into the component;
Passing an object as a style prop.
importing CSS and using className;
third-party libraries like styled components;


11. How to render an HTML string coming from the serve

Never had done this.