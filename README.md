````javascript

const { atom, useRecoilValue } = require('recoil');

const authenticationState = atom({
    key: 'authentication-state',
    value: {
        email: 'recoil@react.js',
        isAuthentified: true,
        role: 'admin'
    }
});

function App () {
    const { email } = useRecoilValue(authenticationState);

    return <div>
        Hello { email }
    </div>
}
````


````javascript

const { atom, selector, useRecoilValue } = require('recoil');

const filterState = atom({ key: 'filter-state', default: ''});

const listState = atom({ key: 'list-state', default: []});

const filteredListSelector = selector({
    key: 'filtered-list-selector',
    get: ({ get }) => {
        const list = get(listState);
        const filter = get(filterState);
        return list.filter((item) => item.startsWith(filter));
    }
});

function App () {
    const list = useRecoilValue(filteredListSelector);
    const [filter, setFilter] = useRecoilState(filterState);

    return <div>
        <input 
            value={filter} 
            onChange={(e) => { setFilter(e.target.value) }} 
        />
        { list.map((item) => <div>{item}</div>) }
    </div>
}
````


````javascript


const userDetails = selectorFamily({
    key: 'user-details',
    get: (userId) => ({ get }) => {
        const list = get(userListState);
        return list[userId];
    },
    set: (userId) => ({ get, set }, newValue) => {
        const list = get(userListState);
        set(userListState, {...list, [userId]: newValue});
    }
});

function UserComponent ({ id }) {
    const [user, setUser] = useRecoilState(userDetails(id));

    return <div>
        { user.name }
    </div>
}
````


````javascript

function component() {
    const list = useRecoilValue(operationsState);
    const [inc,setInc]  = useState(1)

    const onClick = useRecoilCallback(({snapshot}) => async () => {
        const snapshotList = await snapshot.getLoadable(operationsState);
        console.table(snapshotList.contents);
        console.table(list);
    }, [inc])
    
    etc...
}

````



````javascript

export const preferencesState = atom({
    key: 'preferences-state',
    default: null,
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(JSON.parse(localStorage.getItem('preferences')));
            onSet(newValue => { 
                localStorage.setItem('preferences', JSON.stringify(newValue))
            });
        }
    ]
})

function Preferences () {
    const [pref, setPref] = useRecoilState(preferencesState);
    
    return <input 
        type="text" 
        value={pref || ''} 
        onChange={(e) => setPref(e.target.value)}
    />
}

````