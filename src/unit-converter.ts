/**
 * Created by Ziv on 15/06/2017.
 */
import {UnitTable} from './unit-table';

export class unitConvertor {

    private value: number;
    private currentUnit: string;
    private targetUnit: string;

    constructor(value: number){
        this.value = value;
    }

    public in(currentUnit : string){
        if (this.isValidUnit(currentUnit)){
            this.currentUnit = currentUnit
            return this
        } else this.handleBadUnit(currentUnit);
    }


    private isValidUnit(unit : string){
        return (!!UnitTable[unit]);
    }

    private handleBadUnit(unit : string){
        throw new Error (`Unit type ${unit} is not valid.`)
    }











}
