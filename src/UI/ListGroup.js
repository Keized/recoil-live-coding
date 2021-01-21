import React from 'react';

export default React.memo(function ListGroup({children}) {
    return <div className="list-group list-group-flush">
        {children}
    </div>
});