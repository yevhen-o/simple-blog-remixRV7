import { BackButtonHeading } from "@src/components/BackButtonHeading";
import { getUserById } from "@src/services/httpClient";
import { type UserInterface } from "@src/types/UserInterface";

export async function loader({ params }: { params: { userId: string } }) {
  return await getUserById(params.userId);
}

export default function UserPage({
  loaderData,
}: {
  loaderData: UserInterface;
}) {
  return (
    <>
      <BackButtonHeading>
        View user, to check cache revalidation
      </BackButtonHeading>
      <code>{JSON.stringify(loaderData, null, 2)}</code>
    </>
  );
}
