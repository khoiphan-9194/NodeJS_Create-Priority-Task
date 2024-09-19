
const TaskListItem = require('../lib/TaskListItem.js');




describe('TaskListItem', () => {

    describe('This will check a task with no priority', () => {
      test('TasklistItem take a parameter which is a string, and second parameter which is priority is false by default', () => {

        const text1 ='Let go to the gym';
        const taskListItem = new TaskListItem([text1],);

        console.log();
      
        expect(taskListItem.render()).toEqual(`<li class="tasks-item">Let go to the gym</li>`);

      });
    });




    describe('This will check a task with priority', () => {
      test('TasklistItem take a parameter which is a string, and second parameter which is priority is true', () => {

        const text2 ='I have to sleep first';
        const taskListItem = new TaskListItem([text2],true);
        console.log();
        expect(taskListItem.render()).toEqual(`<li class="tasks-item tasks-item-priority">I have to sleep first</li>`);

      });
    });

  });
  


