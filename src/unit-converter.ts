/**
 * Created by Ziv on 15/06/2017.
 */
import {UNIT_TABLE, UNITS} from './unit-table';

export class unitConverter {

    private value: number;
    private currentUnit: string;
    private targetUnit: string;

    constructor(value: number){
        this.value = value;
    }

    public in(currentUnit : string){
        if (this.isValidUnit(currentUnit)){
            this.currentUnit = currentUnit;
            return this;
        } else this.handleInvalidUnit(currentUnit);
    }

    public to(targetUnit : string){
        if (!this.currentUnit)
            this.handleBadCurrentUnit();
        else if (this.isValidUnit(targetUnit)){
            this.targetUnit = targetUnit;
            return this.calculateConvertion();
        } else this.handleInvalidUnit(targetUnit);
    }

    private calculateConvertion(){
        var currentUnitObject = this.getUnitObject(this.currentUnit);
        var targetUnitObject = this.getUnitObject(this.targetUnit);
        if (this.checkUnitCompatibility(currentUnitObject,targetUnitObject)){
            return this.value * (currentUnitObject.ratio / targetUnitObject.ratio);
        } else this.handleIncompatibleUnits(currentUnitObject, targetUnitObject);
    }

    private getUnitObject(unitString : string){
        for (var category in UNIT_TABLE){
            for (var unit in UNIT_TABLE[category]){
                if (unit === unitString)
                    return UNIT_TABLE[category][unit];
            }
        }
    }

    private checkUnitCompatibility(currentUnit : any, targetUnit: any){
        return (currentUnit.baseUnit === targetUnit.baseUnit);
    }

    private isValidUnit(unit : string){
        return (!!UNITS[unit]);
    }

    private handleBadCurrentUnit(){
        throw new Error (`Current unit should be specified before target unit using to(<currentUnit>)`);
    }

    private handleInvalidUnit(unit : string){
        throw new Error (`Unit type ${unit} is not valid.`)
    }

    private handleIncompatibleUnits(currentUnitObject: any, targetUnitObject: any){
        throw new Error (`Unit ${this.currentUnit} (baseUnit:${currentUnitObject.baseUnit}) 
        is incompatible with unit ${this.targetUnit} (baseUnit:${targetUnitObject.baseUnit})`)
    }
}
