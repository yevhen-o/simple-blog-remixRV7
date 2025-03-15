import { ListWrapper } from "@src/components/ListWrapper";
import { getUsers } from "@src/services/httpClient";
import { type UserInterface } from "@src/types/UserInterface";
import { getUrl, IDENTIFIERS, Link } from "@src/utils";

export async function loader() {
  const users = await getUsers();
  return users;
}

export default function UserList({
  loaderData: users,
}: {
  loaderData: UserInterface[];
}) {
  return (
    <>
      <h1>List of users</h1>
      <Link to={getUrl(IDENTIFIERS.USER_ADD)}>Add new user</Link>
      <br />
      <br />
      <ListWrapper>
        {users.map((user: UserInterface) => (
          <Link
            to={getUrl(IDENTIFIERS.USER_VIEW, { userId: user.id })}
            key={user.id}
          >
            {JSON.stringify(user)}
          </Link>
        ))}
      </ListWrapper>
    </>
  );
}
