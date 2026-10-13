import RegistrationForm from '../components/RegistrationForm';
import './Login.css';

const Registration = () => {
    return (
        <div>
            <div className="container">
                <h1 className="h1">Welcome To My Web App</h1>
                <br></br>
                <RegistrationForm />
                <br></br>
            </div>
        </div>
    );
};

export default Registration;