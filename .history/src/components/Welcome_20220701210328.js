import { Link } from 'react-router-dom';

function Welcome({ func }) {
    return (
        <div>
            <h1>Welcome to Todo List</h1>
            <Link to="\login">
                <button>Login</button>
            </Link>
        </div>
    );
}

export default Welcome;
