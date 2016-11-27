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
                <hr className="line top-line"/>
                <div className="content">
                    <hr className="line"/>
                    <div
                        className={(this.props.children
                        ? ''
                        : 'hide')}>
                        <ButtonCross toggled={this.state.toggled} toggle={this.toggle}></ButtonCross>
                    </div>
                    <div className={'content-title hvr-overline-from-left' + (this.state.toggled?' active':'')}>
                        <div className="arrow-right"></div>
                         {this.props.title}
                    </div>
                    <div
                        className={'content-body' + (this.state.toggled
                        ? ''
                        : ' hide')}>
                        {this.props.children}
                    </div>
                </div>
                <hr className="line bottom-line"/>
            </div>

        )

    }
})

export default History
