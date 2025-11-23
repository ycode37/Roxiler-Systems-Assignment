STORE RATING PLATFORM

A full-stack web application that allows users to submit and manage ratings for registered stores. 
User access and functionalities depend on their assigned roles.

## TECH STACK USED:
FrontEnd: React.js
BackEnd:  Express.js
DataBase: MySQL

## Objective:

This project was developed as part of a Full Stack Coding Challenge .  
Users can rate stores from 1 to 5 and view ratings submitted by others.  

## Authentication & Authorization
<img width="858" height="678" alt="Screenshot 2025-11-23 at 2 41 44 PM" src="https://github.com/user-attachments/assets/800442d1-de2e-4442-9e6e-1a8d53dbb914" />

The platform uses JWT-based authentication with role-based access control.
Single login system for Admin, Store Owner, and Normal User .
Admin can create admin and store owner accounts

## User Roles & Functionalities

 
 System Administrator
  To access Admin account
  email_id ->admin@abc.com
  password ->Admin123@@
 
Add stores, normal users, and admin users
<img width="1221" height="791" alt="Screenshot 2025-11-23 at 5 19 10 PM" src="https://github.com/user-attachments/assets/f798caf2-7764-47ba-b90a-c81de040f0cb" />
<img width="986" height="808" alt="Screenshot 2025-11-23 at 5 19 51 PM" src="https://github.com/user-attachments/assets/98f8eaf7-f51a-462b-a29e-f4da6456b96b" />
 Dashboard insights:

<img width="1273" height="703" alt="Screenshot 2025-11-23 at 5 18 25 PM" src="https://github.com/user-attachments/assets/856f511b-8933-4733-9c91-b9ea2ac6f726" />
- View & filter user and store lists by Name, Email, Address, Role
<img width="1371" height="787" alt="Screenshot 2025-11-23 at 5 18 48 PM" src="https://github.com/user-attachments/assets/a18d3e3e-9835-4359-8200-5015c696e0fc" />
- View store details including ratings
<img width="1275" height="528" alt="Screenshot 2025-11-23 at 5 19 30 PM" src="https://github.com/user-attachments/assets/93e05a41-5d79-4e9e-9705-7802d8762397" />
- Manage accounts & logout

Normal User
- Sign up & login
- View all registered stores
<img width="1343" height="705" alt="Screenshot 2025-11-23 at 6 58 54 PM" src="https://github.com/user-attachments/assets/9302f456-81e5-41ea-b3f9-fabda5db302a" />

- Search stores by Name or Address
- Submit or update ratings (1–5)
- View store details including:
  - Store Name
  - Address
  - Overall Rating
  - User’s submitted rating
  - <img width="1369" height="813" alt="Screenshot 2025-11-23 at 6 58 37 PM" src="https://github.com/user-attachments/assets/41960063-c5b2-4bdf-904f-10e2c7ecf197" />
- Update password

<img width="1326" height="812" alt="Screenshot 2025-11-23 at 5 37 36 PM" src="https://github.com/user-attachments/assets/37480d05-1824-4a20-afd3-a02896ca4346" />

- Logout

Store Owner
- Login & update password
- Dashboard displays:
  <img width="1423" height="811" alt="Screenshot 2025-11-23 at 6 58 04 PM" src="https://github.com/user-attachments/assets/a04fea91-ab7d-4042-8590-941e15a2752d" />

  - Average rating of their store
  - Users who submitted ratings
- Logout

