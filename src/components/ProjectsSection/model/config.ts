import { ReactNode } from "react"

export interface Project {
    title: string
    tags: string[]
    image: string
    description?: ReactNode | string
    href?: string
}

export const projects: Project[] = [
    {
        image: '/projects/chess-puzzles.png',
        tags: [
            'React',
            'Redux',
            'Typescript',
            'Nest.js',
            'DnD'
        ],
        description: "I built this project with React and Nest.js, learning new things along the way. It was challenging, especially since it was my first time using Nest. The trickiest part was creating a chessboard and making drag-and-drop smooth for users. I also tried to optimize the project as much as possible with async components. Overall, it was good practice.",
        title: 'Chess Puzzles',
        href: 'https://tubular-kangaroo-cedb4e.netlify.app/'
    },
    {
        image: '/projects/cloudstorage.png',
        tags: [
            'JWT',
            'Nest.js',
            'Typescript',
            'Next.js'
        ],
        description: 'This app aimed to add JWT authorization with Next.js and Nest.js. The trickiest part was creating a selection box, without using any external libraries.',
        title: 'SUPERCLOUD',
        href: 'https://cloudstorage-frontend-eosin.vercel.app/'
    },
    {
        image: '/projects/metamorphix.png',
        tags: [
            'Next.js',
            'Typescript',
        ],
        description: "I worked on a freelance project – a website for a Discord server. I chose Next.js since there wasn't a need for a complicated backend. Looking back, I see I made some less-than-perfect decisions, but it was a learning experience. I've taken those lessons to heart and now avoid those mistakes in my current work.",
        title: 'METAMORPHIX',
        href: 'https://www.metamorphix.me/'
    }
]