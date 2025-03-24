// -----------------------------------------------------------------------------
import React from "react";
// -----------------------------------------------------------------------------
import { PageUrls } from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import MainLayout from "@/components/legacy/Layout/MainLayout";
import UserProfile from "@/components/User/UserProfile";
// -----------------------------------------------------------------------------
import UserLoggedContext, { useLoggedUserContext } from "@/contexts/User/UserLoggedContext.js";
import UserProfile from "@/components/legacy/User/UserProfile";


// -----------------------------------------------------------------------------
function _Content() {
  const loggedUser = useLoggedUserContext();
  if (!loggedUser) {
    return null;
  }

  return (
    <>
      <MainLayout pageName={PageUrls.UserOwnProfile}>
        <UserProfile userModel={loggedUser} />
      </MainLayout>
    </>
  );
}

// -----------------------------------------------------------------------------
function ProfilePage() {
  return (
    <UserLoggedContext
      requiresLoggedUser={true}
      redirectTo={PageUrls.UserLogin}
    >
      <_Content />
    </UserLoggedContext>
  );
}

// -----------------------------------------------------------------------------
export default ProfilePage;
