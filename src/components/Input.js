const Input = ({
  label,
  placeholder,
  type,
  cols,
  rows,
  inputRef,
  name,
  required = false,
  defaultValue,
  error,
}) => {
  return (
    <div className="form-group mb-1">
      {label && <label>{label}</label>}
      {type !== "textarea" ? (
        <input
          type={type}
          {...inputRef(name, { required: required })}
          name={name}
          className={`${error ? "error" : ""} input`}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      ) : (
        <textarea
          className={`${error ? "error" : ""} input`}
          style={{ width: "100%", height: "150px" }}
          {...inputRef(name, { required: required })}
          name={name}
          placeholder={placeholder}
          cols={cols}
          rows={rows}
        ></textarea>
      )}
    </div>
  );
};

export default Input;
