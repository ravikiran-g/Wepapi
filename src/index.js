import React from 'react';
import ReactDOM from 'react-dom';

const title = (
    'h1',
    { id: 'title', className: 'header' },
    'Hello World!!!!!!'
)


ReactDOM.render(
    title,
    document.getElementById('root')
)