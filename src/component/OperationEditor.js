import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { operationEditor } from '../recoil/atoms';
import { operationSelector } from '../recoil/selectors';

const defaultOperation = {amount: 0, credit: true, label: ''};

export default function OperationEditor() {
    const [editedOperation, setEditedOperation] = useState(defaultOperation);
    const setOperation = useSetRecoilState(operationSelector());

    const save = (e) => {
        e.preventDefault();
        setOperation(editedOperation);
        setEditedOperation(defaultOperation);
    }

    const reset = () => {
        setEditedOperation(defaultOperation);
    }

    const onChange = (name, value) => {
        if (name === 'credit') {
            value = value === '1';
        }
        if (name === 'amount') {
            value = parseFloat(value);
        }

        setEditedOperation((prev) => ({...prev, [name]: value}))
    }

    return <>
        <form className="p-3" onSubmit={save} id="add-form">
            <div className="mb-3">
                <div className="form-label">Credit</div>
                <select className="form-select" value={editedOperation.credit ? '1': '0'} onChange={(e) => {onChange('credit', e.target.value)}}>
                    <option value="0">False</option>
                    <option value="1">True</option>
                </select>
            </div>
            <div className="mb-3">
                <div className="form-label">Label</div>
                <input className="form-control" required value={editedOperation.label} onChange={(e) => {onChange('label', e.target.value)}} />
            </div>
            <div className="mb-3">
                <div className="form-label">Amount</div>
                <input className="form-control" required type="number" value={editedOperation.amount} onChange={(e) => {onChange('amount', e.target.value)}} />
            </div>
        </form>
        <div className="card-footer d-flex justify-content-between">
            <button className="primary btn btn-light" onClick={reset} type="button">Reset</button>
            <button className="primary btn btn-primary" type="submit" form="add-form">Save</button>
        </div>
    </>
}