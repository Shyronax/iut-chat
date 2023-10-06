import { useEffect, useRef } from "react";
import s from "./UserList.module.scss";
import User from "../user/User";
import { gsap } from "gsap";

const UserList = ({ users, setUsers, channel, setChannel }) => {
  const listRef = useRef();

  useEffect(() => {
    console.log("change on users");

    gsap.to(listRef.current.children, {
      opacity: 1,
      duration: 0.5,
      x: 0,
      stagger: 0.1,
    });
  }, [users]);

  const resetNotification = (user) => {
    const _users = [...users];

    const index = _users.findIndex((_user) => _user.userID === user.userID);

    _users[index].hasNewMessages = false;

    setUsers(_users);
  };

  return (
    <div className={s.userlist} ref={listRef}>
      <div
        className={`${s.user} ${!channel && s.user__active}`}
        onClick={() => setChannel(null)}
      >
        Général
      </div>
      {users.map((user) => {
        return (
          user.connected && (
            <User
              key={user.userID}
              user={user}
              setChannel={setChannel}
              channel={channel}
              resetNotification={resetNotification}
            />
          )
        );
      })}
    </div>
  );
};

export default UserList;
