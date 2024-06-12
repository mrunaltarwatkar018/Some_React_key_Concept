import Fruit from "./Fruit";


export default function Fruits() {

/****** Rendering Arrays or Lists In React Component ******/

    // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineaplle" ]

// Rendering Arrays or Lists In React Component

    // return <div>
    //     <ul>
    //         {fruits.map(fruit=>(
    //             <li key={fruit}>{fruit}</li>
    //         ))}
    //     </ul>
    // </div>
    

/****** Rendering Arrays of Objects In React Component ******/
    // const fruits = [
    //     {name: "Apple", price:10, emoji:"🍎"},
    //     {name: "Mango", price:7, emoji:"🥭"},
    //     {name: "Banana", price:2, emoji:"🍌"},
    //     {name: "Orange", price:5, emoji:"🍊"},
    //     {name: "Pineapple", price:8, emoji:"🍍"},
    // ]


// Rendering Arrays of Objects In React Component
    
    // return (
    //     <div>
    //         <ul>
    //             {
    //                 fruits.map((fruit) => (
    //                     <li key={fruit.name}>
    //                         {" "}
    //                         {fruit.emoji} {fruit.name} ${fruit.price}
    //                     </li>
    //                 ))
    //             }
    //         </ul>
    //     </div>
    // )


/****** Rendering  Components Inside A Loop ******/
    // Rendering  Components Inside A Loop
    // return (
    //     <div>
    //         <ul>
    //             {
    //                 fruits.map((fruit) => (
    //                     <Fruit key={fruit.name} name={fruit.name} price ={fruit.price} emoji={fruit.emoji}/>
    //                 ))
    //             }
    //         </ul>
    //     </div>
    // );




/****** Conditionally Rendering A Message using Ternaray Operator ******/
    // Conditionally Rendering A Message using Ternaray Operator    
    const fruits = [
        {name: "Apple", price:10, emoji:"🍎", soldout: true},
        {name: "Mango", price:7, emoji:"🥭", soldout: false},
        {name: "Banana", price:2, emoji:"🍌", soldout: true},
        {name: "Orange", price:5, emoji:"🍊", soldout: false},
        {name: "Pineapple", price:8, emoji:"🍍", soldout: true},
    ]

    return (
        <div>
            <ul>
                {
                    fruits.map((fruit) => (
                        <Fruit 
                            key={fruit.name} 
                            name={fruit.name} 
                            price ={fruit.price} 
                            emoji={fruit.emoji}
                            soldout={fruit.soldout}    
                        />
                    ))
                }
            </ul>
        </div>
    )
    
}