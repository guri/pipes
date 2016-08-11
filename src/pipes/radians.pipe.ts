/**
 * Created by guri on 11/08/16.
 */

import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name:'radians'
})

export class Radians implements PipeTransform {

    isNumber(value:any):boolean {
        return typeof value === 'number';
    }

    transform(degrees: any, decimal = 2:any) : any {

        // if decimal is not an integer greater than -1, we cannot do. quit with error "NaN"
        // if degrees is not a real number, we cannot do also. quit with error "NaN"
        if(this.isNumber(decimal) && isFinite(decimal) && decimal%1===0 && decimal >= 0 &&
            this.isNumber(degrees) && isFinite(degrees)) {
            var radians = (degrees * Math.PI) / 180;
            return Math.round(radians * Math.pow(10,decimal)) / (Math.pow(10,decimal));
        }
        return "NaN";

    }
}