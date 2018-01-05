const meow = require('meow');
const fs = require('fs');
const path = require('path');
const util = require('util');
const reactDocs = require('react-docgen');
const toMarkdownTable = require('json-to-markdown-table');

const cli = meow(`
  Usage
    $ foo <input>

  Options
    --rainbow, -r  Include a rainbow

  Examples
    $ foo unicorns --rainbow
    🌈 unicorns 🌈
`, {
  flags: {
    rainbow: {
      type: 'boolean',
      alias: 'r'
    }
  }
});

// console.log(cli.input, cli.flags);

const readFile = util.promisify(fs.readFile);

const PropsColumns = [
  'Name',
  'Type',
  'Required',
  'Default',
  'Description'
];

const filePath = path.resolve(cli.input[0]);

readFile(filePath, 'utf8', handleFile);

const parseDefaultProp = (type, prop) => {
  if (type === 'shape') {
    const toOneLine = prop.replace(/[\r\n]+/g, '');
    return `\`${toOneLine}\``;
  }

  if (type === 'bool' && prop == 'true') {
    return `☑️\`${prop} \``;
  }
  
  return `\`${prop}\``;
}

const parsePropType = prop => {
  if (prop.name === 'enum') {
    const propValues = prop.value.map(prop => prop.value);
    return `\`oneOf(${propValues.toString()})\``;
  }

  return `\`${prop.name}\``;
} 

function handleFile(err, data) {
  if (err) throw err;
  const reactParsed = reactDocs.parse(data);

  const PropsArr = Object.keys(reactParsed.props)
    .map(prop => {
      const propProps = reactParsed.props[prop];
      return {
        Name: prop,
        Type: parsePropType(propProps.type),
        Required: propProps.required ? '❗️' : '',
        Default: propProps.defaultValue ? parseDefaultProp(propProps.type.name, propProps.defaultValue.value) : '',
        Description: propProps.description
      };
    })

  const tableMdString = toMarkdownTable(PropsArr, PropsColumns)

  fs.writeFile('out.md', tableMdString, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}
