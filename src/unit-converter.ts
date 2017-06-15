/**
 * Created by Ziv on 15/06/2017.
 */
import {UnitTable} from './unit-table';

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
            this.handleBadBaseUnit();
        if (this.isValidUnit(targetUnit)){
            this.targetUnit = targetUnit;
            return this.calculateConvertion();
        } else this.handleInvalidUnit(targetUnit);
    }

    private calculateConvertion(){
        var currentUnit = UnitTable[this.currentUnit];
        var targetUnit = UnitTable[this.targetUnit];
        if (this.checkUnitCompatibility(currentUnit,targetUnit)){
            return this.value * (currentUnit.multiplier / targetUnit.multiplier);
        } else this.handleIncompatibleUnits(currentUnit, targetUnit);
    }

    private checkUnitCompatibility(currentUnit : any, targetUnit: any){
        return (currentUnit.baseUnit === targetUnit.baseUnit);
    }

    private isValidUnit(unit : string){
        return (!!UnitTable[unit]);
    }

    private handleBadBaseUnit(){
        throw new Error (`Base unit should be specified before target unit`);
    }

    private handleInvalidUnit(unit : string){
        throw new Error (`Unit type ${unit} is not valid.`)
    }

    private handleIncompatibleUnits(currentUnit: any, targetUnit: any){
        throw new Error (`Unit ${this.currentUnit} (baseUnit:${currentUnit.baseUnit}) 
        is incompatible with unit ${targetUnit} (baseUnit:${targetUnit.baseUnit})`)
    }
}
