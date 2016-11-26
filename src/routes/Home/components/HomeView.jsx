import React from 'react'
import Javascript from '../../../assets/images/javascript.png'
import Nodejs from '../../../assets/images/nodejs.png'
import Angularjs from '../../../assets/images/angularjs.png'
import Reactjs from '../../../assets/images/reactjs.png'
import Dotnet from '../../../assets/images/dotnet.png'
import Bar from '../../../components/Bar'
import Teckonaut from '../../../components/Teckonaut'
import ButtonCross from '../../../components/ButtonCross'
import HoverBand from '../../../components/HoverBand'
import History from '../../../components/History'
import './HomeView.scss'

export class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    }
  }

  onToggle() {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    return (
      <div className="HomeView">
        <div className="javascript-bar">
          <ButtonCross
            toggle={this
            .onToggle
            .bind(this)}
            toggled={this.state.toggled}></ButtonCross>
          <Bar
            image_alt="This is Javascript!"
            image={Javascript}
            text="In conflictual relationship with Javascript"></Bar>
        </div>
        <div
          className={'js-bars' + (this.state.toggled
          ? ''
          : ' hide')}>
          <div className="nodejs-bar">
            <Bar
              image={Nodejs}
              text="Follower of NodeJS techs. Listening news, religiously"></Bar>
          </div>
          <div className="angularjs-bar">
            <Bar image={Angularjs} text="Work hard with it"></Bar>
          </div>
          <div className="reactjs-bar">
            <Bar image={Reactjs} text="My new hobby"></Bar>
          </div>
        </div>
        <div className="dotnet-bar">
          <Bar image={Dotnet} text="A durable friendship between us"></Bar>
        </div>
        <div className="container">
          <History text="Mon histoire 1"></History>
          <History text="Mon histoire 2 avec contenue">
            <h1>Mon contenue</h1>
            <p>Mon paragraphe de contenue</p>
          </History>

        </div>
      </div>
    );
  }
}

HoverBand.propTypes = {};
HoverBand.defaultProps = {};
export default HomeView
