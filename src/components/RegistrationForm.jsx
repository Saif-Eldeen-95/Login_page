import { useState } from 'react';
import Button from './Button';
import Home from '../pages/Home';
import './LoginForm.css';

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
  { name: 'confirm_password', label: 'Confirm Password', type: 'password', placeholder: 'Confirm password' },
];

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^\S+@gmail\.com$/.test(values.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!values.password) {
    errors.password = 'Please provide a password.';
  }

  if (!values.confirm_password) {
    errors.confirm_password = 'Please confirm your password.';
  } else if (values.confirm_password !== values.password) {
    errors.confirm_password = 'Passwords do not match.';
  }

  return errors;
}

function RegistrationForm() {
  const [values, setValues] = useState(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <Home />;
  }
  
  return (
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

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default RegistrationForm;
