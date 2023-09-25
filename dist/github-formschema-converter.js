const yaml = require('js-yaml');

const yaml2html = (yamlStr) => {
    const loadedYamls = yaml.load(yamlStr);
    
    res = []
    loadedYamls.forEach(loadedYaml => {
        if (loadedYaml.type === "textarea") {
            res.push(textarea2HTML(loadedYaml.attributes))
        }
    });

    return res
}

const textarea2HTML = (attributes) => {
    let {label, description, placeholder, value, render} = attributes;
    return `
<h3>${label}</h3> 
<p>${description}</p>
<p><textarea cols="50" rows="10" placeholder='${placeholder}'>${value}</textarea></p>
`
}

exports.yaml2html = yaml2html;