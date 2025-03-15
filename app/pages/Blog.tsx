import { BlogItem } from "@src/features/Blog/BlogItem";
import { ListWrapper } from "@src/components/ListWrapper";
import { type FirebasePostInterface } from "@src/types/PostInterface";
import { getBlogPosts } from "@src/services/httpClient";

export async function loader() {
  const blogResponse = await getBlogPosts();
  return blogResponse;
}

export default function BlogList({
  loaderData,
}: {
  loaderData: FirebasePostInterface;
}) {
  const blogsResponse = loaderData;

  return (
    <>
      <h1>List of articles</h1>
      <ListWrapper>
        {Object.entries(blogsResponse).map(([key, value]) => (
          <BlogItem key={key} item={value} />
        ))}
      </ListWrapper>
    </>
  );
}
