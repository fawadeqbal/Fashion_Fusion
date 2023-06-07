import React from 'react'


const addUserController = () => async (req, res) => {
    try {
      const { username, password, role } = req.body;
      const newUser = new User({ username, password, role });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }