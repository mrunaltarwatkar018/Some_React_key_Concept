import './App.css';
import Counter6 from './components/Counter6';
// import ConditionalComponent from './components/ConditionalComponents1';
// import Fruits from './components/Fruits';
// import Fruits from './components/Fruits';
// import Hello from './components/Hello'; 
// import Message4 from './components/Message4';
import Form7 from './components/Form7';

function App() {
  // passing Arrays TO components Using Props
  // const seatNumbers = [1, 4, 7];
  // const person = {
  //   name: "John",
  //   message: "Hi there!",
  //   emoji: "👋",
  //   seatNumbers:[1, 4, 7]
  // }

  // return (<div className="App"> 
  //   {/* <Hello 
  //     name="John" 
  //     message="Hi there!" 
  //     emoji="👋" 
  //     seatNumbers={seatNumbers}

  //   /> */}

  //   {/* <Hello person={person}/> */}

  //   {/* <Fruits /> */}

    
  // </div>);





/****** Conditionally Rendering JSX & Components ******/ 
  // return (
  //   <div className="App"> 
  //     <ConditionalComponent />
  //   </div>
  // );





/****** Conditionally Rendering List Items ******/
// Conditionally Rendering List Items

  // return (
  //   <div className="App"> 
  //     <Fruits />
  //   </div>
  // );

  



/****** Event Handling In React ******/
    // Event Handling In React
    // return (
    //   <div className="App"> 
    //     <Message4 />
    //   </div>
    // );





/****** State In React ******/
    // State In React
    // return (
    //   <div className="App"> 
    //     <Counter6 />
    //   </div>
    // );





/****** Handling Input Fields In React ******/
    // Handling Input Fields In React
    return (
      <div className="App"> 
        <Form7 />
      </div>
    );
}


export default App;
