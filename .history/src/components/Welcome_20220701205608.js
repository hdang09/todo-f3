function Welcome({ func }) {
    return (
        <div>
            <h1>Welcome to Todo List</h1>
            <button onClick={func}>Log In</button>
        </div>
    );
}

export default Welcome;
