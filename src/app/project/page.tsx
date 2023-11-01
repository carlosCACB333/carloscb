import { sizes } from "@/assets";
import { Pagination } from "@/components/common/Pagination";
import { Searcher } from "@/components/common/Searcher";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Project, Stage } from "@/generated/graphql";
import { PageProps } from "@/interfaces";
import { REVALIDATE } from "@/utils";
import { getSdk } from "@/utils/sdk";

const PAGE_SIZE = 12;
const ProjectPage = async ({ searchParams }: PageProps) => {
  const search = searchParams.search || "";
  const skip = parseInt(searchParams.skip || "0");

  const { projectsConnection: data } = await getSdk().searchProjects({
    first: PAGE_SIZE,
    skip,
    search,
    stage: Stage.Published,
  });

  return (
    <div className="container mx-auto mt-20 p-6">
      <div className="max-w-lg mx-auto ">
        <Searcher
          size="lg"
          placeholder="Buscar proyectos..."
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8">
        {data?.edges.map(({ node }) => (
          <div key={node.id}>
            <ProjectCard project={node as Project} sizes={sizes.md} />
          </div>
        ))}
      </div>

      {data?.pageInfo && (
        <Pagination
          hasNext={data.pageInfo.hasNextPage}
          hasPrevious={data.pageInfo.hasPreviousPage}
          pageSize={PAGE_SIZE}
          skip={skip}
        />
      )}
    </div>
  );
};

export default ProjectPage;

export const revalidate = REVALIDATE;
