import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <form>
            <div>
                <label htmlFor="">User name: </label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Password: </label>
                <input type="password" />
            </div>
            <Link to="/">
                <button>Login</button>
            </Link>
        </form>
    );
}

export default LogIn;
