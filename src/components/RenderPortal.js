import ReactDOM from 'react-dom';
import { Component } from 'react'





export default class RenderPortal extends Component {
    render() {
        const elemRoot = document.querySelector(this.props.domID)
        return ReactDOM.createPortal(
            this.props.children,
            elemRoot
        );
    }
}