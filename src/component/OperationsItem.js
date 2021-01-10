import { useSetRecoilState } from 'recoil';
import { selectedOperationState } from '../recoil/atoms';

export default function OperationItem ({id, amount, label, credit = false}) {
    const setSelected = useSetRecoilState(selectedOperationState);

    return <div className={`list-group-item justify-content-between ${credit ? 'list-group-item-success' : 'list-group-item-danger'}`} onClick={() => setSelected(id)}>
        <div>
            {label}
        </div>
        <div>
            {credit ? amount : `-${amount}`}
        </div>
    </div>
}