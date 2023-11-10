import { sizes } from "@/assets";
import { IMG } from "@/components/common/IMG";
import { Pagination } from "@/components/common/Pagination";
import { Searcher } from "@/components/common/Searcher";
import { Stage } from "@/generated/graphql";

import { PageProps } from "@/interfaces";
import { getSdk } from "@/utils/sdk";

const PAGE_SIZE = 12;

const Certification = async ({ searchParams }: PageProps) => {
  const search = searchParams.search || "";
  const skip = parseInt(searchParams.skip || "0");

  const { certificationsConnection: data } =
    await getSdk().searchCertifications({
      first: PAGE_SIZE,
      skip,
      search,
      stage: Stage.Published,
    });

  return (
    <>
      <div className="container mx-auto mt-20 p-6">
        <div className="max-w-lg mx-auto mb-8 ">
          <Searcher placeholder="Buscar certificados..." />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
          {data?.edges?.map(({ node }) => (
            <div key={node.id} className="relative w-full aspect-[4/3]">
              <IMG
                src={node.picture.url}
                alt={node.name}
                fill
                className="rounded-xl"
                sizes={sizes.sm}
              />
            </div>
          ))}
        </div>
        {data?.pageInfo && (
          <Pagination
            hasNext={data.pageInfo.hasNextPage}
            hasPrevious={data.pageInfo.hasPreviousPage}
            skip={skip}
            pageSize={PAGE_SIZE}
          />
        )}
      </div>
    </>
  );
};

export default Certification;
