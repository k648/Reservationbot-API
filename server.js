require('dotenv').config()
const connectDB = require('./db/connect')
const feedbackRoute = require('./routes/feedback')
const reservationRoute = require('./routes/reservation')
const cancelledreservationRoute = require('./routes/cancelledReservation')
const authRoute = require('./routes/auth')
const roomRoute = require('./routes/room')
const resetPasswordRoute = require('./routes/resetPassword')
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');
const jwt = require('jsonwebtoken')
const User = require('./model/User'); 




const express = require('express')

const app = express()


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/reset-password/:token', async (req, res) => {
  const token = req.params.token;

  if (!token) {
    return res.status(400).send('Token is required');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    console.log(decoded)
    res.render('reset-password', {token});
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return res.status(400).send('Invalid or expired token');
  }
});

app.post('/reset-password/:token', async (req, res) => {
  const password = req.body.password;
  const token = req.params.token;

  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      email: decoded.email,
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found or token has expired' });
    }

    user.password = password;
    user.resetToken = null;
    user.resetTokenExpiration = null;
    await user.save();

    res.status(200).json({ message: 'Password has been reset' });
  } catch (err) {
    console.error('Error during password reset:', err.message);
    return res.status(500).json({ message: 'Server error' });
  }
});








app.use('/api/v1',authRoute)
app.use('/api/v1', feedbackRoute )
app.use('/api/v1', reservationRoute )
app.use('/api/v1', cancelledreservationRoute )
app.use('/api/v1', roomRoute )
app.use('/api/v1',  resetPasswordRoute  )


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));




const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      const port = process.env.PORT || 5000;
      app.listen(port, () => {
        console.log(`The server is listening on port ${port}...`);
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  start();



