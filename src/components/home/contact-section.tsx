"use client";

import { sendEmailContact } from "@/action";
import { sectionWrapper, subtitle, title, titleWrapper } from "@/components";
import { AuthorFragment } from "@/generated/graphql";
import { Contact } from "@/interfaces";
import { FORM_INIT } from "@/utils";
import { Card, CardBody } from "@nextui-org/card";
import { Input, InputProps, Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useFormState } from "react-dom";
import { AiFillPhone, AiFillQuestionCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Icon } from "../common/icon";
import { SubmitButton } from "../common/submit-button";

interface Props {
  author: AuthorFragment;
}
export const ContactSection = ({ author }: Props) => {
  const [state, dispatch] = useFormState(sendEmailContact, FORM_INIT);

  const { errors } = state;

  const getAttrs = (name: keyof Contact): InputProps => {
    return {
      name,
      variant: "bordered",
      className: "mb-2",
      color: errors?.[name] ? "danger" : "default",
      errorMessage: errors?.[name]?.join(", "),
    };
  };

  return (
    <>
      <section
        className={sectionWrapper({
          class: "z-20 mt-16 lg:mt-44 max-w-4xl mx-auto",
        })}
      >
        <div className="flex flex-col gap-8">
          <Card>
            <CardBody>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="relative overflow-hidden  bg-gradient-to-br from-blue-300 to-blue-900 rounded-lg p-8 ">
                  <div>
                    <div className={titleWrapper()}>
                      <h1 className={title({ size: "lg" })}>
                        ¿Trabajamos juntos?
                      </h1>
                    </div>
                    <p
                      className={subtitle({
                        class: "md:w-full text-base lg:text-lg",
                      })}
                    >
                      Si tienes alguna duda o quieres contactarme,envíame un
                      mensaje
                    </p>
                  </div>

                  <div className="flex flex-col items-start">
                    {author.facebook && (
                      <Link
                        href={author.facebook}
                        target="_blank"
                        color="foreground"
                        aria-label="Facebook"
                      >
                        <Icon name="facebook" className="mr-2 " />
                        Facebook
                      </Link>
                    )}
                    {author.linkedin && (
                      <Link
                        href={author.linkedin}
                        target="_blank"
                        color="foreground"
                        aria-label="Linkedin"
                      >
                        <Icon name="linkedin" className="mr-2 " />
                        Linkedin
                      </Link>
                    )}
                    {author.email && (
                      <Link
                        href={`mailto:${author.email}`}
                        target="_blank"
                        color="foreground"
                        aria-label="Email"
                      >
                        <Icon name="email" className="mr-2 " />
                        Email
                      </Link>
                    )}
                    {author.github && (
                      <Link
                        href={author.github}
                        target="_blank"
                        color="foreground"
                        aria-label="GitHub"
                      >
                        <Icon name="git" className="mr-2 " />
                        GitHub
                      </Link>
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-white rounded-full opacity-10 transform translate-x-10 translate-y-10"></div>
                </div>
                <form action={dispatch}>
                  <Input
                    {...getAttrs("name")}
                    label="Nombres"
                    placeholder="Ingresa tu nombre"
                    endContent={
                      <FaUser className="text-foreground" size={20} />
                    }
                    aria-label="Nombres"
                  />
                  <Input
                    {...getAttrs("email")}
                    label="Email"
                    placeholder="Ingresa tu email"
                    type="email"
                    endContent={
                      <MdAlternateEmail className="text-foreground" size={20} />
                    }
                    aria-label="Email"
                  />
                  <Input
                    {...getAttrs("phone")}
                    label="Teléfono"
                    type="phone"
                    placeholder="Ingresa tu teléfono"
                    endContent={
                      <AiFillPhone className="text-foreground" size={20} />
                    }
                    aria-label="Teléfono"
                  />
                  <Input
                    {...getAttrs("affair")}
                    label="Asunto"
                    placeholder="¿Sobre qué quieres hablar?"
                    endContent={
                      <AiFillQuestionCircle
                        className="text-foreground"
                        size={20}
                      />
                    }
                    aria-label="asunto"
                  />
                  <Textarea
                    {...(getAttrs("message") as any)}
                    label="Mensaje"
                    placeholder="Escribe tu mensaje"
                    aria-label="Mensaje"
                  />
                  <SubmitButton
                    className="w-full"
                    color="primary"
                    aria-label="Enviar mensaje"
                  >
                    Enviar mensaje
                  </SubmitButton>
                </form>
              </div>
            </CardBody>
          </Card>
        </div>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};
