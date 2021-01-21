import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { operationSelector } from '../recoil/selectors';
import Switch from '../UI/Switch';
import Input from '../UI/Input';
import Card from '../UI/Card';

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
        setEditedOperation((prev) => ({...prev, [name]: value}))
    }

    return <div className="col">
        <Card title="Add Operation">
            <form className="p-3" onSubmit={save} id="add-form">
                <Switch  name="Credit" checked={editedOperation.credit} onChange={(e) => {onChange('credit', e.target.checked)}} />
                <Input name="Label" onChange={(e) => onChange('label', e.target.value)} value={editedOperation.label} />
                <Input name="Amount" type="number" onChange={(e) => onChange('amount', e.target.value)} value={editedOperation.amount} />
            </form>
            <div className="card-footer d-flex justify-content-end">
                <button className="primary btn btn-outline-dark mx-3" onClick={reset} type="button">Reset</button>
                <button className="primary btn btn-outline-primary" type="submit" form="add-form">Save</button>
            </div>
        </Card>
    </div>
}