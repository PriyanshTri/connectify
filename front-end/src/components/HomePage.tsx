import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate("/login");
    };
  return (
    <Button variant="text" onClick={handleLoginClick}>
      Login
    </Button>
  );
}

export default HomePage