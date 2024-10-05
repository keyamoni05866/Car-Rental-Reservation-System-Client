# CityCar Rental (Car Rental Reservation System)

**Live Link** : https://car-rental-reservation-system-sooty.vercel.app/

# Admin User credentials

     - Admin Email and Password: keya05866@gmail.com  password: 123456
     -  User Email and Password <br/>
        1. user1@gmail.com  and password: 123456
        2. urmy@Banu.com and  password: 123456

# Introduction

This project is the frontend for the Cars Booking Management System. It is designed to provide a seamless experience for both users and administrators. Key features of the system include: <br/>

- Authentication : Secure user login and registration,ensuring only authorized users can access and manage booking <br>
- Booking Management : Users can browse,book and manage car rentals efficiently <br>
- User Dashboard : Provides users with access to their booking history,personal details,and other related features. <br>
- Admin Dashboard : Admins have access to manage cars and booking, view user data,and control overall system settings. <br>

# Features

1. State Management : Using Redux State Management for Auth and Booking.
2. Authentication Done With JWT also integrate protected route.
3. API : Using Redux RTK Query for API call.
4. Admin Dashboard: Admin can CRUD Car, Manage Bookings return Management Block or Change Role.
5. User Dashboard: User can Booked Car, Manage Bookings Payment Management with AmaarPay.
6. Filter : Users can filter cars by carType, price range and sort them by price (low to high, high to low).
7. Responsive Design: Optimized for various screen sizes and devices.

# Technology Stack

**Frontend** <br/>

1. **React**
2. **TypeScript**
3. **DaisyUi**
4. **Ant Design**
5. **React Redux and RTK Query**
6. **React Hook form**

**Backend and Database** <br/>

1. **Node.js**
2. **TypeScript**
3. **Express.js**
4. **Mongodb**

# Installation Guideline

**Prerequisites**

1. Node.js (v14 or Higher)
2. MongoDB (Locally Installed or cloud instance ) <br>

**Installation**

1. Clone the repository for Frontend <br>https://github.com/keyamoni05866/Car-Rental-Reservation-System-Client <br>
2. Clone the repository for Backend <br> https://github.com/keyamoni05866/carRental-reservation-system-server-with-mongoose <br>
3. Install Dependencies for frontend and backend ---- npm install <br>
4. Set up the Env variables for Frontend: <br>

- VITE_image_upload_token=your imgbb token <br>

5. Set up the Env variables for Backend: <br>

- Create a .env file in the root directory. <br>
- Add the following environment variables:<br>
  PORT=5000<br>
  DATABASE_URL= The connection string for your MongoDB database.<br>
  BCRYPT_SALT_ROUND=use round for password bcrypt <br>
  JWT_ACCESS_SECRET=use your secret<br>
  JWT_ACCESS_EXPIRES_IN= use expiration time<br>
  JWT_REFRESH_SECRET=use refresh secret<br>
  JWT_REFRESH_EXPIRES_IN=use expire time<br>
  STORE_ID=amarpay store id<br>
  SIGNATURE_KEY= amarpay signature key<br>
  PAYMENT_URL=payment url<br>
  PAYMENT_VERIFY_URL=payment verify url<br>
