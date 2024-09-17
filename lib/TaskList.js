const Component = require('./Component');

const {formatDate} = require('./date');


class TaskList extends Component
{


constructor(children) //constructor will have 1 parameter, children. children is an array of the TaskListItem component.
 {
    super(children); // this will call the constructor of the parent class, which is the Component class.
  
 }


 render()
 {
   return `<ul class="tasks-list">${this.renderInnerHTML()}</ul>`;
 }

}


 // export the TaskListItem class so that we can use it in other files.
 module.exports = TaskList;