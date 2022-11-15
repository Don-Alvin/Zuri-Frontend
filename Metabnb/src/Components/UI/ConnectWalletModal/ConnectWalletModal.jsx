import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { MdArrowForwardIos } from 'react-icons/md'
import { images } from '../../../Constants'
import classes from './ConnectWalletModal.module.css'

const ConnectWalletModal = ({showModal, closeModal}) => {
    if (!showModal) return null;
  return (
    <div className={classes.modal} onClick={closeModal}>
        <div className={classes.modal_card} onClick={(e) => {
            e.stopPropagation()
        }}>
            <header className={classes.modal__header}>
                <h2>Connect Wallet</h2>
                <div className={classes.cancel}  onClick={closeModal}>
                    <FaTimes />
                </div>
            </header>
            <div className={classes.modal__content}>
                <h3>Choose your preferred wallet:</h3>
                <div className={classes.wallet__btns}>
                    <a href="" className={classes.btn__wallet}>
                        <div className={classes.btn__content}>
                          <img src={images.metamaskmodal} alt="" />
                          <span>Metamask</span>
                        </div>
                        <div className={classes.goto}>
                            <MdArrowForwardIos />
                        </div>
                    </a>
                    <a href="" className={classes.btn__wallet}>
                        <div className={classes.btn__content}>
                          <img src={images.walletconnect} alt="wallet connect" />
                          <span>WalletConnect</span>
                        </div>
                        <div className={classes.goto}>
                            <MdArrowForwardIos />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConnectWalletModal