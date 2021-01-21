import { useRecoilCallback, useRecoilValueLoadable } from 'recoil';
import { v4 } from 'uuid';
import { operationDetailsQuery } from '../recoil/selectors';
import { operationsDetailsRequestIdState } from '../recoil/atoms';

export default function OperationDetailsContent({selected})
{
    const query = useRecoilValueLoadable(operationDetailsQuery(selected));
    const refresh = useRecoilCallback(({set}) => async () => {
        set(operationsDetailsRequestIdState(selected), v4())
    }, [selected])

    const renderContent = (content) => <>
        {content}
        <div>
            {selected &&
                <button onClick={() => refresh()} className="btn btn-secondary btn-sm mt-3">
                    Refresh
                </button>
            }
        </div>
    </>

    switch (query.state) {
        case 'loading':
            return <>Loading...</>
        case 'hasError':
            return <>Error</>
        case 'hasValue':
            return renderContent(query.contents)
        default:
            return 'Select an operation'
    }
}