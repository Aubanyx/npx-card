#!/usr/bin/env node


// ----- CALL PACKAGES - START -----
const chalk = require('chalk');
const boxen = require('boxen');
const gradient = require('gradient-string');
// ----- CALL PACKAGES - END -----


// ----- START -----

const data = {
    name : gradient.cristal("                Auban Labie"),
    username : gradient.cristal("Aubanyx"),
    work : gradient.pastel("Junior Web Developer"),
    npm : chalk.gray("https://www.npmjs.com/") + chalk.red("~aubanyx"),
    github : chalk.gray("https://github.com/") + chalk.green("Aubanyx"),
    linkedin : chalk.gray("https://www.linkedin.com/in/") + chalk.blue("aubanlabie"),
    npx : chalk.red("npx") + chalk.white(" auban"),
    labelWork : chalk.white.bold("       Work : "),
    labelNpm : chalk.white.bold("        Npm : "),
    labelGithub : chalk.white.bold("     GitHub : "),
    labelLinkedin : chalk.white.bold("   LinkedIn : "),
    labelCard : chalk.white.bold("       Card : ")
};

const NEWLINE = "\n";
const EMPTYLINE = "";


console.log(
    chalk.magenta(
        boxen(
            [
                `${data.name} / ${data.username}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGithub} ${data.github}`,
                `${data.labelLinkedin} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "double",
            },
        ),
    ),
);

// ----- END -----