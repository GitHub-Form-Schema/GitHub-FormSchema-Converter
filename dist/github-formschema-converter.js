const yaml = require('js-yaml');

const textarea2HTML = (attributes) => {
  const { label, description, placeholder, value, render } = attributes;
  return `
<h3>${label ? label : ''}</h3> 
<p>${description ? description : ''}</p>
<p><textarea cols="50" rows="10" placeholder='${
    placeholder ? placeholder : ''
  }' style="background-color:#f6f8fa">${value ? value : ''}</textarea></p>
`;
};

const dropdown2HTML = (attributes) => {
  const { label, description, options } = attributes;
  return `
    <h3>${label ? label : ''}</h3>
    <p>${description ? description : ''}</p>
    <select required>
    ${getList(options)}    
    </select>
    `;
};

const checkboxes2HTML = (attributes) => {
  const { label, description, options } = attributes;

  return `
<h3>${label ? label : ''}</h3>
<p>${description ? description : ''}</p>
<input type="checkbox" id="chkbox-id">
<label for="chkbox-id">
${options?.map((option) => {
  return `${option.label}`;
})}
</lable>
    `;
};

const input2HMTL = (attributes) => {
  const { label, description, placeholder, value } = attributes;
  return `
<label>${label ? label : ''}</label>
<p>${description ? description : ''}</p>
<input type="text" placeholder = '${placeholder ? placeholder : ''}' value = '${
    value ? value : ''
  }'/>
    `;
};

const getList = (options) => {
  let optionCommand = '';

  for (let i = 0; i < options.length; i++) {
    optionCommand += `<option>${options[i]}</options>`;
  }

  return optionCommand;
};

const yaml2html = async (yamlStr) => {
  const loadedYamls = await yaml.load(yamlStr);

  const res = [];
  loadedYamls.body.forEach((loadedYaml) => {
    if (loadedYaml.type === 'textarea') {
      res.push(textarea2HTML(loadedYaml.attributes));
    } else if (loadedYaml.type === 'dropdown') {
      res.push(dropdown2HTML(loadedYaml.attributes));
    } else if (loadedYaml.type == 'checkboxes') {
      res.push(checkboxes2HTML(loadedYaml.attributes));
    } else if (loadedYaml.type == 'input') {
      res.push(input2HMTL(loadedYaml.attributes));
    }
  });

  const result = res.join('');

  return result;
};

exports.yaml2html = yaml2html;
