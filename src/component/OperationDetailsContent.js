import { useRecoilValueLoadable } from 'recoil';
import { operationDetailsQuery } from '../recoil/selectors';

export default function OperationDetailsContent({selected})
{
    const query = useRecoilValueLoadable(operationDetailsQuery(selected));

    switch (query.state) {
        case 'loading':
            return <>Loading...</>
        case 'hasError':
            return <>Error</>
        case 'hasValue':
            return query.contents
        default:
            return 'Select an operation'
    }
}