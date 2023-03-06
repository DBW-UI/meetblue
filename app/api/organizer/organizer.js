'use strict';

const fetch = require('node-fetch');

const API_ENDPOINT = `${process.env.APP_API_SERVICE_URL}/v1/user/calendar/meeting/chkpassword/{meetingId}`

async function organizer(req, res) {
  const { roomId, password } = req.body;
  // if(password === '@Test12345')
  // return res.status(200).json({message: 'authorized'});
  // else return res.status(401).json({message: 'Invalid Credientials'});
console.log(roomId,password)
  try {
    const response = await fetch(`${process.env.APP_API_SERVICE_URL}/v1/user/calendar/meeting/chkpassword/rjo-igk-63?password=596140`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
}

module.exports = organizer;
