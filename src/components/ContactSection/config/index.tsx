import { ReactNode } from "react"
import PhoneIcon from '../../../assets/phone.svg?react'
import MailIcon from '../../../assets/mail.svg?react'
import styles from './Icon.module.css'
import GithubIcon from '../../../assets/github_icon.svg?react'
import LinkedinIcon from '../../../assets/linkedin_icon.svg?react'
import TelegramIcon from '../../../assets/telegram_icon.svg?react'

interface ContactElement {
    label: string
    value: string | ReactNode
    href?: string
}

interface SocialElement {
    href: string
    icon: ReactNode
}

export const contactDetails: ContactElement[] = [
    {
        label: 'Phone:',
        value: <span className={styles.link}><PhoneIcon className={"mr-2 w-6 h-6 " + styles.icon}/>+447767491671</span>,
        href: 'tel:+447767491671'
    },
    {
        label: 'Email:',
        value: <span className={styles.link}><MailIcon className={"mr-2 w-6 h-6 " + styles.icon}/>skmykolai@gmail.com</span>,
        href: 'mailto:skmykolai@gmail.com'
    }
]

export const socials: SocialElement[] = [
    {
        icon: <GithubIcon className="w-10 h-10" />,
        href: 'https://github.com/ewqwdd'
    },
    {
        icon: <LinkedinIcon className="w-10 h-10" />,
        href: 'https://www.linkedin.com/in/mykolai-skydan-9b963b278/'
    },
    {
        icon: <TelegramIcon className="w-10 h-10" />,
        href: 'https://t.me/dxrned'
    }
]