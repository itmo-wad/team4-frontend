import React, { FC, useRef } from 'react';
import useSocket from '../../socket/useSocket';

const ChatBottom: FC = () => {
  const inputRef: any = useRef(null);
  const socket = useSocket();

  return (
    <form
      className="chat-bottom d-flex justify-content-around mt-5"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current && inputRef.current.value) {
          socket.send({
            user_name: localStorage.getItem('name') || 'anonymous',
            message: inputRef.current.value,
          });
          inputRef.current.value = '';
        }
      }}
    >
      <div className="type-message col-md-9">
        <input
          className="login-name message col-9"
          type="text"
          name="message"
          id="form-login"
          placeholder="Message text"
          ref={inputRef}
          required
        />
      </div>
      <button
        type="submit"
        className="btn send-btn d-inline-flex col-md-2 justify-content-center"
      >
        Send
      </button>
    </form>
  );
};

export default ChatBottom;
