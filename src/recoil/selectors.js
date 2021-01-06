import { selector, selectorFamily } from 'recoil';
import { operations as operationsState, filters as filtersState } from './atoms';
import { v4 } from 'uuid';

export const filteredOperations = selector({
    key: 'filtered-operations-state',
    get: ({ get }) => {
        const filters = get(filtersState);
        const operations = get(operationsState);
        return operations.filter((op) => {
            if (filters.hasOwnProperty('credit')) {
                return op.credit === filters.credit;
            }
            return true;
        });
    }
});

export const filteredOperationsTotal = selector({
    key: 'filtered-operations-total-state',
    get: ({ get }) => {
        const operations = get(filteredOperations);
        return operations.reduce((acc, op) => {
            return op.credit ? acc + op.amount : acc - op.amount;
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
        if (param) {
            // todo edit
        } else {
            const operations = get(operationsState);
            set(operationsState, [...operations, {...newValue, id: v4()}])
        }
    }
})