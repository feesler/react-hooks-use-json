import React, { useState, useEffect } from 'react';
import useJsonFetch from '../../hooks/useJsonFetch.js';
import { ReactComponent as UpdateIcon } from '../../assets/update-icon.svg';

const statusUrl = process.env.REACT_APP_SUCCESS_URL;

function StatusFetcher() {
  const [status, setStatus] = useState('unknown');
  const [url, setURL] = useState(null);
  const [data, loading, error] = useJsonFetch(url);

  const handleClick = () => {
    setURL(statusUrl);
  }

  useEffect(() => {
    if (loading) {
      setStatus('loading...');
    } else if (error) {
      setStatus('Error!');
      setURL(null);
    } else if (data) {
      if (data.status) {
        setStatus(data.status);
      } else {
        setStatus('Invalid data!');
      }
      setURL(null);
    } else {
      setStatus('unknown');
    }
  }, [data, loading, error])


  return (
    <div className="status-fetcher">
      <span className="status-fetcher__status"><b>Status:</b> {status}</span>
      <button className="btn update-btn" disabled={loading} onClick={handleClick} >
        <UpdateIcon />
      </button>
    </div>
  )
}

export default StatusFetcher;
