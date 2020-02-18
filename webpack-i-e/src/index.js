import _ from 'lodash'
import './styles.css'
import image from './images/accessory-buttons-console-control-275033.jpg'
import data from './data.xml';
import dataJson from './data.json'
// import printMe from './print'

function component() {
    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'Engeneer'])
    // element.click = printMe.bind(null, 'Hello Webpack!')

    return element;
}

// function component() {
//     return import('lodash')
//         .then(({ default: _ }) => {
//             const element = document.createElement('div');

//             element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//             element.classList.add('color');

//             return element;
//         })
//         .catch(err => 'An error occurred while loading the component')
// }

function componentImage() {
    const imageBox = document.createElement('img');
    imageBox.setAttribute('src', image)
    
    return imageBox;
}

function Imprimir() {
    console.log(data);
    console.log(dataJson);
}


document.body.appendChild(component());
// document.body.appendChild(componentImage())

// Imprimir()
// printMe()

// component().then(component => (
//     document.body.appendChild(component)
// ))