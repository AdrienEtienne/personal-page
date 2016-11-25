import React from 'react'
import Javascript from '../../../assets/images/javascript.png'
import Bar from '../../../components/Bar'
import Teckonaut from '../../../components/Teckonaut'
import ButtonCross from '../../../components/ButtonCross'
import HoverBand from '../../../components/HoverBand'
import './HomeView.scss'

export class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      toggled:true
    }
  }

  onToggle(){
    this.setState({toggled:!this.state.toggled})
  }

  render() {
    return (
      <div className="HomeView">
        <h1>
          Founder of
          <br></br>
          <Teckonaut></Teckonaut>
        </h1>
        <div>
          <ButtonCross toggle={this.onToggle.bind(this)} toggled={this.state.toggled}></ButtonCross>
        </div>

        <Bar
          image_alt="This is Javascript!"
          image={Javascript}
          text="In conflictual relationship with Javascript"></Bar>

        <HoverBand>
          test de contenue
        </HoverBand>
        <div className="container">
          <h4>Welcome! Duck</h4>
        </div>
      </div>
    );
  }
}


HoverBand.propTypes = {};
HoverBand.defaultProps = {};
export default HomeView
