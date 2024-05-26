import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./CommonButton.scss";

interface CommonButtonProps {
  title?: string;
  onClick?: () => void;
}

export default function Button({title, onClick} : CommonButtonProps) {
  return (
    <AwesomeButton
      type="primary"
      onPress={() => {
        console.log("Button clicked");
        onClick && onClick();
      }}
    >
      {title ?? "Lets dive in" }
    </AwesomeButton>
  );
}
