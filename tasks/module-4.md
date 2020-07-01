Create the useHover() hook

In src/hooks, define a function useHover(). export it as default.

2
Creating a ref

At the top of the file, using the destructuring import syntax, import useEffect(), useRef(), and useState() from react. Inside the body of the useHover() hook, save the return value from a call to useRef() to a constant called ref.

3
Using the useState() hook

After our ref constant from the last task, using array destructuring, assign to the consts hovered and setHovered a call to useState(), passing in false as its argument.

4
Returning the ref and the hovered state

At the bottom of the function, return an array containing the ref and hovered consts.

5
Using the useEffect() hook

Before our return statement, make a call to useEffect(), passing in an anonymous function as an argument.

6
Return an anonymous function

return an anonymous function from the anonymous function passed into useEffect().

7
Register a mousenter event listener

Within the anonymous function that was passed to useEffect(), create a const refCopy. Assign to it the ref. Call the refCopy's addEventListener() method by using dot access: refCopy.current.addEventListener(). Pass the string 'mouseenter', and an anonymous function to the call of addEventListener() in that order.

note:

Although the unit tests will pass if you don't create the copy of the ref, when running the app, React will throw an error unless you have this closure.

8
Register a mouseleave event listener

After registering the 'mouseenter' event listener, make another call to the addEventListener() method using dot access in the same way we did in the last task. Pass as arguments 'mouseleave'and an anonymous function.

9
Create a callback to use on mouseenter

Before the call to useEffect(), declare a function enter(). It should make a call to setHovered(), passing true in as its only argument. Replace the anonymous function we passed to the addEventListener() call for 'mouseenter' with the enter function.

10
Create a callback to use on mouseleave

Before the call to useEffect(), declare a function leave(). It should make a call to setHovered(), passing false in as its only argument. Replace the anonymous function we passed to the addEventListener() call for 'mouseleave' with the leave function.

11
Remove event listener for mouseenter

In the anonymous function we are returning from the function being passed to useEffect(), call the removeEventListener() method of the refCopy's current property. Pass the string 'mouseenter' as the first argument to removeEventListener(). Pass the enter function as the second argument.

12
Remove event listener for mouseleave

After the call to removeEventListener(), make another call to removeEventListener() using dot access like we have done previously. Pass in the string 'mouseleave' and the leave function as arguments.
