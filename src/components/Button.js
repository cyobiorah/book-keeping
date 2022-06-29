import backIcon from "./left-arrow.png";

const Button = ({ handleClick, children, classname, back }) => {
  return (
    <button
      className={`${classname ? classname : ""} btn`}
      onClick={handleClick}
    >
      {back && <img className="back-icon" src={backIcon} alt="back-icon" />}
      {children}
    </button>
  );
};

export default Button;
