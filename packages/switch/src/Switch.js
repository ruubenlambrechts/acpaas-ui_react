import React from 'react';
import classNames from 'classnames';
import InputLabel from '../../form/src/InputLabel';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }
  onChange = (e) => {
    this.setState({ checked: !this.state.checked });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  onClick = (e) => {
    this.setState({ checked: !this.state.checked });

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      id,
      label,
      name,
      checked,
      labelTrue,
      labelFalse,
      required,
      disabled,
    } = this.props;

    const inputClass = classNames(
      'a-input',
      { 'is-required': !!required }
    );

    return (
      <div className={inputClass}>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <div className="a-switch">
          <label className="a-switch__label">{labelFalse ? labelFalse : 'Nee'}</label>
          <div className="a-switch__toggle">
            <input type="checkbox"
               name={name}
               id={id}
               value={this.state.checked}
               defaultChecked={checked}
               disabled={disabled}
               onChange={this.onChange}
               onClick={this.onClick}
            />
            <label htmlFor={id}></label>
          </div>
          <label className="a-switch__label">{labelTrue ? labelTrue : 'Ja'}</label>
        </div>
      </div>
    )
  }
}

export default Switch;