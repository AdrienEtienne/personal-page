import React from 'react'
import './History.scss'
import ButtonCross from '../ButtonCross';

export const History = React.createClass({
    getInitialState() {
        return {toggled: false};
    },

    toggle() {
        this.setState({
            toggled: !this.state.toggled
        });
    },

    render() {
        return (
            <div className="History">
                <hr className="line"/>
                <div className="content">
                    <div className="content-title">
                        <div className="arrow-right"></div>
                        <div className={'title hvr-sweep-to-right' + (this.state.toggled?' active':'')}>
                        <ButtonCross toggled={this.state.toggled} toggle={this.toggle}></ButtonCross>
                        {this.props.title}
                        </div>

                    </div>
                    <div
                        className={'content-body' + (this.state.toggled
                        ? ''
                        : ' hide')}>
                        {this.props.children}
                    </div>
                </div>
            </div>

        )

    }
})

export default History
