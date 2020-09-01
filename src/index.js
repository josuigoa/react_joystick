import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nipplejs from 'nipplejs';

class JoyStick extends Component {
  constructor(props) {
    super(props);
    this.joyRef = React.createRef();
  }

  componentDidMount() {
    this.manager = nipplejs.create({ ...this.props.options, zone: this.joyRef.current });
    this.props.managerListener(this.manager);
  }

  render() {
    return (
      <div ref={this.joyRef} style={this.props.containerStyle} />
    );
  }
}

JoyStick.defaultProps = {
  options: {
    mode: 'semi',
    catchDistance: 150,
    color: 'white',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  },
  containerStyle: {
    width: '100%',
    height: '50vh',
    position: 'relative',
    background: 'linear-gradient(to right, #E684AE, #79CBCA, #77A1D3)',
  },
};

JoyStick.propTypes = {
  managerListener: PropTypes.func.isRequired,
  options: PropTypes.shape({
    mode: PropTypes.string,
    catchDistance: PropTypes.number,
    color: PropTypes.string,
    top: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
  }),
  containerStyle: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    position: PropTypes.string,
    background: PropTypes.string,
  }),
};

export default JoyStick;
