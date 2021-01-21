import React from 'react';

export default React.memo(function Card({title, children}) {
    return <div className="card">
        <div className="card-header">
            {title}
        </div>
        {children}
    </div>
});