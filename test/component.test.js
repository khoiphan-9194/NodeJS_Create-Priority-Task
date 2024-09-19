
const Component = require('../lib/Component.js');


describe('Component', () => {

    // describe('invalid', () => {
    //   it('should return false for empty password', () => {
    //     const str = '';
  
    //     const result = new Validate().isPassword(str);
  
    //     expect(result).toEqual(false);
    //   });
    // });


    describe('Test whether or not render() throws an error', () => {
      it('should throw an error', () => {
        const component = new Component();
  
        expect(() => component.render()).toThrowError('Child class must implement render() method');
      });
    });


  });
  