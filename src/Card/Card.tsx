import "./Card.css";

type CardProps = {
  className: string;
  children: React.ReactNode;
};

function Card(props: CardProps) {
  const cardClass = props.className + " card";
  return <div className={cardClass}>{props.children}</div>;
}
export default Card;
