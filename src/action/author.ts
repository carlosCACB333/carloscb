"use server";

import { Locale, Stage } from "@/generated/graphql";
import { AUTHOR_EMAIL } from "@/utils";
import { getSdk } from "@/utils/sdk";

export const getAuthor = async (locale: Locale) => {
  try {
    const { author } = await getSdk().getAuthor({
      email: AUTHOR_EMAIL,
      locales: [locale],
      stage: Stage.Published,
    });

    return author;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
