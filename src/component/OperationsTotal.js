import ListItem from '../UI/ListItem';
import { useRecoilValue } from 'recoil';
import { filteredOperationsTotal } from '../recoil/selectors';

export default function OperationsTotal() {
    const total = useRecoilValue(filteredOperationsTotal);

    return <ListItem>
        <div />
        <div className={total > 0 ? 'text-success': 'text-danger'}>
            {total}
        </div>
    </ListItem>
}