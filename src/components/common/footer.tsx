"use server";

import { AUTHOR_EMAIL } from "@/utils";

export const Footer = () => {

  return (
    <footer className="container mx-auto max-w-7xl px-12">
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-sm ">
          Creado&nbsp;por&nbsp;
          <span className="text-primary">
            {AUTHOR_EMAIL}
          </span>
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};
