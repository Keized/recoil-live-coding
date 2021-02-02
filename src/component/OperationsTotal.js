import ListItem from '../UI/ListItem';
import { atom, useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { filteredOperationsTotal } from '../recoil/selectors';
import {useState} from 'react';
import { operationsState } from '../recoil/atoms';


export const preferencesState = atom({
    key: 'preferences-state',
    default: null,
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(JSON.parse(localStorage.getItem('preferences')));
            onSet(newValue => { localStorage.setItem('preferences', JSON.stringify(newValue)) });
        }
    ]
})

function Preferences () {
    const [pref, setPref] = useRecoilState(preferencesState);
    return <input type="text" value={pref || ''} onChange={(e) => setPref(e.target.value)}/>
}

export default function OperationsTotal() {
    const total = useRecoilValue(filteredOperationsTotal);

    const list = useRecoilValue(operationsState);
    const [inc,setInc]  = useState(1)

    const onClick = useRecoilCallback(({snapshot}) => async () => {
        const snapshotList = await snapshot.getLoadable(operationsState);
        console.table(snapshotList.contents);
        console.table(list);
    }, [inc])

    return <ListItem>
        <div />
        <div className={total > 0 ? 'text-success': 'text-danger'}>
            {total}
        </div>
        <button onClick={() => onClick('Mon parametre')}>Click me</button>
        <button onClick={() => setInc(s => s++)}>Increment</button>
        <Preferences />



    </ListItem>
}