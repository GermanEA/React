import { retornaArreglo } from "../../base/07-deses-arr";


describe('Pruebas en 07-deses-arr.js', () => { 
    test('debe devolver un string y un numero', () => { 
        // const arr = retornaArreglo();

        // expect( arr ).toEqual( ['ABC', 123]);

        const [ letras, num ] = retornaArreglo();

        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );
        
    });
});