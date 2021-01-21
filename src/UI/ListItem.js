import React from 'react';

export default React.memo(function ListItem ({children, onClick = () => {}}) {
    return <div role="button" className={`list-group-item justify-content-between d-flex pointer`} onClick={onClick}>
        {children}
    </div>
});