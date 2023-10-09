const yaml = require('js-yaml');



const textarea2HTML = (attributes) => {
    let {label, description, placeholder, value, render} = attributes;
    return `
<h3>${label}</h3> 
<p>${description}</p>
<p><textarea cols="50" rows="10" placeholder='${placeholder}' style="background-color:#f6f8fa">${value}</textarea></p>
`
}


const dropdown2HTML = (attributes) => {
    // console.log(attributes)
    const {label, description,options}= attributes;
    return `
    <h3>${label}</h3>
    <p>${description}</p>
    <select required>
    ${getList(options)}    
    </select>
    `
}

const checkboxes2HTML = (attributes) => {
    // console.log(attributes)
    const {label, description, options} = attributes;
    
    return`
    <h3>${label}</h3>
    <p>${description}</p>
    <input type="checkbox" id="chkbox-id">
    <label for="chkbox-id">
    ${options?.map(option => {
        return `${option.label}`
    }) }
    </lable>
    `
}

const input2HMTL = (attributes) => {
    const{label, description, placeholder, value} = attributes;
    return `
    <label>${label}</label>
    <p>${description}</p>
    <input type="text" placeholder = '${placeholder}' value = '${value}'/>
    `
}






const getList = (options) => {
    let optionCommand="";
    
    for(let i = 0; i < options.length; i++){
        optionCommand+=`<option>${options[i]}</options>`;
    }

    return optionCommand;
}



const yaml2html = (yamlStr) => {
    const loadedYamls = yaml.load(yamlStr);
    
    res = []
    loadedYamls.forEach(loadedYaml => {
        if (loadedYaml.type === "textarea") {
            res.push(textarea2HTML(loadedYaml.attributes))
        }
        else if(loadedYaml.type ==="dropdown"){
            res.push(dropdown2HTML(loadedYaml.attributes))
        }
        else if(loadedYaml.type =="checkboxes"){
            res.push(checkboxes2HTML(loadedYaml.attributes))
        }
        else if(loadedYaml.type == "input"){
            res.push(input2HMTL(loadedYaml.attributes))
        }
    });

    return res
}



exports.yaml2html = yaml2html;