function customRender(reactElemet,container){
    const domElemet = document.createElement
    (reactElemet.type)
    domElemet.innerHTML = reactElement.children
    // domElemet.setAttribute('href',reactElement.props.href)
    // domElemet.setAttribute('target',reactElement.props.target)

    
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElemet.setAttribute(prop, reactElement.props [prop])
    }
    container.appendChild(domElemet)
}
const reactElement={
    type: 'a',
    props: {
        href:'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'  
}

const mainContainer = document.querySelector('#root') 

customRender(reactElement, mainContainer)