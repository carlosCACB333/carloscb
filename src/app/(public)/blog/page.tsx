import { CategoryList, PostList, PostPaginated } from "@/components/post";
import { Stage } from "@/generated/graphql";
import { REVALIDATE } from "@/utils";
import { getSdk } from "@/utils/sdk";

const BlogsHome = async () => {
  const { firstPosts, categories } = await getSdk().blogsPage({
    stage: Stage.Published,
  });

  const sortedCategories = [...categories]
    .sort((a, b) => b.posts.length - a.posts.length)
    .slice(0, 4);

  return (
    <main className="p-6">
      <PostList posts={firstPosts as any} />
      <CategoryList categories={sortedCategories as any} />
      <PostPaginated />
    </main>
  );
};

export default BlogsHome;

export const revalidate = REVALIDATE;
