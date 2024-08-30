<script lang="ts">
	import { setContext } from "svelte";

    const prefix = "user@portfolio:~$"
    let history = $state("Welcome to my Portfolio!\nUse `help` for a list of commands!\n")
    let input = $state("")

    export async function load() {
        return {
            props: {
                title: 'Terminal',
                id: 1
            }
        };
    }

    type Command = {
        description: string
        run: () => void
    }

    const commands: Record<string, Command> = 
    {
        help: {
            description: "List of commands",
            run: () => {
                history += "Available commands:\n"
                for (const [name, command] of Object.entries(commands)) {
                    history += `${name} - ${command.description}\n`
                }
            }
        },
        "cd projects": {
            description: "Go to the projects folder",
            run: () => {
                window.location.href = "/projects"
            }
        },
        ls: {
            description: "List files in the current directory",
            run: () => {
                history += "projects/\n"
            }
        },
        github: {
            description: "Open my GitHub profile",
            run: () => {
                window.open("https://github.com/jxqu3")
            }
        },
        spotify: {
            description: "Open my Spotify profile",
            run: () => {
                window.open("https://open.spotify.com/artist/2pdUGHioFEsL9VTCCaYt03")
            }
        },
        youtube: {
            description: "Open my YouTube channel",
            run: () => {
                window.open("https://www.youtube.com/@JXQU3")
            }
        },
        clear: {
            description: "Clear the terminal",
            run: () => {
                history = ""
            }
        },
        exit: {
            description: "Exit the terminal",
            run: () => {
                window.location.href = "/";
            }
        }
    }

    function runCommand(command: string) {
        if (command in commands) {
            commands[command].run()
        } else if (command === "") {
            history += "\n"
        }
        else {
            history += "Invalid command: " + command + "\n"
        }
    }

</script>

<div class="terminal bg-black text-white font-mono p-3">
    <span class="history">{history}</span>
    <div class="input-container flex">
        <span>
            user<span class="text-red-600">@</span>portfolio:~<span class="text-lime-400">$</span>
        </span>
        <div class="input">
            <input style="width: {input.length+1}ch;" autocorrect="off" autocapitalize="off" spellcheck="false" class="bg-transparent outline-none span-input" bind:value={input} tabindex="0" onkeydown={e => {
                if (e.key === "Enter") {
                    history += `${prefix} ${input}\n`
                    runCommand(input)
                    input = ""
                }
            }}>
            <span class="cursor"></span>   
        </div>
    </div>

</div>

<style>
    .input {
        position: relative;
        width: 100%;
        height: 1.5rem;
        display: inline-block;
    }

    .terminal {
        width: 100%;
        height: 100%;
    }

    * {
        font-family: 'JetBrains Mono', monospace;
    }

    .history {
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow-wrap: break-word;
        position: relative;
        white-space: pre;
    }

    .span-input {
        color: white;
        background-color: transparent;
        display: inline-block;
        border: none;
        caret-color: transparent;
        text-decoration: none;
        outline: none;
        padding-left: 1ch;
    }

    input:focus + .cursor {
        display: inline-block;
        width: 1ch;  /* Adjust width to match the character size */
        height: 1em; /* Matches the height of a line of text */
        background-color: white; /* Cursor color */
        animation: blink 1s steps(1) infinite;
        margin-left: -0.5ch;
        margin-bottom: -0.1rem;
    }

    @keyframes blink {
        50% {
            background-color: transparent;
        }
    }

</style>