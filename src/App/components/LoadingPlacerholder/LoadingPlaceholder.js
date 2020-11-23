import React from 'react';
import './LoadingPlaceholder.scss';

const LoadingPlaceholder = ({ loadingStatus }) => {
    
    const Loader = () => {
        if (loadingStatus === 'loading') {
            return (
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        }
        return false
    }

    return (
        <Loader />
    )
}

export default LoadingPlaceholder;