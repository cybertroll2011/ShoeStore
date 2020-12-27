import React from 'react';
import './PopUp.scss';

const PopUp = ({ showPopup, text, handleCloseClick }) => {
    if (showPopup) {
        document.body.style.overflow = 'hidden';
        return (
            <div className="popUp">
                <div className="popUp__inner">
                    <div className="popUp__text">
                        {text}
                    </div>
                    <div>
                        <button
                            className="btn main-btn popUp__close-btn"
                            onClick={handleCloseClick}>
                            Okay
                    </button>
                    </div>
                </div>
            </div>
        )
    } else {
        document.body.style.overflow = 'auto';
        return null
    }
}

export default PopUp;