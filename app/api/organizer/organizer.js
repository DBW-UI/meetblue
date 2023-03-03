'use strict';

const fetch = require('node-fetch');

const API_ENDPOINT = 'https://api.deepbluework.com/data';

async function organizer(req, res) {
  const { roomId, password } = req.body;
  if(password === '@Test12345')
  return res.status(200).json({message: 'authorized'});
  else return res.status(401).json({message: 'Invalid Credientials'});

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ roomId, password }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
}

module.exports = organizer;
