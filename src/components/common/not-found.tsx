import notfound from "@/assets/img/not-found.svg";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title?: string;
  btnText?: string;
  link?: string;
}

export const NotFounComponent = ({
  title = "Oops, este recurso no existe",
  btnText = "Volver",
  link = "/",
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full">
      <Image src={notfound} alt="not found" />
      <h2>
        <span className="text-2xl font-bold">{title}</span>
      </h2>
      <br />
      <Button
        as={Link}
        href={link}
        color="primary"
        aria-label="voler a la pagina de inicio"
      >
        {btnText}
      </Button>
    </div>
  );
};
