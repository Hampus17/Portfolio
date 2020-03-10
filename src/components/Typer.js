import React, { Component } from 'react'

class Typer extends Component {

    state = {
        text: '',
        isDeleting: false,
        loopNum: '',
        typingSpeed: 200
    }

    componentDidMount() {
        this.handleType();
    }

    handleType = () => {
        const { dataText } = this.props;
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        let i = loopNum % dataText.length;
        const fullText = dataText[i];

        this.setState({
            text: isDeleting ? fullText.substring(0, text.length - 1) : 
                fullText.substring(0, text.length + 1), 
            typingSpeed: isDeleting ? 30 : 50
        });

        if (!isDeleting && text === fullText) {
            setTimeout(() => this.setState({ isDeleting: true}), 1000);
        } else if (isDeleting && text === '') {
            setTimeout(() => 
                this.setState({
                    isDeleting: false,
                    loopNum: i + 1
                })
            , 300)
        }

        setTimeout(this.handleType, typingSpeed);
    }

    render () {
        return(
            <h1 className="landingHeader desktopTyper">
                { this.state.text }
                <span id="cursor"></span>
            </h1>
            
        );
    }
}

export default Typer;