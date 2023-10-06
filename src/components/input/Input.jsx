import { socket } from "@/utils/socket";
import { useRef } from "react";

import s from "./Input.module.scss";

const Input = ({ channel, setChannel }) => {
  const inputRef = useRef();

  const onKeyDown = (e) => {
    // detect when user press enter
    if (inputRef.current.value.length !== 0 && e.keyCode === 13) {
      console.log(inputRef.current.value);

      if (channel) {
        socket.emit("private message", {
          content: inputRef.current.value,
          to: channel.userID,
        });

        // do this because react doesnt re-render otherwise
        const _channel = { ...channel };

        _channel.messages.push({
          content: inputRef.current.value,
          // fromSelf: true,
          username: localStorage.getItem("username"),
          from: socket.userID,
        });

        // change the reference to trigger a render
        setChannel(_channel);
      } else {
        socket.emit("message", { content: inputRef.current.value });
      }

      inputRef.current.value = "";
    }
  };

  return (
    <input
      ref={inputRef}
      className={s.input}
      type="text"
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
