import React from 'react'
import './HoverBand.scss'

class HoverBand extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    for (var i = 1; i < 10; i++) {
      setTimeout(() => this.setState({
        active: !this.state.active
      }), i * 500);
    }
  }

  render() {
    return (
      <div className="HoverBand">
        <div
          className={'hvr-shutter-out-horizontal ' + (this.state.active
          ? 'active'
          : '')}>
          <div className="without-hover">
            Mon info avant hover
          </div>
          <div className="with-hover">
            {this.props.children}</div>
        </div>
      </div>
    );
  }
}

HoverBand.propTypes = {};
HoverBand.defaultProps = {};

export default HoverBand
