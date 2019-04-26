function createElement(nameElement,styleElement = '',contentElement,) {
  //style or textConctent
  const nameOfProp = Object.keys(styleElement)[0];
  //helper variable 
  let nameOfCssProp, value;
  //our new element
  const element = document.createElement(nameElement);
  

  switch (typeof styleElement[nameOfProp]) {
    //{textContent:'Hello world'}
    case 'string':
      value = styleElement[nameOfProp];
      element[nameOfProp] = value;
      break;

    //{ style: { backgroundColor: 'red' } }
    case 'object':
      //nameOfCssProp = 'backgroundColor';
      nameOfCssProp = Object.keys(styleElement[nameOfProp])[0];
      //value = 'red';
      value = styleElement[nameOfProp][nameOfCssProp];
      //element.style.backgroundColor = red
      element[nameOfProp][nameOfCssProp] = value;
      break;

    default:
        break;
  }

//for string contentElement
  if(typeof(contentElement)==='string' && contentElement){
    element.textContent = contentElement;
  }

//for array contentElement
  if(typeof(contentElement)==='object' && contentElement && contentElement.length!==0){
    contentElement.forEach(item => {
      //if elem of array just sting
      if(typeof(item)==='string'){
        let srtelem = document.createElement('span');
        srtelem.textContent=item;
        item = srtelem;
      }
      
      element.appendChild(item);
    });
  }
  return element;
}

const render = (element,command = document.getElementById('app')) => command.appendChild(element);

const React = {
  createElement,
  render,
};

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', {textContent:'textContent'},'Text content'),
  ],
);

React.render(app,document.getElementById('app'));
