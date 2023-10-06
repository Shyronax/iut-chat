import s from "./Message.module.scss";

const Message = ({ username, content, fromSelf }) => {
  return (
    <div className={`${s.message} ${fromSelf && s.message__self}`}>
      {username}: {content}
    </div>
  );
};

export default Message;
