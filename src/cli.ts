#!/usr/bin/env node
import { OpenRouterAI } from "./index";
import readline from "readline";
import dotenv from "dotenv";

dotenv.config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const ai = new OpenRouterAI({ apiKey: process.env.OPENROUTER_API_KEY || "" });

async function main() {
    rl.question("You: ", async (input) => {
        if (input.toLowerCase() === "exit") {
            rl.close();
            return;
        }

        const response = await ai.chat({ messages: [{ role: "user", content: input }] });
        console.log(`AI: ${response}`);
        main();
    });
}

main();
