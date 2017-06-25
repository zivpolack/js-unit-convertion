export const UNITS = {
    distance: {
        meter: 'meter',
        km: 'km',
        cm: 'cm',
        mile: 'mile',
        yard: 'yard',
        feet: 'feet',
        inch: 'inch',
        nauticalMile: 'nauticalMile'
    },
    weight: {
        kg: 'kg',
        lb: 'lb',
        gram: 'gram',
        miligram: 'miligram',
        ton: 'ton'
    },
    volume: {
        liter: 'liter',
        gallon: 'gallon',
        cubicMeter: 'cubicMeter',
        cubicCm: 'cubicCm'
    },
    area: {
        sqrMeter: 'sqrMeter',
        sqrKm: 'sqrKm',
        sqrNauticalMile: 'sqrNauticalMile',
        sqrFeet: 'sqrFeet',
        sqrCm: 'sqrCm'
    },
    temperature: {
        celsius: 'celsius',
        fahrenheit: 'fahrenheit',
        kelvin: 'kelvin'
    },
    speed: {
        meterPerSecond: 'meterPerSecond',
        knot: 'knot',
        mph: 'mph',
        kph: 'kph',
        mach: 'mach'
    },
    frequency: {
        kHz: 'kHz',
        hz: 'Hz',
        mHz: 'mHz',
        gHz: 'gHz'
    },
    pressure: {
        inchesOfMercury: 'inchesOfMercury',
        kgPerSqrCm: 'kgPerSqrCm',
        lbPerSqrInch: 'lbPerSqrInch',
        mmOfMercury: 'mmOfMercury',
        bar: 'bar',
        milibar: 'milibar'
    },
    angle: {
        deg: 'deg',
        rad: 'rad',
        grad: 'grad',
        minute: 'minute',
        second: 'second'
    },
    jetFuelAmount: {
        lb: 'lb',
        gallon: 'gallon',
        liter: 'liter',
        kg: 'kg',
        ton: 'ton'
    },
};


export const UNIT_TABLE = {
    distance: {
        baseUnit: UNITS.distance.meter,
        meter: {
            ratio: 1
        },
        km: {
            ratio: 1000
        },
        cm: {
            ratio: 0.01
        }
    }
};
