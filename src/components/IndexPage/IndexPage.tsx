import React, { FC, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const IndexPage: FC = () => {
  const history = useHistory();
  const inputRef: any = useRef(null);

  return (
    <>
      <main>
        <div className="container">
          <section className="row d-flex justify-content-center line">
            <div className="col-11 col-md-8">
              <form
                className="login modal-content"
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (inputRef.current.value) {
                    localStorage.setItem('name', inputRef.current.value);
                    history.push('/chat');
                  }
                }}
              >
                <div className="d-flex justify-content-center">
                  <div className="login-input d-flex flex-column col-11 col-md-8">
                    <label
                      className="login-text text-center"
                      htmlFor="form-login"
                    >
                      Just write your name and start chatting
                    </label>
                    <input
                      className="login-name"
                      type="text"
                      name="login"
                      id="form-login"
                      placeholder="Name"
                      ref={inputRef}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn d-inline-flex col-md-3 justify-content-center login-btn"
                >
                  Start chat
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
