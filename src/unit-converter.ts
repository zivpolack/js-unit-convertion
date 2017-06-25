/**
 * Created by Ziv on 15/06/2017.
 */
import {UNIT_TABLE, UNITS} from './unit-table';
import {UnitObject} from './unit-object.model';

export class unitConverter {

    private value: number;
    private currentUnit: string;
    private targetUnit: string;

    constructor(value: number) {
        this.value = value;
    }

    public in(currentUnit: string) {
        if (this.isValidUnit(currentUnit)) {
            this.currentUnit = currentUnit;
            return this;
        } else this.handleInvalidUnit(currentUnit);
    }

    public to(targetUnit: string) {
        if (!this.currentUnit)
            this.handleBadCurrentUnit();
        else if (this.isValidUnit(targetUnit)) {
            this.targetUnit = targetUnit;
            return this.calculateConvertion();
        } else this.handleInvalidUnit(targetUnit);
    }

    private calculateConvertion() {
        var currentUnitObject = this.getUnitObject(this.currentUnit);
        var targetUnitObject = this.getUnitObject(this.targetUnit);
        if (this.checkUnitCompatibility(currentUnitObject, targetUnitObject)) {
            //todo complex calculation
            return this.value * (currentUnitObject.unit.ratio / targetUnitObject.unit.ratio);
        } else this.handleIncompatibleUnits(currentUnitObject, targetUnitObject);
    }

    private getUnitObject(unitString: string): UnitObject {
        for (var category in UNIT_TABLE) {
            for (var unit in UNIT_TABLE[category]) {
                if (unit === unitString)
                    return {
                        unit: UNIT_TABLE[category][unit],
                        baseUnit: UNIT_TABLE[category].baseUnit
                    };
            }
        }
    }

    private checkUnitCompatibility(currentUnit: any, targetUnit: any) {
        return (currentUnit.baseUnit === targetUnit.baseUnit);
    }

    private isValidUnit(unitString: string){
        for (var category in UNITS){
            for (var unit in UNITS[category]){
                if (unit === unitString)
                    return true;
            }
        }
        return false;
    }

    private handleBadCurrentUnit() {
        throw new Error(`Current unit should be specified before target unit using to(<currentUnit>)`);
    }

    private handleInvalidUnit(unit: string) {
        throw new Error(`Unit type ${unit} is not supported.`)
    }

    private handleIncompatibleUnits(currentUnitObject: any, targetUnitObject: any) {
        throw new Error(`Unit ${this.currentUnit} (baseUnit:${currentUnitObject.baseUnit}) 
        is incompatible with unit ${this.targetUnit} (baseUnit:${targetUnitObject.baseUnit})`)
    }
}
