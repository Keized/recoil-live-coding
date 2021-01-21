import React from 'react';

export default React.memo(function Input({name, onChange, value, type = 'text'}) {
    return <div className="mb-3">
        <div className="form-label">{name}</div>
        <input className="form-control" type={type} required value={value} onChange={onChange} />
    </div>
});