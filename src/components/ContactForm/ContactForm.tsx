import { useRef } from "react";

const inputStyles =
  "w-full mt-4 p-2 bg-white/5 text-white/90 rounded-lg border border-white/20 focus:bg-white/10 transition-all focus:border-white/30 focus: outline-0 max-w-96";

export default function ContactForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("email => ", emailRef.current?.value);
    console.log("comment => ", commentRef.current?.value);
  };

  return (
    <form
      className="mt-10 flex flex-col items-end max-lg:items-center max-lg:mt-32 max-[520px]:mt-20"
      onSubmit={onSubmit}
    >
      <h2 className="text-2xl text-white/90 font-medium text-right">
        Зв'язатись з нами
      </h2>
      <input
        ref={emailRef}
        type="email"
        placeholder="Пошта"
        className={inputStyles}
        required
      />
      <textarea
        ref={commentRef}
        placeholder="Комментар"
        className={inputStyles + " resize-none h-36 max-lg:h-20"}
      />
      <button className="bg-emerald-600 font-medium text-white/90 rounded-lg px-4 py-2 mt-4">
        Відправити
      </button>
    </form>
  );
}
