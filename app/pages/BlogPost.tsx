import { BlogArticle } from "@src/features/Blog/BlogArticle";
import { getBlogBySlug } from "@src/services/httpClient";
import { type PostInterface } from "@src/types/PostInterface";

export async function loader({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  return blog;
}

export default function BlogPost({
  loaderData,
}: {
  loaderData: PostInterface;
}) {
  return <BlogArticle article={loaderData} />;
}
