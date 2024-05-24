import Button from '@mui/material/Button';

export type CentralizedButtonProps = {
    buttonText: string;
    onClick:()=> void;
    context: string;
}

const CentralizedButton = ({ buttonText, onClick, context }: CentralizedButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      className={`centralized-button ${context}`}
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};

export default CentralizedButton;
