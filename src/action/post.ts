"use server";

import { PostConnection, Stage } from "@/generated/graphql";
import { getSdk } from "@/utils/sdk";
import { SearchFunction } from "./types";

export const searchPosts: SearchFunction<PostConnection> = async (
  keyword: string,
  first: number,
  skip: number,
  stage: Stage
) => {
  const { postsConnection } = await getSdk().searchPosts({
    search: keyword,
    first,
    skip,
    stage,
  });
  return postsConnection as PostConnection;
};
