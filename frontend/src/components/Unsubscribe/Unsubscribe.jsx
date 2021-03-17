import React, { useState } from 'react';
import classNames from 'classnames';
import useJsonFetch from '../../hooks/useJsonFetch.js';

const url = process.env.REACT_APP_ERROR_URL;
const initialState = {
  url: undefined,
  opts: {},
};

function Unsubscribe() {
  const [request, setRequest] = useState(initialState);
  const [email, setEmail] = useState('');
  const [validEmail, validateEmail] = useState(true);
  const [data, loading, error] = useJsonFetch(request.url, request.opts);

  const handleChange = (e) => {
    validateEmail(true);
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length < 3 || !email.includes('@')) {
      validateEmail(false);
      return;
    }

    setRequest({ url });
  }

  let buttonText;
  if (data) {
    buttonText = (error) ? 'Server error' : 'Success';
  } else {
    buttonText = 'Submit';
  }

  return (
    <form className="unsubscribe-form" onSubmit={handleSubmit} noValidate>
      <h2 className="h2">Confirm your e-mail to unsubscribe from our news</h2>
      <div className="mb-3">
        <label className="form-label" htmlFor="email-inp">E-mail</label>
        <input
          id="email-inp"
          className={classNames('form-control', { 'is-invalid': !validEmail })}
          type="email"
          placeholder="name@example.com"
          onChange={handleChange}
          value={email}
        />
        <div className="invalid-feedback">Please input valid e-mail address.</div>
      </div>
      <button
        type="submit"
        className={classNames(
          'btn',
          {
            'btn-primary': !error,
            'btn-error': error,
            'btn-striped': loading,
          },
        )}
        disabled={!!data}
      >
        {buttonText}
      </button>
    </form>
  )
}

export default Unsubscribe;
