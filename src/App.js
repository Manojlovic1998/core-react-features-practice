import Todo from "./components/Todo";

function App() {
    return (
        <div>
            <h1>My Todos</h1>
            <Todo text={"Example text string title"}/>
            <Todo text={"Example text string title 2"}/>
            <Todo text={"Example text string title 3"}/>
            <Todo text={"Example text string title 4"}/>
        </div>
    );
}

export default App;
