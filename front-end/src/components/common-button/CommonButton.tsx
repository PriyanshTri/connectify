import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./CommonButton.scss";

interface CommonButtonProps {
  title?: string;
  onClick?: () => void;
  context?: string;
}

export default function Button({ title, onClick, context }: CommonButtonProps) {
  return (
    <AwesomeButton
      type="primary"
      className={`centralized-button ${context}`}
      onPress={() => {
        console.log("Button clicked");
        onClick && onClick();
      }}
    >
      {title ?? "Lets dive in"}
    </AwesomeButton>
  );
}
