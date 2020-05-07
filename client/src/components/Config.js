import React, { useState } from 'react';
import '../css/config.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from "react-router-dom";


function Config() {
  const [apiKey, setApiKey] = useState('');
  const [apiSecret, setApiSecret] = useState('');
  const [completed, setCompleted] = useState(false)

  const saveConfig = (key, secret) => {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({apiKey: key, apiSecret: secret})
    };

    fetch('/api/setKeys', data)
      .then(res => res.json())
      .catch(err => console.log(err))
  };

  if (completed) {
    return <Redirect to='/'/>
  }

  return (
    <div>
      <h1 className='config-title'>Configuration</h1>
      <Form onSubmit={ e => {
        e.preventDefault();
        saveConfig(apiKey, apiSecret)
        setCompleted(true)
        }}
      >
        <Form.Group className='text-bar-type'>
          <Form.Label>API KEY</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter API KEY"
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='text-bar-type'>
          <Form.Label>API SECRET</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter API SECRET"
            value={apiSecret}
            onChange={e => setApiSecret(e.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          className='submit-button'
          variant="primary"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Config;
