import React from 'react';

const Hider = ({ children, visible }) => {
    if (!visible) {
        return null;
    }

    return children;
}

export default Hider;;