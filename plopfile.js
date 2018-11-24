const promptDirectory = require('inquirer-directory')
const cwd = process.cwd()
const projectPath = `${cwd}/src`

const generators = [require('./generators/component.generator')(projectPath)]

module.exports = plop => {
    plop.setPrompt('directory', promptDirectory)
    generators.map(g => plop.setGenerator(g.name, g.generator))
}
