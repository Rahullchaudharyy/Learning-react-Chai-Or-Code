
function CoustemRender(create_elem,mainCountainer){
 const element = document.createElement(create_elem.type)
 element.innerHTML= create_elem.children;
 element.setAttribute('href',create_elem.props.href)
 element.setAttribute('target',create_elem.props.target)

 mainCountainer.appendChild(element)
}
const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.co.uk/',
        target:'_blank'
    },
    children:"Click me here"

}
const mainCountainer = document.getElementById('root')


CoustemRender(reactElement,mainCountainer)