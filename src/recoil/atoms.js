import { atomFamily, atom, selector } from 'recoil';

export const operationsQuery = selector({
    key: 'operations-query',
    get: async ({ get }) => {
        // trigger this function when the request id changes
        // get(operationsDetailsRequestIdState(param));

        const response = await fetch('http://localhost:3001/transactions');
        return await response.json();
    }
})

export const operationsState = atom({
    key: 'operations-state',
    // default: [
    //     {
    //         id: 1,
    //         label: 'Solde',
    //         amount: 2984.87,
    //         credit: true
    //     },
    //     {
    //         id: 3,
    //         label: 'Courses Leclerc',
    //         amount: 155.9,
    //         credit: false
    //     }
    // ]
    default: operationsQuery

});

export const filterState = atom({
    key: 'operations-filter-state',
    default: ''
});

export const selectedOperationState = atom({
    key: 'selected-operation-state',
    default: null
});

export const operationsDetailsRequestIdState = atomFamily({
    key: 'operation-details-request-id-state',
    default: 0
})