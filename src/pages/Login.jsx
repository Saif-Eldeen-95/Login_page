import LoginForm from '../components/LoginForm';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="container">
                <h1 className="h1">Welcome To My Web App</h1>
                <br></br>
                <LoginForm />
                <br></br>
            </div>
        </div>
    );
};

export default Login;