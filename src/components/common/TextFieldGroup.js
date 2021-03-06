import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
}) => {
  return(
    <div>
      <input className={classnames('', {'input-invalid': error})}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        autoComplete="new-password"
        onChange={onChange}
        disabled={disabled}/>
        {error && (<div className="invalid-response">{error}</div>)}
        {info && <small className="form-text text-muted">{info}</small>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

TextFieldGroup.defaultProps = {
  type: 'text',
  onChange: () => {}
}

export default TextFieldGroup;
