import { Typography } from "@mui/material";
import { CardBody, CardContainer, CardItem } from "./CardContainer";
import "./ThreeDCard.scss";
interface ThreeDCCardProps {
  imageUrl: string;
  imageAlt: string;
  clickHandler: () => void;
  aboveText: string;
  belowText: string;
}

export function ThreeDCard({
  imageUrl,
  imageAlt,
  clickHandler,
  aboveText,
  belowText
}: ThreeDCCardProps) {
  return (
    <CardContainer className="image-tile-container">
      <CardBody className="">
        <CardItem translateZ="100" className="">
          <img
            src={imageUrl}
            style={{aspectRatio: "1/1", width: "200px"}}
            className=""
            alt={imageAlt}
          />
        </CardItem>
        <div className="card-body">
          <CardItem translateZ="50" className="card-header">
            {aboveText}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="card-content"
          >
            {belowText}
          </CardItem>
          {/* <CardItem
            translateZ={20}
            as={"div"}
            onClick={clickHandler}
            target="__blank"
            className=""
          >
            Try now →
          </CardItem>
          <CardItem translateZ={20} as="button" className="">
            Lets go
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
  );
}
