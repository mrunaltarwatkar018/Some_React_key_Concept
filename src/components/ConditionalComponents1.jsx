import Code2 from "./Code2";
import Welcome3 from "./Welcome3";


export default function ConditionalComponent1() {
/****** Conditionally Rendering JSX & Components ******/

// Conditionally Rendering JSX & Components
    // const display = true;
    // if (display) {
    //     return (
    //         <div>
    //             <h3> This is a conditional Component</h3>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <h3> Code Everyday!</h3>
    //     );
    // }


    // const display = true;
    // // const display = false;
    // if (display) {
    //     return <Welcome3 />;
    // } else {
    //     return <Code2 />;
    // }

    // problem of above code - 
    // there are two return statements inside a single component,
    // while that this okay 
    // to solve tthis issues we have below method


/****** Conditionally Rendering Using Element Variables ******/
// Conditionally Rendering Using Element Variables

    // let messageOne = <h1> This is message 1</h1>
    // let messageTwo = <h1> This is message 2</h1>
    // const display = true;
    // if(display) {
    //     return messageOne;
    // } else {
    //     return messageTwo;
    // }

    // this works fine, but we till now not resolve the problem i.e., two return statement
    // to resolve this ----

    // let message;
    // const display = true;
    // if(display) {
    //     message = <h1> This is message 1</h1>;
    // } else {
    //     message = <h1> This is message 2</h1>;
    // }
    // return message;


/****** Conditionally Rendering Using ternary Operators In React ******/
// Conditionally Rendering Using ternary Operators In React
    const display = true;
    // return display ? <h1> Message 1</h1> : <h1> Message 2</h1>;

    return display ? <Welcome3 /> : <Code2 /> // we can also render a component using ternary operator

}