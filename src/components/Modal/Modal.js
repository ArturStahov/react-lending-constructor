import React, { Component } from 'react';
import { Modal, ContentBlock, ButtonClose } from './StyledComponent';

import { MdClear } from "react-icons/md";
export default class ModalWindows extends Component {



    componentDidMount() {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', this.handlerEscape);
    }

    componentWillUnmount() {
        document.body.style.overflow = 'visible';
        window.removeEventListener('keydown', this.handlerEscape);
    }
    handlerEscape = e => {
        if (e.code === 'Escape') {
            this.props.onCloseModal();
        }
    };



    render() {
        return (
            <Modal>

                <ContentBlock>
                    <ButtonClose
                        type="button"
                        onClick={() => { this.props.onCloseModal() }}>
                        <MdClear />
                    </ButtonClose>

                    {this.props.children}
                </ContentBlock>
            </Modal>
        );
    }
}