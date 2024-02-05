import { Fragment } from "react";
import { useScreen } from "../../lib/hooks/useScreen";
import { contactDetails, socials } from "./config";
import styles from './Contact.module.css'

export default function ContactSection() {
  const width = useScreen();
  const margin = width >= 1310 ? (width - 1280) / 2 : 12;
  return (
    <section
      id="Contact"
      style={{
        marginLeft: margin,
      }}
    >
      <h2 className="text-[32px] font-bold">Contact information:</h2>
      <div
        className="inline-grid text-[20px] mt-4 ml-[32px] gap-x-6"
        style={{
          gridTemplateColumns: "auto 1fr",
        }}
      >
        {contactDetails.map((elem, index) => (
          <Fragment key={index}>
            <h4 className="text-white font-medium">{elem.label}</h4>
            {!elem.href ? (
              <span>{elem.value}</span>
            ) : (
              <a
                className="hover:text-emerald-300 transition-all"
                href={elem.href}
              >
                {elem.value}
              </a>
            )}
          </Fragment>
        ))}
      </div>
      <div className="flex gap-4 ml-[32px] mt-10">
        {socials.map((elem, index) => (
            <a target="_blank" className={"text-white relative transition-all hover:text-emerald-300 after:bg-emerald-800 " + styles.social} href={elem.href} key={index}>
            {elem.icon}
            </a>
        ))}
      </div>
    </section>
  );
}
