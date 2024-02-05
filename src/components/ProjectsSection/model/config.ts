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
        description: 'Cupidatat enim nostrud quis duis eu proident dolor est commodo eu cillum commodo exercitation. Veniam ut qui pariatur commodo cillum qui cillum elit.',
        title: 'Chess Puzzles',
        href: 'https://tubular-kangaroo-cedb4e.netlify.app/'
    },
    {
        image: '/projects/chess-puzzles.png',
        tags: [
            'React',
            'Redux',
            'Typescript',
            'Nest.js',
            'DnD'
        ],
        description: 'Cupidatat enim nostrud quis duis eu proident dolor est commodo eu cillum commodo exercitation. Veniam ut qui pariatur commodo cillum qui cillum elit.',
        title: 'Chess Puzzles',
        href: 'https://tubular-kangaroo-cedb4e.netlify.app/'
    },
    {
        image: '/projects/chess-puzzles.png',
        tags: [
            'React',
            'Redux',
            'Typescript',
            'Nest.js',
            'DnD'
        ],
        description: 'Cupidatat enim nostrud quis duis eu proident dolor est commodo eu cillum commodo exercitation. Veniam ut qui pariatur commodo cillum qui cillum elit.',
        title: 'Chess Puzzles',
        href: 'https://tubular-kangaroo-cedb4e.netlify.app/'
    }
]