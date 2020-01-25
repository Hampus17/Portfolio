import React, { Component } from 'react'

class Typer extends Component {

    state = {
        text: '',
        isDeleting: false,
        loopNum: '',
        typingSpeed: 100
    }

    componentDidMount() {
        this.handleType();
    }

    handleType = () => {
        const { dataText } = this.props;
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        const i = loopNum % dataText.length;
        const fullText = dataText[i];

        this.setState({
            text: isDeleting ? fullText.substring(0, text.length - 1) : 
                fullText.substring(0, text.length + 1), 
            typingSpeed: isDeleting ? 30 : 100
        });

        if (!isDeleting && text === fullText) {
            setTimeout(() => this.setState({ isDeleting: true}), 700);
        } else if (isDeleting && text === '') {
            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1
            });
        }

        setTimeout(this.handleType, typingSpeed);
    }

    render () {
        return(
            <h1 id="landingHeader">
                { this.state.text }
                <span id="cursor"></span>
            </h1>
            
        );
    }
}

export default Typer;