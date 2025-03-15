import { useAuth } from "@src/hooks/useAuth";
import { BackButtonHeading } from "@src/components/BackButtonHeading";
import { AddEditPostForm } from "@src/features/Blog/AddEditPostForm";
import { UserMenu } from "@src/features/authentication/UserMenu";

export default function BlogAddNew() {
  const { user } = useAuth();

  return (
    <div>
      <BackButtonHeading>Add new post</BackButtonHeading>
      {!user && "Sorry add posts can only be done by logged in users"}
      {!user && <UserMenu />}
      {!!user && <AddEditPostForm />}
    </div>
  );
}
