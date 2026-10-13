import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // لو حد فتح /home مباشرة من غير ما يسجّل دخول، نرجّعه لصفحة الـ login
  if (!state?.name) {
    return <Navigate to="/" replace />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>Welcome {state.name}</h1>
      <br />
      <Button onClick={() => navigate('/', { replace: true })}>Logout</Button>
    </div>
  );
}

export default Home;
