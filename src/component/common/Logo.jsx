import React from 'react';

export default function Logo({url, className}) {

    return (
        <>
            <a href="/" className={className}>
                <img src={url} alt="logo" />
            </a>
        </>
    )
}