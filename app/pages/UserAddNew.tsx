import { useNavigate } from "react-router-dom";

import { getUrl, IDENTIFIERS } from "@src/utils";
import { BackButtonHeading } from "@src/components/BackButtonHeading";
import { postNewUser } from "@src/services/httpClient";

export default function AddUser() {
  const navigate = useNavigate();

  const submitFunction = async () => {
    await postNewUser({ name: "Joan", email: "joan@joan.com" });
    navigate(getUrl(IDENTIFIERS.USERS));
  };

  return (
    <div>
      <BackButtonHeading>
        Simulate add new user, to check cache revalidation
      </BackButtonHeading>

      <button onClick={submitFunction} type="submit">
        {"Submit"}
      </button>
    </div>
  );
}
