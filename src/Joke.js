export default function Joke(props) {

    return (
        <div className="joke">
            {/* The following line checks if there is a value for the 'question' prop and if
            there is one, then the question <p> tag will be rendered on the screen. Otherwise,
            it won't be rendered on the screen */}
            {props.question && <p><span>Question: </span>{props.question}</p>}
            <p><span>Punchline: </span>{props.punchline}</p>
        </div>  
    );

}