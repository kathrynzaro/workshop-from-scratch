// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderWorkshop } from '../render-utils.js';

const test = QUnit.test;

test('renderWorkshop', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="workshop"><h2>Bartending 101</h2></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderWorkshop({
        id: 1,
        name: 'Bartending 101',
        participants: [{ name: 'Dee', contact_info: 'dee@paddys.com' }],
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
