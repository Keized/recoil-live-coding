const {atom} = require('recoil');

export const operations = atom({
    key: 'operations-state',
    default: [
        {
            id: 1,
            label: 'Salaire',
            amount: 300.5,
            credit: true
        },
        {
            id: 2,
            label: 'Leclerc',
            amount: 30.4,
            credit: false
        }
    ]
});

export const filters = atom({
    key: 'operations-filters-state',
    default: {}
});
