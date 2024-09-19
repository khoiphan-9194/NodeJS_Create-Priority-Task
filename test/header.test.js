
const Headers = require('../lib/Header.js');
const {formatDate} = require('../lib/date.js');


describe('Header', () => {

    describe('Test to see Header redeners date correctly MMDDYYYY', () => {
      it('should return date as MM-DD-YYYY', () => {

        const Header = new Headers(); 

        console.log();
      
        expect(Header.render()).toEqual(`<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date())}</p></header>`);
  

      });
    });

  });
  

  //  return `${month} ${day}, ${year}`;