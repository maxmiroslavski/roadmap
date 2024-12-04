"use client";

import { useSession } from "next-auth/react";

export const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session) {
    return;
  }

  return <h1>{session.user?.name}</h1>;
};
