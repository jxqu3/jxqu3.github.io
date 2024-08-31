type Project = {
    name: string
    description: string
    github: string
    image?: string
    website?: string
}

export const projects: Project[] = [
    {
        name: "AIUI",
        description: "A zero-install web ui for generative AIs.",
        image: "aiui.svg",
        github: "https://github.com/JXQU3/aiui",
        website: "https://aiui-delta.vercel.app"
    },
    {
        name: "CodeeBox",
        description: "A powerful online code sandbox with live code execution and shareable files.",
        image: "codeebox.svg",
        github: "https://github.com/JXQU3/codeebox",
        website: "https://codeebox.vercel.app"
    },
    {
        name: "Glicker",
        description: "A extreme autoclicker for Windows, up to 1000 clicks per second.",
        image: "AutoClicker.png",
        github: "https://github.com/JXQU3/glicker",
    },
    {
        name: "Espejismo",
        description: "A website for Alfonso XI's newspaper.",
        image: "espejismo.svg",
        github: "https://github.com/JXQU3/espejismo",
        website: "https://espejismo.vercel.app"
    },
    {
        name: "NOISEBREAK",
        description: "VST audio plugin to generate broken noise.",
        image: "noisebreak.png",
        github: "https://github.com/JXQU3/noisebreak",
    },
    {
        name: "mathlore",
        description: "A math function visualizer using circles.",
        image: "mathlore.png",
        github: "https://github.com/JXQU3/mathlore",
    },
    {
        name: "gameoflife",
        description: "A game of life implementation in Go. Includes world editor, and more.",
        image: "gameoflife.gif",
        github: "https://github.com/JXQU3/gameoflife",
    },
    {
        name: "JXQU3",
        description: "A music artist, me. I make music.",
        image: "logo-nobg.svg",
        github: "https://github.com/JXQU3",
        website: "https://www.youtube.com/@JXQU3"
    },
]