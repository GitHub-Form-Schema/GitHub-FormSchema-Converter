# GitHub-FormSchema-Converter

<p align="center">
<a href="https://github.com/GitHub-Form-Schema/GitHub-FormSchema-Converter/" target="blank"><img src="https://avatars.githubusercontent.com/u/146714994?s=500&v=4" width="200" alt="Enter Your Logo!" /></a>
</p>

<p align="center">
This is a JavaScript module that converts <b>GitHub Form Schema</b> into <b>HTML</b>
</p>

<p align="center">
  <a href="/LICENSE"><img src="https://img.shields.io/github/license/GitHub-Form-Schema/GitHub-FormSchema-Converter" alt="License" /></a>
  <a href="https://github.com/GitHub-Form-Schema/GitHub-FormSchema-Converter/graphs/contributors" target="_blank"><img src="https://img.shields.io/github/contributors-anon/GitHub-Form-Schema/GitHub-FormSchema-Converter" alt="contributors" /></a>
  <a href="https://github/GitHub-Form-Schema/GitHub-FormSchema-Converter"><img src="https://img.shields.io/github/last-commit/GitHub-Form-Schema/GitHub-FormSchema-Converter" alt="your repo's last-commit" /></a>
  <a href="https://github/GitHub-Form-Schema/GitHub-FormSchema-Converter"><img src="https://img.shields.io/github/stars/GitHub-Form-Schema/GitHub-FormSchema-Converter" alt="your repo's stars" /></a>
  <a href="https://github/GitHub-Form-Schema/GitHub-FormSchema-Converter"><img src="https://img.shields.io/github/forks/GitHub-Form-Schema/GitHub-FormSchema-Converter" alt="your repo's forks" /></a>
  <a href="https://github/GitHub-Form-Schema/GitHub-FormSchema-Converter"><img src="https://img.shields.io/github/watchers/GitHub-Form-Schema/GitHub-FormSchema-Converter" alt="your repo's watchers" /></a>
  <a href="https://github/GitHub-Form-Schema/GitHub-FormSchema-Converter"><img src="https://img.shields.io/github/issues/GitHub-Form-Schema/GitHub-FormSchema-Converter" alt="your repo's issues" /></a>
</p>

### How to install

```bash
# install with npm!
npm install github-formschema-converter
# install with yarn!
yarn install github-formschema-converter
```

### How to use

```javascript
import * as formSchema from 'github-formschema-converter';

const yamlString = `
---
name: '📕 Documentation Issue'
description: Report an issue in the Developer Guide
title: '📕 [DOCS] - <title>'
labels: [documentation]
assignees: []

body:
  - type: textarea
    id: description
    attributes:
      label: 'Describe'
      description: A clear and concise description of the issue.
    validations:
      required: true

  - type: input
    id: links
    attributes:
      label: 'Links'
      description: Include links to affected documentation page.
    validations:
      required: true
`;

const result = formSchema.yaml2html(yamlString);
```

### Contributing

We always welcome your contributions. Please see the [CONTRIBUTING.md](./CONTRIBUTING.md) for how to contribute.

### License

**GitHub-FormSchema-Converter** is released under **Apache License 2.0**.<br>
See the [LICENSE file]("./LICENSE") for details.
