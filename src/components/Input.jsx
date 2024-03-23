import { useState, forwardRef, useImperativeHandle, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { Form, Input as AntInput } from "antd";
import "./Input.scoped.scss";
import clsx from 'clsx';

const Input = memo(forwardRef((props, ref) => {
  const {
    inputId,
    label = "Label",
    placeholder = "Type Here",
    required = false,
    disabled = false,
    className = "mb-7",
    emptyMsg = "Please provide input",
    minLength = -1,
    maxLength = -1,
    handleChange = () => {},
    handleBlur = () => {},
    handleEnter = () => {},
    rules = [],
    initialValue = "",
    type = "text",
    readOnly = false
  } = props;

  const [input, setInput] = useState("");

  useEffect(() => {
    if (initialValue) {
      handleChange(initialValue);
    }
  }, [initialValue]);

  function inputChange(e) {
    if (!readOnly) {
      setInput(e.target.value);
      handleChange(e.target.value);
    }
  }

  function onBlur(e) {
    if (!readOnly) {
     handleBlur(e?.target?.value);
    }
  }

  function onPressEnter(e) {
    if (!readOnly) {
      handleEnter(e?.target?.value);
    }
  }

  useImperativeHandle(ref, () => ({
    input,
  }));

  return (
    <Form.Item
      label={label}
      name={inputId}
      initialValue={initialValue}
      rules={[
        {
          required: required,
          message: emptyMsg,
        },
        ...rules,
      ]}
      className={clsx(className)}
      htmlFor={Array.isArray(inputId) ? inputId[1] : inputId}
    >
      {type == "password" ? (
        <AntInput.Password
          id={Array.isArray(inputId) ? inputId[1] : inputId}
          onChange={inputChange}
          placeholder={placeholder}
          disabled={disabled}
          onBlur={onBlur}
          onPressEnter={onPressEnter}
        />
      ) : (
        <AntInput
          className="custom-input"
          id={Array.isArray(inputId) ? inputId[1] : inputId}
          onChange={inputChange}
          placeholder={placeholder}
          //value={input}
          //maxLength={maxLength}
          disabled={disabled}
          showCount={maxLength > 1}
          onBlur={onBlur}
          onPressEnter={onPressEnter}
          readOnly={readOnly}
        />
      )}
    </Form.Item>
  );
}));

Input.propTypes = {
  inputId: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  emptyMsg: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleEnter: PropTypes.func,
  rules: PropTypes.array,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool
};

export default Input;
