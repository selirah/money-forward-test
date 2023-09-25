import "./index.scss";

type Props = {
  title: string;
  value: string;
};

const Card: React.FC<Props> = (props) => {
  const { title, value } = props;
  return (
    <div className="card-container">
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
    </div>
  );
};

export default Card;
