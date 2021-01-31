import { selector, selectorFamily } from 'recoil';
import { operationsState, filterState, operationsDetailsRequestIdState } from './atoms';
import { v4 } from 'uuid';

export const filteredOperations = selector({
    key: 'filtered-operations',
    get: ({ get }) => {
        const filter = get(filterState);
        const operations = get(operationsState);
        return operations.filter((op) => {
            return op.label.startsWith(filter)
        });
    }
});

export const filteredOperationsTotal = selector({
    key: 'filtered-operations-total',
    get: ({ get }) => {
        const operations = get(filteredOperations);
        return operations.reduce((acc, op) => {
            return op.credit ? acc + parseFloat(op.amount) : acc - parseFloat(op.amount);
        }, 0)
    }
})

export const operationSelector = selectorFamily({
    key: 'operation-selector',
    get: (param) => ({get}) => {
        const operations = get(operationsState);
        return operations.find((op) => {
            return op.id === param
        }) || {};
    },
    set: (param) => ({get, set}, newValue) => {
        const operations = get(operationsState);
        if (param) {
            // todo edit
        } else {
            set(operationsState, [...operations, {...newValue, id: v4()}])
        }
    }
})

