
// props concept

// function Hello(props) {
//     return (
//        <div>
//             <h1>
//                 {props.message} {props.name} 
//             </h1> 
//        </div>
//     )    
// }


// destructuring the props

// destructuring method 1
// function Hello(props) {
//     console.log(props);
//     const {name, message} = props;
//     return (
//        <div>
//             <h1>
//                 {message} {name} 
//             </h1> 
//        </div>
//     )    
// }

// destructuring method 2
// function Hello({name, message, emoji}) {
//     return (
//        <div>
//             <h1>
//                 {message} {name} {emoji}
//             </h1> 
//        </div>
//     )    
// }



// immutability of Props

// function Hello(props) {
//     // props.name = "jake";  // immutability of props
//     return (
//        <div>
//             <h1>
//                 {props.message} 
//                 {props.name} 
//                 {props.emoji}
//             </h1> 
//        </div>
//     )    
// }


// passing Arrays TO components Using Props
// function Hello({name, message, emoji, seatNumbers}) {
//     return (
//        <div>
//             <h1>
//                 {message} 
//                 {name} 
//                 {emoji}
//                 {seatNumbers}
//             </h1> 
//        </div>
//     )    
// }


// function Hello(props) {
//     return (
//        <div>
//             <h1>
//                 {props.person.message} 
//                 {props.person.name} 
//                 {props.person.emoji}
//                 {props.person.seatNumbers}
//             </h1> 
//        </div>
//     )    
// }

// destructuring above code 
function Hello({person}) {
    return (
       <div>
            <h1>
                {person.message} 
                {person.name} 
                {person.emoji}
                {person.seatNumbers}
            </h1> 
       </div>
    )    
}
export default Hello;