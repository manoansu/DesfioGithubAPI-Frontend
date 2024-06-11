import { useEffect, useState } from "react";
import DisplayUserProfile from "../../../component/DisplayUserProfile";
import * as userservice from "../../../service/user.service";
import "./style.css";
import { UserDTO } from "../../../models/user";
import UserNotFound from "../UserNotFound";
import { Outlet } from "react-router-dom";

type Props = {
  userName: string;
};

export default function UserProfile({ userName }: Props) {
  const [userProfile, setUserProfile] = useState<UserDTO>();

  useEffect(() => {
    userservice
      .findbyUser(userName)
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch(() => {
        console.log("User not found!");
      });
  }, []);

  return (
    <>
      {userProfile ? (
        <>
          <DisplayUserProfile user={userProfile!} />
          <Outlet />
        </>
      ) : (
        <>
          <UserNotFound />
          <Outlet />
        </>
      )}
    </>
  );
}
