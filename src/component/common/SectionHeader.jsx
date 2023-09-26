import React from 'react';

export default function SectionHeader({ children, title, meta, titleClass, metaClass }) {

    return (
        <>
            <div className="heading">
                {
                    meta ? (<h4 className={'sec__meta '+metaClass}>{meta}</h4>) : ' '
                }
                {

                  title ? (<h2 className={'sec__title '+titleClass}>{title}</h2>) : ' '

                }
            </div>
            {children}
        </>
    )
}