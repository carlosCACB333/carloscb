"use server";
import { GraphQLClient } from "graphql-request";
import { getSdk as sdk } from "@/generated/graphql";
import { GRAPHCMS_TOKEN, GRAPHCMS_URL } from ".";

export const getSdk = () => {
  const client = new GraphQLClient(GRAPHCMS_URL, {
    headers: {
      Authorization: `Bearer ${GRAPHCMS_TOKEN}`,
    },
  });
  return sdk(client);
};
