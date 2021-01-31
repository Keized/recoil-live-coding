import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { filteredOperations } from '../recoil/selectors';
import ListGroup from '../UI/ListGroup';
import Card from '../UI/Card';
import OperationsTotal from './OperationsTotal';
import OperationFilter from './OperationFilter';
import { selectedOperationState } from '../recoil/atoms';
import ListItem from '../UI/ListItem';

export default function OperationsList () {
    const { state, contents } = useRecoilValueLoadable(filteredOperations)

    const renderOperations = {
        loading: () => 'Loading',
        hasError: () => 'Error',
        hasValue: () => <>
            {contents.map((op) => <OperationItem key={op.id} {...op} />)}
            <OperationsTotal />
        </>
    }

    return <div className="col">
        <Card title="Operations">
            <OperationFilter />
            <ListGroup>
                {renderOperations[state]()}
            </ListGroup>
        </Card>
    </div>
}

function OperationItem ({id, amount, label, credit = false}) {
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
