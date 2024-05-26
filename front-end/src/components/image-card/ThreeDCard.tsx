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
        <div className="">
          <CardItem translateZ="50" className="">
            {aboveText}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {belowText}
          </CardItem>
          <CardItem
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
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
