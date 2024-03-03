

const reactElement = {
     type:'a',
     props: {
        href:'https://gogle.com',
        target: '_blank'
     },
     children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement , mainacontainer)
