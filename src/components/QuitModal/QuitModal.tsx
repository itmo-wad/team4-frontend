import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useSocket } from '../../socket';
import { messagesActions } from '../../store/actions';

const QuitModal: FC = () => {
  const history = useHistory();
  const socket: any = useSocket();
  const dispatch = useDispatch();

  return (
    <section
      className="modal fade cross-modal"
      id="crossModal"
      role="dialog"
      aria-labelledby="crossModalLabel"
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
            <p>Do you really want to quit the chat?</p>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn modal-btn"
              data-dismiss="modal"
              onClick={() => {
                localStorage.removeItem('name');
                toast.dismiss();
                history.push('/');
                dispatch(messagesActions.deleteMessages());
                dispatch(messagesActions.setIsInRoom(false));
                socket.disconnect();
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

export default QuitModal;
