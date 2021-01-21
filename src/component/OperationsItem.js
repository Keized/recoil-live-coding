import { useSetRecoilState } from 'recoil';
import { selectedOperationState } from '../recoil/atoms';
import ListItem from '../UI/ListItem'

export default function OperationItem ({id, amount, label, credit = false}) {
    const setSelected = useSetRecoilState(selectedOperationState);

    return <ListItem onClick={() => setSelected(id)}>
        <div>
            {label}
        </div>
        <div className={credit ? 'text-success' : 'text-danger'}>
            {credit ? amount : `-${amount}`}
        </div>
    </ListItem>
}