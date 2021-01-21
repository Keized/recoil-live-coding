import { useRecoilValue } from 'recoil';
import OperationItem from './OperationsItem';
import { filteredOperations } from '../recoil/selectors';
import ListGroup from '../UI/ListGroup';
import Card from '../UI/Card';
import OperationsTotal from './OperationsTotal';
import OperationFilter from './OperationFilter';

export default function OperationsList () {
    const operations = useRecoilValue(filteredOperations)

    return <div className="col">
        <Card title="Operations">
            <OperationFilter />
            <ListGroup>
                {operations.map((op) => <OperationItem key={op.id} {...op} />)}
                <OperationsTotal />
            </ListGroup>
        </Card>
    </div>

}