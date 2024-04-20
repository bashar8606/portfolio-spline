import style from "./Card.module.scss";

const Card = ({ children, className, instyle }) => {

    return (
        <div className={`${style.card} ${className}`} style={instyle}>
            {children}
        </div>
    );
};

export default Card;

