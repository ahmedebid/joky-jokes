import Joke from "./Joke";

export default function App() {
    return(
        <div className="container">
            <h1>Joky Jokes 🤣</h1>
            <Joke 
                question="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it."
            />
            <Joke 
                question="How did the hacker escape the police?" 
                punchline="He just ransomware!"
            />
            <Joke 
                question="What's the best thing about Switzerland?" 
                punchline="I don't know, but the flag is a big plus!"
            />
            <Joke 
                question="Why do bees stay in the hive in the winter?" 
                punchline="Swarm."
            />
            <Joke
                punchline="Swarm."
            />
        </div>
    );
}