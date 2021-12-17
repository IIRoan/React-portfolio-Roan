import React from 'react';
import styleserror from './Error.module.scss'

export default function Error() {
    return (
        <div className={styleserror.headersection}>
        <h2 className={styleserror.text}>404 Page not found</h2>
        <a href="../" className={styleserror.btn} >Home</a>
        </div>
      );
    };
