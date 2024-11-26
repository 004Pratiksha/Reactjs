import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App </h1>
        </div>
    )
}

// const reactElement={
//     type: 'a',
//     props: {
//         href:'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visitt google'  
// }

const anotherElement = (
    <a href="http://google.com" target='_blank' >visit google</a>
)
const reactElement = React.createElement(
    'a',
    {href: 'http://google',target:'_blank'},
    'click me to visit google',
    anotherElement
)
reactDOM.createRoot(document.getElementById('root')).render(
  
    anotherElement 
  
)