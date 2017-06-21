

export const UNITS = {
    meter: 'meter',
    km: 'km',
    cm: 'cm',
    mile: 'mile',
    yard: 'yard',
    feet: 'feet',
    inch: 'inch',
    nauticalMile: 'nauticalMile'
};


export const UNIT_TABLE = {
    distance: {
        meter: {
            baseUnit: UNITS.meter,
            ratio: 1
        },
        km: {
            baseUnit: UNITS.meter,
            ratio: 1000
        },
        cm : {
            baseUnit: UNITS.meter,
            ratio: 0.01
        }
    }};
