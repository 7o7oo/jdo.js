function select(selector) {
    const self = {
        element: document.querySelector(selector),
        html: () => self.element,
        on: (e, f) => {
            self.element.addEventListener(e, f)
        },
        value: (v) => {
            if (v || v === "") {
                if (self.element.nodeName.toLowerCase() === 'input') {
                    const state = v
                    self.element.value = state


                }
                else {
                    const state = v
                    self.element.innerText = state

                }
            }
            else {
                if (self.element.nodeName.toLowerCase() === 'input') {
                    return self.element.value
                }
                else {
                    return self.element.innerText
                }

            }

        },
        attribute: (an, v) => {
            if (v) {
                self.element.setAttribute(an, v)
            }
            else {
                return self.element.getAttribute(an)

            }
        },
        reload: () => {
            window.location.reload(false)
        },
        style: (s, v) => {
            switch(s){
                case 'bgcolor':
                    self.element.style.backgroundColor = v
                    break;
                
                case "fcolor":
                    self.element.style.color = v
                    break;
                
                case 'ffamily':
                    self.element.style.fontFamily = v
                    break;

                case "fsize":
                    self.element.style.fontSize = v
                    break;
                
                default:
                    self.element.style[s] = v
                    break;
            }
           
        }
        ,
        center: () => {
            self.element.style.position = 'absolute'
            self.element.style.left = '50%'
            self.element.style.bottom = "50%"


        },
        place: (l, b) => {
            self.element.style.position = 'absolute'
            self.element.style.left = l
            self.element.style.bottom = b


        }

    }
    return self
}
function create(o) {
    const element = document.createElement(o.type);
    o.className?element.setAttribute("class", o.className):undefined
    o.id?element.setAttribute("id", o.id):undefined
    o.value?element.innerText = o.value:undefined
    o.attributeType?element.setAttribute(o.attributeType,o.attributeName):undefined
    if (o.parent) {
        const parent = document.querySelector(o.parent)
        parent.appendChild(element)

    }
    else {
        document.body.appendChild(element)
    }

    if (o.className||o.attributeType==="class") {
        return `.${element.getAttribute("class")}`
    }
    if (o.id||o.attributeType==="id") {
        return `#${element.getAttribute("id")}`
    }
    else {
        return element.getAttribute(o.attributeType)
    }
}
function render(html ,p){
    if(p){
        document.querySelector(p).innerHTML += html
    }
    else{
        document.body.innerHTML += html
    }
}
function axe(m,l,d){
    if(m.toLowerCase()==="get"){
        var myInit = { method: 'GET'};
        return fetch(l,myInit).then(res => res.json())
    }
    if(m.toLowerCase()==="post"&&d){
        return fetch(l, {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(d)
          })
    }
      if(m.toLowerCase()==="put"&&d){
        return fetch(l, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(d)
          })
    }
    if(m.toLowerCase()==="delete"){
        var myInit = { method: 'DELETE'};
        return fetch(l,myInit).then(res => res.json())
    }
}
const j = {
    select,
    create,
    render,
    axe
}
export default j