import s from "./User.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const User = ({ user, resetNotification, setChannel, channel }) => {
  const userRef = useRef();

  return (
    <div
      ref={userRef}
      className={`${s.user} ${
        channel?.userID === user.userID && s.user__active
      } ${user.hasNewMessages && s.user__notif}`}
      key={user.userID}
      onClick={() => {
        setChannel(user);
        resetNotification(user);
      }}
    >
      {user.username} {user.user === localStorage.getItem("username") && "(me)"}
    </div>
  );
};

export default User;
