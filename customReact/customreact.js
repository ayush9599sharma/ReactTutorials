function customRender(reactElement,container){
    //Method 1
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute("href",reactElement.props.href)
    domElement.setAttribute("target",reactElement.props.target)

    // container.appendChild(domElement)

    //Method 2
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // for (const prop in reactElement.props) {
    //     domElement.SetAttribute(prop,reactElement.props[prop])
    // }
    // container.appenChild(domElement)




}

const reactElement = {
    type : 'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },  
    Children :"Click me to visit google"
}
const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer)