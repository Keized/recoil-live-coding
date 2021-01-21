import React from 'react';

export default  React.memo(function Switch({checked, onChange, name}) {
    return <div className="mb-3">
        <div className="form-check form-switch">
            <label className="form-check-label" htmlFor={`${name}-switch`}>{ name }</label>
            <input className="form-check-input" type="checkbox" onChange={onChange} checked={checked} id={`${name}-switch`} />
        </div>
    </div>
});