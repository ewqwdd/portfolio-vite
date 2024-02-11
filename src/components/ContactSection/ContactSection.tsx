import { Fragment } from "react";
import { useScreen } from "../../lib/hooks/useScreen";
import { contactDetails, socials } from "./config";
import styles from "./Contact.module.css";
import Spinner from "../Spinner/Spinner";

interface ContactSectionProps {
  countWidth?: boolean
  oneLine?: boolean
}

export default function ContactSection({countWidth, oneLine}: ContactSectionProps) {
  const { width } = useScreen();
  if (!width) {
    return (
      <Spinner className="w-48 h-48v absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
    );
  }
  const margin = width >= 1310 ? (width - 1280) / 2 : 12;
  return (
    <section
      className="mt-[7svh] max-lg:px-3"
      id="Contact"
      style={{
        marginLeft: countWidth ? margin : 0,
        display: oneLine ? 'grid' : 'block',
        gridTemplateColumns: "auto 1fr"
      }}
    >
      <h2 className="text-h2Clamp font-bold col-span-2">Contact information:</h2>
      <div
        className="inline-grid text-p20Clamp mt-4 lg:ml-[32px] gap-x-6"
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
      <div className="flex gap-4 lg:ml-[32px] mt-10" style={{
        margin: oneLine ? 'auto' : undefined
      }}>
        {socials.map((elem, index) => (
          <a
            target="_blank"
            className={
              "text-white relative transition-all hover:text-emerald-300 after:bg-emerald-800 " +
              styles.social
            }
            href={elem.href}
            key={index}
          >
            {elem.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
