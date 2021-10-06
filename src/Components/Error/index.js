import React from 'react';
import Alert from '@mui/material/Alert';
import './style.css';

export default function Error({ errorMessage }) {
  return (
    <div className="container">
      <div className="vertical-center">
        <Alert className="child" severity="error">
          {errorMessage }</Alert>
      </div>
    </div>
  )
}
