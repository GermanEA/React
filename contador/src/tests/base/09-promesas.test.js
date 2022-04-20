import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas promesas', () => {
    test('debe de retornar un héroe async', ( done ) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe( heroes[0] );
                done();
            });
    });

    test('debe de retornar un error si el héroe no existe async', ( done ) => {

        const id = 10;
        getHeroeByIdAsync( id )
            .catch( err => {
                expect( err ).toBe( 'No se pudo encontrar el héroe' );
                done();
            });
    });
})