"use server";

import { grpcSendEmails } from "@/grpc/utils";
import { Contact, FormState } from "@/interfaces";
import { ContacSchema } from "@/schemas";
import { AUTHOR_EMAIL, STATUS } from "@/utils";
import { cookies } from "next/headers";

export const setCookie = async (name: string, value: string) => {
  cookies().set(name, value, {
    path: "/",
  });
};

export const sendEmailContact = async (
  prevState: FormState<Contact>,
  data: FormData
): Promise<FormState<Contact>> => {
  const rawData = Object.fromEntries(data.entries());
  const validatedFields = ContacSchema.safeParse({ ...rawData });

  if (!validatedFields.success) {
    return {
      message: "Campos invalidos",
      status: STATUS.DATA_LOSS,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { name, email, phone, message, affair } = validatedFields.data;
  const body = `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`;
  const resp = await grpcSendEmails([AUTHOR_EMAIL], affair, body);
  return {
    message: resp.message,
    status: resp.status,
    errors: null,
  };
};
