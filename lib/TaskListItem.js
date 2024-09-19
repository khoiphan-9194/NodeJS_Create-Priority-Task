const Component = require('./Component');

const {formatDate} = require('./date');


class TaskListItem extends Component
{
//constructor will have 2 parameters, children and priority.
//children is an array of the TaskListItem component.
//priority is a boolean value, which will be used to determine whether the task is a priority task or not
 constructor(children,priority=false) // default value for priority is false.
 {
    super(children); // this will call the constructor of the parent class, which is the Component class.
  
    this.priority = priority;
 }



render()
{
  if(this.priority) // if the priority is true, then we will add the class name tasks-item-priority.
  {
    return `<li class="tasks-item tasks-item-priority">${this.renderInnerHTML()}</li>`;
  }
  else
  {
    //else we will return the normal class name tasks-item.
    return `<li class="tasks-item">${this.renderInnerHTML()}</li>`;
  }
 
  //return `<li class="tasks-item ${this.priority ? 'tasks-item-priority' : ''}">${this.renderInnerHTML()}</li>`;
}


}


const taskListItem = new TaskListItem(['Let go to the gym']);
const taskListItem2 = new TaskListItem(['I have to sleep first'],true);

console.log(taskListItem.render());
console.log(taskListItem2.render());

const obj = {render: () => 'I have to sleep first'};
//{render: () => 'I have to sleep first'} is an object that has a render() method that returns a string.
//The object is passed as a child of the TaskListItem component.

const taskListItem3 = new TaskListItem([obj],true);

console.log(taskListItem3.render());


 // export the TaskListItem class so that we can use it in other files.
 module.exports = TaskListItem;