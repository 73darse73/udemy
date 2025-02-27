/** TypeScriptの基本の型 */
/* eslint-disable @typescript-eslint/no-unused-vars */

// boolean
const bool: boolean = true;

// number
const num: number = 123;

// string
const str: string = "Hello";

// array
const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// tuple
const tuple: [number, string] = [0, "A"]

// any
const any: any = false;

// void
const funcA = (): void => {
    const test = "TEST"
}

// null
const null1: null = null;

//undefinded
const undefinded1: undefined = undefined;

// object
const obj1: object = {};
const obj2: { id: number, name: string } = { id: 1, name: "test" };
