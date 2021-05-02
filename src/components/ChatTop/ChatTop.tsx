import React, { FC } from 'react';

const ChatTop: FC = () => (
  <div className="chat-top d-flex justify-content-between mb-5">
    <div className="interlocutor d-flex">
      <span
        className="next d-flex"
        data-toggle="modal"
        data-target="#nextModal"
      >
        <button
          type="submit"
          className="btn next-btn d-inline-flex col-md-3 justify-content-center"
        >Next
        </button>
        <div className="arrow" />
      </span>
    </div>
    <div className="quit-chat d-flex">
      <span
        className="close-chat"
        data-toggle="modal"
        data-target="#crossModal"
      />
    </div>
  </div>
);

export default ChatTop;
