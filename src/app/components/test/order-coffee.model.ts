import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

export type TypeCoffee = {
    name: AbstractControl<string>,
    count: AbstractControl<number>,
}

export interface ICoffee {
    name: AbstractControl<string>,
    count: AbstractControl<number>,
}

export class CoffeeForm extends FormGroup<TypeCoffee> implements ICoffee {
    constructor() {
        super({
            name: new FormControl('', {nonNullable: true}),
            count: new FormControl(1, {nonNullable: true}),
        });
    }

    get name(): FormControl<string> {
        return this.controls.name as FormControl<string>;
    }
    get count(): FormControl<number> {
        return this.controls.count as FormControl<number>;
    }
}
