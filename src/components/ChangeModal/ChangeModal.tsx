import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSocket } from '../../socket';
import { messagesActions } from '../../store/actions';

const ChangeModal: FC = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const nextChat = () => {
    socket.emit('next', {});
  };

  return (
    <section
      className="modal fade next-modal"
      id="nextModal"
      role="dialog"
      aria-labelledby="nextModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog"
        role="document"
      >
        <div className="modal-content modal-window">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Do you really want to change your conversation partner?</p>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn modal-btn"
              data-dismiss="modal"
              onClick={() => {
                dispatch(messagesActions.deleteMessages());
                nextChat();
              }}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn modal-btn"
              data-dismiss="modal"
              aria-label="Close"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangeModal;
