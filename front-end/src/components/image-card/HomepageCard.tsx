import "./HomepageCard.scss";

interface HomepageCardProps {
    url: string;
    title: string;
    paragraph: string;
    }

const HomepageCard = ({url, title, paragraph}: HomepageCardProps) => {
  return (
    <div className="main-box-container">
      <div className="box-container">
        <img
          src={url}
          alt={title}
          className="box-image"
        />
        <h3 className="box-title">{title}</h3>
        <p className="box-description">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default HomepageCard;
