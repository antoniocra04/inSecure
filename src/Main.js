import React, { Component } from 'react';
import openEye from './openEye.png';
import closeEye from './closeEye.png'

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isHide: false
        }

        this.hide = this.hide.bind(this)
        this.checkPass = this.checkPass.bind(this)
    }

    hide(){
        this.setState({
            isHide: !this.state.isHide
        })
    }

    checkPass(event){
        let password = event.target.value
        if(password != ''){
            let score = 0
            if(/[A-Z]/.test(password)){
                score +=1
            }

            if(/[0-9]/.test(password)){
                score+=1
            }

            if(/\W/.test(password)){
                score+=1
            }

            if(password.length > 8){
                score+=1
            }

            switch(score){
                case 0:
                case 1:
                    this.refs.statusBar.style.width = '25%';
                    this.refs.statusBar.style.backgroundColor = '#FF0000'
                    this.refs.statusText.innerHTML = "Your password is too simple"
                    break;
                case 2:
                    this.refs.statusBar.style.width = '50%';
                    this.refs.statusBar.style.backgroundColor = '#FFB300'
                    this.refs.statusText.innerHTML = "Your password is simple"
                    break;
                case 3:
                    this.refs.statusBar.style.width = '75%';
                    this.refs.statusBar.style.backgroundColor = '#FFD717'
                    this.refs.statusText.innerHTML = "Your password is normal"
                    break;
                case 4:
                    this.refs.statusBar.style.width = '100%';
                    this.refs.statusBar.style.backgroundColor = '#7EEF3C'
                    this.refs.statusText.innerHTML = "Your password is strong"
                    break;
            }

        }else{
            this.refs.statusBar.style.width = '0px';
            this.refs.statusText.innerHTML = ""
        }

    }
    
    render() {
        return (
            <div className='main'>
                <div className="main__inner">
                    <div className="main__title_container">
                        <p className="main__title">Check the <span className='highlighter'>complexity</span> of your password</p>
                    </div>
                    <div className="main__form">
                        <div className="main__input_container">
                            <input onChange={this.checkPass} placeholder='Enter your password' type={this.state.isHide ? "password" : "text"} className="main__input"/>
                            <img src={this.state.isHide ? closeEye : openEye} alt="" onClick={this.hide} className="main__input_img"/>
                        </div>
                        
                        <div className="main__status">
                            <div className="main__display">
                                <div ref='statusBar' className="main__display_status"></div>
                            </div>
                            <p ref='statusText' className="main__status_text"></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
