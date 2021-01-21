import { atomFamily, atom } from 'recoil';

export const operations = atom({
    key: 'operations-state',
    default: [
        {
            id: 1,
            label: 'Solde',
            amount: 2984.87,
            credit: true
        },
        {
            id: 3,
            label: 'Courses Leclerc',
            amount: 155.9,
            credit: false
        }
    ]
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