// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Logo({url, className}) {

    return (
        <>
            <a href="#home" className={className}>
                <img src={url} alt="logo" />
            </a>
        </>
    )
}