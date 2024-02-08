import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import { IParallax } from "@react-spring/parallax";

interface NavLink {
  label: string;
  href: number;
}

const links: NavLink[] = [
  {
    href: 0,
    label: "ABOUT",
  },
  {
    href: 0.2,
    label: "SKILLS",
  },
  {
    href: 0.5,
    label: "PROJECTS",
  },
  {
    href: 0.9,
    label: "CONTACT",
  },
];

interface NavigationProps {
  goTo: (num: number) => () => void
  entity: IParallax
}

export default function Navigation({goTo, entity}: NavigationProps) {
  const [glow, setGlow] = useState<number | undefined>();

  useEffect(() => {
    const handleScroll = () => {
      const current = entity.current
      const linksCopy = [...links]
      linksCopy.reverse()
      const position = current/window.innerHeight
      console.log(linksCopy, position)
      
      const index = links.length - linksCopy.findIndex(elem => position >= elem.href) - 1
      setGlow(index)
    }
    document.getElementById('root')?.querySelectorAll('div')?.[0]?.addEventListener('scroll', handleScroll)

    return () => {
      document.getElementById('root')?.querySelectorAll('div')?.[0]?.removeEventListener('scroll', handleScroll)
    }
  }, [entity])
  
  return (
    <nav className="flex flex-col items-end mt-[5svh] gap-[10px] text-right">
      {links.map((elem, index) => (
        <span
          key={index}
          onClick={goTo(elem.href)}
          className={["transition-all gap-4 inline-flex justify-end items-center", styles.link, (index === glow ? styles.active : '')].join(' ')}
        >
          {elem.label}
        </span>
      ))}
    </nav>
  );
}
