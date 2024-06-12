export default function Message4() {

/****** Event Handling In React ******/
    // Event Handling In React
    function handleClick() {
        console.log("Button Clicked");
    }

    return (
        <div>
            <button onClick={handleClick}> Click here to get a message</button>
        </div>
    );
}