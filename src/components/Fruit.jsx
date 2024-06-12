

export default function Fruit({name, price, emoji, soldout}) {

/****** Rendering  Components Inside A Loop ******/

    // Rendering  Components Inside A Loop
    // return (

    //     <li>
    //         {emoji} {name} {price}
    //     </li>
    // )


/****** Conditionally Rendering List Items ******/
    // Conditionally Rendering List Items
    // return (

    //     <>
    //         {/* {emoji} {name} {price} */}
    //         {price > 5 ? <li>{emoji} {name} {price}</li> : ""}
    //     </>
    // )

/****** Conditionally Rendering A Message using Ternaray Operator ******/
    // Conditionally Rendering A Message using Ternaray Operator

    return (

        <>
            <li>
                {emoji} {name} {price} {soldout ? "soldout" : ""}
            </li>
        </>
    )
}