import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

export async function askName(playerName) {
    const ans = await inquirer.prompt({
        name: `player_name`,
        type: `input`,
        message: `What's your name?`,
        default() {
            return `Player`;
        },
    });

    playerName = ans.player_name;
    return playerName;
}

export async function question1() {
    let programmingLanguage;
    const ans = await inquirer.prompt({
        name: `programmingLanguage`,
        type: `list`,
        message: `choose a item among this question`,
        choices: [
            `Javascript`,
            `Golang`,
            `Rust`,
            `Java`,
            `C`,
        ]
    });

    programmingLanguage = ans.programmingLanguage;
    return handleAns(programmingLanguage);
}

async function handleAns(programmingLanguage) {
    const spinner = createSpinner(`Checking answer...`).start();
    await sleep();

    if (programmingLanguage == `Javascript`) {
        spinner.success({ text: `Wise Choice! U successfully choose a right programming language ${programmingLanguage}!` });
    } else {
        spinner.error({ text: `Awww... bad taste :( (just kidding 233333)` });
        process.exit(1);
    }
}