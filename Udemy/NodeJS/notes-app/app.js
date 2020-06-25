const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(chalk.green.bold.inverse(`Title: ${argv.title}`))
        console.log(chalk.green.bold.inverse(`\nBody: ${argv.body}`))
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    handler: () =>  {
        console.log(chalk.red.bold.inverse('Removing a new note!'))
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler: () =>  {
        console.log(chalk.yellow.bold.inverse('Listing the notes!'))
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading all the notes',
    handler: () =>  {
        console.log(chalk.yellow.bold.inverse('Reading a note!'))
    }
})

yargs.parse()