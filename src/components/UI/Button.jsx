const Button = ({ children, textOnly, clasName, ...props }) => {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + clasName;
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
