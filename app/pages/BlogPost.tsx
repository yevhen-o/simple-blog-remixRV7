import { BlogArticle } from "@src/features/Blog/BlogArticle";
import { getBlogBySlug } from "@src/services/httpClient";
import { type FirebasePostInterface } from "@src/types/PostInterface";

export async function loader({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  return blog;
}

export default function BlogPost({
  loaderData,
}: {
  loaderData: FirebasePostInterface;
}) {
  return <BlogArticle article={Object.values(loaderData)[0]} />;
}
