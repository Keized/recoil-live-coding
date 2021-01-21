import { useRecoilState } from 'recoil';
import { filterState } from '../recoil/atoms';

export default function OperationFilter() {
    const [filter, setFilter] = useRecoilState(filterState);

    return <div>
        <input className="form-control" placeholder="Filter" type="text" value={filter} onChange={(e) => { setFilter(e.target.value) }} />
    </div>
}