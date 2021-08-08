import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const modalContainer = document.getElementById('modal');

const StyledModalWrapper = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: azure;
    text-align: center;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.fontPrimaryary};
`;

const StyledConfirmationButton = styled.button`
    width: 50px;
    height: 2em;
    margin: 10px 5px 5px 5px;
    border-radius: 10px;
`;

const Modal = ({ modal, removeItem, closeModal, modalId }) => {
   return ( 
    modal && 
    ReactDOM.createPortal (
            <StyledModalWrapper>
                <div>Are you sure you want remove task {modalId}?</div>
                <div>
                    <StyledConfirmationButton onClick={() => closeModal(modalId)}>No</StyledConfirmationButton>
                    <StyledConfirmationButton onClick={() => removeItem(modalId)}>Yes</StyledConfirmationButton>
                </div>
        </StyledModalWrapper>,
        modalContainer
    ))
}

Modal.propTypes = {
    modal: PropTypes.bool,
    removeItem: PropTypes.func,
    closeModal: PropTypes.func,
    modalId: PropTypes.string,
}

export default Modal;