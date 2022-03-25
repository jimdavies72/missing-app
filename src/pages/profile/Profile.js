import "./Profile.css";
import { Navigate } from "react-router-dom";

import UpdateProfile from "../../components/updateProfile/UpdateProfile";
import UpdatePassword from "../../components/updatePassword/UpdatePassword";
import DeleteUser from "../../components/deleteUser/DeleteUser";

const Profile = ({ user, setUser, clearUserHandler }) => {
  return (
    <div className="profile-page">
      {!user && <Navigate to="/" />}

      <h2>{user}'s Profile Page</h2>

      <UpdateProfile user={user} setUser={setUser} />
      <UpdatePassword user={user} setUser={setUser} />
      <DeleteUser user={user} clearUserHandler={clearUserHandler} />
    </div>
  );
};

export default Profile;
