import { useState } from "react";

export default function Counter6() {

/****** State In React ******/
    // State In React

    /*
        Note: General rule in react, the state of a component should be declared at the top of the Component 
    */

    // const [state_variable, function_which_can_change_the_state]
    // const [count, setCount] = useState();
    // const [count, setCount] = useState(1); // this means that, initaially value of state is 1 is set
    // const [count, setCount] = useState(0); // this means that, initaially value of state is 0 is set

    // function increment() {
    //     setCount(count+1);
    // }
    
    // function decrementClick() {
    //     setCount(count-1);
    // }
    // return (
    //     <div>
    //         <h1> Counter Value is: {count} </h1>
    //         <button onClick={increment}> Increment</button>
    //         <button onClick={decrementClick}> Decrement</button>
    //     </div>
    // );



/****** Creating Multiple States In React ******/
    // Creating Multiple States In React
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);


    function increment() {
        setCount(count+incrementBy);
    }
    
    function decrementClick() {
        setCount(count-incrementBy);
    }

    function increaseIncrement() {
        setIncrementBy(incrementBy+1);
    }

    function decreaseIncrement() {
        setIncrementBy(incrementBy-1);
    }



    return (
        <div>
            <h1> Counter Value is: {count} </h1>
            <button onClick={increment}> Increment</button>
            <button onClick={decrementClick}> Decrement</button>

            <h1> We are incrementing the value by: {incrementBy}</h1>
            <button onClick={increaseIncrement}> Increase Increment</button>
            <button onClick={decreaseIncrement}> Decrease Increment</button>
        </div>
    );
}