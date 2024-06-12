import { useState } from "react";

export default function Form7() {
/****** Handling Input Fields In React ******/
    // Handling Input Fields In React


    // const [name, setName] = useState("");

    // function handleChange(e) {
    //     console.log(e.target.value);
    // }

    // return (
    //     <div>
    //         <form>
    //             <input 
    //                 onChange={function demo(e){
    //                 return handleChange(e);
    //             }} type="text" value={name} />
    //         </form>
    //     </div>
    // );





// above code not display the information what user type in input filed

    // function handleChange(e) {
    //     setName(e.target.value);
    // }

    // return (
    //     <div>
    //         <form>
    //             <input onChange={(e) => handleChange(e)} type="text" value={name} />
    //         </form>
    //     </div>
    // );





// abpve code can be written as in following way in order to optimize the code and minimize the number of statements

    // return (
    //     <div>
    //         <form>
    //             <input onChange={(e) =>setName(e.target.value)} type="text" value={name} />
    //         </form>
    //     </div>
    // );





/****** Handling Multiple Inputs In React ******/
    // Handling Multiple Inputs In React

    // const [name, setName] = useState({firstName:"", lastName:""});

    // return (
    //     <div>
    //         {name.firstName} - {name.lastName}
    //         <form>
    //             <input onChange={(e) =>setName({...name, firstName: e.target.value})} type="text" value={name.firstName} />
                
    //             <input onChange={(e) =>setName({...name, lastName: e.target.value})} type="text" value={name.lastName} />
    //         </form>
    //     </div>
    // );





/****** Handling Form Submission In React ******/
    // Handling Form Submission In React
    const [name, setName] = useState({firstName:"", lastName:""});

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
    }

        return (
            <div>
                {name.firstName} - {name.lastName}
                <form>
                    <input onChange={(e) =>setName({...name, firstName: e.target.value})} type="text" value={name.firstName} />
                    
                    <input onChange={(e) =>setName({...name, lastName: e.target.value})} type="text" value={name.lastName} />
                </form>

                <button onClick={(e) => handleSubmit(e)}> Add </button>
            </div>
        );



}