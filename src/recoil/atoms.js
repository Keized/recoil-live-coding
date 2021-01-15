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

export const filters = atom({
    key: 'operations-filters-state',
    default: {}
});

export const selectedOperationState = atom({
    key: 'selected-operation-state',
    default: null
});

export const operationDetailsState = atomFamily({
    key: 'operation-details-state',
    default: ''
})