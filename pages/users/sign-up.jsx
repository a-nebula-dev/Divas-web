// -----------------------------------------------------------------------------
import { PageUrls } from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import Panel      from "@/components/UI/Containers/Panel";
import SignUpForm from "@/components/User/Forms/SignUpForm";
// -----------------------------------------------------------------------------
import UserLoggedContext from "@/contexts/User/UserLoggedContext.js";
// -----------------------------------------------------------------------------
import styles from "../styles/LoginPage.module.css";



// -----------------------------------------------------------------------------
function CreatePage()
{
  return (<>
    <UserLoggedContext requiresLoggedUser={false} redirectTo={PageUrls.UserOwnProfile}>
      <div className={styles.mainContainer}>
        <Panel className="margin-top-2">
          <SignUpForm/>
        </Panel>
      </div>
    </UserLoggedContext>
  </>);
}

// -----------------------------------------------------------------------------
export default CreatePage;
