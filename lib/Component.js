
 class Component{

  constructor(children=[]) // default value for children is an empty array, 
  // so that we can call the constructor without passing any children.
  // This is useful when we have a component that doesn't have any children. 
  //so we can call the constructor without passing any parameter.
  
  {
    this.children = children;
  }


    render()
    {
       throw new Error('Child class must implement render() method'); // this method will be implemented by the child class.
  
    }




    renderInnerHTML() // this method will be used to render the children of the component.
    //the way this method works is that it will loop through the children array 
    //and call the render() method of each child.
    {

  
      return this.children.map(child => {
        if(typeof child ==='string') // if the child is a string, then we will return the string as it is.
        {
          return child; // return the string as it is.
        }
        else // if the child is an object, then we will call the render() method of the child.
        {
          return child.render(); // we call the render() method of the child if the child is an object.
          //render() method of the child will return the HTML for the child component. 
          //render() method of the child will be implemented by the child class.
        }
      }).join(''); // we join the array of strings that we get from the map() method to get a single string.
    }
    
 }



 module.exports = Component; // export the Component class so that we can use it in other files.