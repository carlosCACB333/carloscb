"use client";

import {
  Button,
  Card,
  CardBody,
  Link,
  Input,
  InputProps,
  Textarea,
} from "@nextui-org/react";

import { title, subtitle, titleWrapper, sectionWrapper } from "@/components";
import { Contact } from "@/interfaces";
import { toast } from "react-toastify";
import { Icon } from "../common/icon";
import { FaUser } from "react-icons/fa";
import { AiFillPhone, AiFillQuestionCircle } from "react-icons/ai";
import { FORM_INIT, STATUS } from "@/utils";
import { AuthorFragment } from "@/generated/graphql";
import { sendEmailContact } from "@/action";
import { useFormState, useFormStatus } from "react-dom";
import { MdAlternateEmail } from "react-icons/md";
import { SubmitButton } from "../common/submit-button";

interface Props {
  author: AuthorFragment;
}
export const ContactSection = ({ author }: Props) => {
  const [state, dispatch] = useFormState(sendEmailContact, FORM_INIT);

  const { errors, status, message } = state;

  if (status === STATUS.OK) {
    toast.success(message);
  }

  if (status !== STATUS.INITIAL && status !== STATUS.OK) {
    toast.error(message);
  }

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
                        <Icon
                          name="facebook"
                          className="mr-2 "
                          aria-label="Facebook"
                        />
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
                        <Icon
                          name="linkedin"
                          className="mr-2 "
                          aria-label="linkedin"
                        />
                        Linkedin
                      </Link>
                    )}
                    {author.phone && (
                      <Link
                        href={`https://wa.me/${author.phone}`}
                        target="_blank"
                        color="foreground"
                        aria-label="WhatsApp"
                      >
                        <Icon
                          name="whatsapp"
                          className="mr-2 "
                          aria-label="Whatsapp"
                        />
                        WhatsApp
                      </Link>
                    )}
                    {author.email && (
                      <Link
                        href={`mailto:${author.email}`}
                        target="_blank"
                        color="foreground"
                        aria-label="Email"
                      >
                        <Icon
                          name="email"
                          className="mr-2 "
                          aria-label="email"
                        />
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
                        <Icon
                          name="git"
                          className="mr-2 "
                          aria-label="github"
                        />
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
                    {...getAttrs("message")}
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
