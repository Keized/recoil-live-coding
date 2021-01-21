import { useRecoilValue } from 'recoil';
import { selectedOperationState } from '../recoil/atoms';
import OperationDetailsContent from './OperationDetailsContent';

export default function OperationDetails() {
    const selected = useRecoilValue(selectedOperationState);

    return <div className="col">
        <div className="card">
            <div className="card-header">
                Details {selected && selected}
            </div>
            <div className="px-4 py-3">
                {<OperationDetailsContent selected={selected} />}
            </div>
        </div>
    </div>
}