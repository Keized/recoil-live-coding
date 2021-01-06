export default function OperationItem ({id, amount, label, credit = false}) {

    return <div className={`list-group-item d-flex justify-content-between ${credit ? 'list-group-item-success' : 'list-group-item-danger'}`}>
        <div>
            {label}
        </div>
        <div>
            {credit ? amount : `-${amount}`}
        </div>
    </div>
}