import {Link} from 'react-router-dom'

function Welcome({ func }) {
    return (
        <div>
            <h1>Welcome to Todo List</h1>
            <link onClick={func}>Log In</Link>
        </div>
    );
}

export default Welcome;
