import React from 'react';

export default function Button({text, url, className, children}) {
    return (
        <>
        <button>
           <a to={url} className={ className}>{children} {text}</a>
        </button>
        </>
    );
}