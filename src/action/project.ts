"use server";

import { ProjectConnection, Stage } from "@/generated/graphql";
import { getSdk } from "@/utils/sdk";
import { SearchFunction } from "./types";

export const searchProjects: SearchFunction<ProjectConnection> = async (
  keyword: string,
  first: number,
  skip: number,
  stage: Stage
) => {
  const { projectsConnection } = await getSdk().searchProjects({
    search: keyword,
    first,
    skip,
    stage,
  });
  return projectsConnection as ProjectConnection;
};
