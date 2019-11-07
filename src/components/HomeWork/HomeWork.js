import React, {Component} from 'react'

import {getCardDetails} from './api'

class QuestionTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            imgSrc: null,
            body: '',
            loading: true,
        };
    }

    componentDidMount() {
        getCardDetails().then(res => {
            console.log(res);
            this.setState({
                title: res.title,
                imgSrc: res.imgSrc,
                body: res.body,
                loading: false,
            })
        })
    }

    render() {
        const {title, imgSrc, body} = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <h2>{imgSrc}</h2>
                <h3>{body}</h3>
            </div>
        )
    }
}

export default QuestionTwo;
