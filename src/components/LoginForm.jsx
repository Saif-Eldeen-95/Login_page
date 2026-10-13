import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Home from '../pages/Home';
import './LoginForm.css';

const fields = [
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
];

const initialValues = {
  email: '',
  password: '',
};

function validate_login(values) {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^\S+@gmail\.com$/.test(values.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!values.password) {
    errors.password = 'Please provide a password.';
  }

  return errors;
}

function LoginForm() {
  const [values, setValues] = useState(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate_login(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <Home />;
  }
  return (
    <>
    <h1 className="h1">Welcome To My Web App</h1>
    <br></br>
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h1>Login</h1>

      {fields.map(({ name, label, type, placeholder }) => (
        <div className="form-group" key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={values[name]}
            onChange={handleChange}
            className={errors[name] ? 'input-error' : ''}
            />
          {errors[name] && <span className="error-message">{errors[name]}</span>}
        </div>
      ))}
      <div className="button-group">
        <Button type="submit">Submit</Button>
        <Button onClick={() => navigate('/register')}>Register</Button>
      </div>
    </form>
    <br></br>
    </>
  );
}

export default LoginForm;
