const Component = require('./Component');

const {formatDate} = require('./date');



class Header extends Component
{

  constructor() // this is a constructor method that is called on the instance of the Header class
  {
    super(); // this will call the constructor of the parent class, which is the Component class.
    // super() has no arguments because the Component class doesn't have any arguments in its constructor.
  
  }



  render(){
    return `<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date())}</p></header>`;
    // this method will return the HTML for the header component.
  }
}

module.exports = Header; // export the Header class so that we can use it in other files.