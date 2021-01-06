import { useRecoilValue } from 'recoil';
import OperationItem from './OperationsItem';
import { filteredOperations, filteredOperationsTotal } from '../recoil/selectors';

export default function OperationsList () {
    const operations = useRecoilValue(filteredOperations)
    const total = useRecoilValue(filteredOperationsTotal);

    return <div className="list-group list-group-flush">
        {operations.map((op) => <OperationItem key={op.id} {...op} />)}

        <div className="list-group-item ">
            total: {total}
        </div>
    </div>
}