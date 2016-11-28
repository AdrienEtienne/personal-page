import React from 'react'
import Javascript from '../../../assets/images/javascript.png'
import Nodejs from '../../../assets/images/nodejs.png'
import Angularjs from '../../../assets/images/angularjs.png'
import Reactjs from '../../../assets/images/reactjs.png'
import Dotnet from '../../../assets/images/dotnet.png'
import Bar from '../../../components/Bar'
import ButtonCross from '../../../components/ButtonCross'
import HoverBand from '../../../components/HoverBand'
import History from '../../../components/History'
import Teckonaut from '../../../components/Teckonaut'
import Footer from '../../../components/Footer'
import './HomeView.scss'

export class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggledBars: false
    }
  }

  onToggle() {
    this.setState({
      toggledBars: !this.state.toggledBars
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
            toggled={this.state.toggledBars}></ButtonCross>
          <Bar
            image_alt="This is Javascript!"
            image={Javascript}
            text="In conflictual relationship with Javascript"></Bar>
        </div>
        <div
          className={'js-bars' + (this.state.toggledBars
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
          <h1>Developer's Story</h1>
          <div className="stories">
            <History title="2012 - Intern Data Analyst">
              <h3>Orange France</h3>
              <p>Development of data mining scriptsDevelopment of data mining scriptsDevelopment of data mining scriptsDevelopment of data mining scriptsDevelopment of data mining scriptsDevelopment of data mining scriptsDevelopment of data mining scriptsDevelopment of data mining scripts</p>
              <p>Build of reports on sales data</p>
              <p>Reporting and data cleaning automation</p>
            </History>
            <History title="2014 - Computer Science degree">
              <h3>At Paris X University</h3>
            </History>
            <History title="2016 - Start freelance career">
              <h3>Create personal company :
                <Teckonaut></Teckonaut>
              </h3>
              <p>Mon paragraphe de contenue</p>
            </History>
          </div>

        </div>

        <Footer></Footer>
      </div>
    );
  }
}

HoverBand.propTypes = {};
HoverBand.defaultProps = {};
export default HomeView
