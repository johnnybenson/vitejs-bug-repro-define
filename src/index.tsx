import React from 'react';
import ReactDOM from 'react-dom';
import { Config } from "config";

ReactDOM.render(
    <React.StrictMode>
        <div>
            Okay Cool
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

if (__DEV__) {
    console.info(
        '[Config]',
        JSON.stringify(
            {
                __APP_ENV__,
                __APP_VERSION__,
                __DEV__,
                __PROD__,
                __TEST__,
                ...Config,
            },
            undefined,
            2
        )
    );
}
