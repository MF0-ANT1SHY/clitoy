#!/usr/bin/env nodedd

import figlet from "figlet";
import chalkAnimation from "chalk-animation";
import gradient from "gradient-string";
import chalk from "chalk";
import { askName, question1 } from "./question.js";

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        `Welcome to the CliToy :) \n`
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgGreen(`Prensented by Komeijicenrili in 2023`)}
    This is a cli toy demo, to test some interesting packages of nodejs :).
    There is no useful tech or something in this project.
    `);
}

function gentle() {
    console.clear();
    const msg = `Congrats, ${playerName} !`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
        // console.log(chalk.bgGreen(data));
        //        console.log(chalk.green(data));
    });
}
await welcome();
playerName = await askName(playerName);
await question1();
gentle();