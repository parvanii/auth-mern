# Advanced Authentication in MERN

A secure and feature-rich authentication system built with the **MERN stack (MongoDB, Express, React, Node.js)**. This project demonstrates advanced authentication features including **email verification via OTP**, **password strength meter**, and **password reset functionality** using **Mailtrap** for email testing.

---

## Features

### 1. Email Verification with OTP
- Users must verify their email during signup via an **OTP sent to their account**.
- Ensures only valid email addresses can register.
- OTP expires after a set time for security.

### 2. Password Strength Meter
- Provides real-time feedback on how strong a password is.
- Suggests ways to make passwords stronger:
  - Use uppercase and lowercase letters.
  - Include numbers and symbols.
  - Increase password length.
- Encourages secure password practices at signup.

### 3. Forgot and Reset Password
- Users can request a password reset link via email.
- Allows setting a **new secure password** after verification.
- Reset tokens are time-limited for security.

### 4. Secure Authentication
- Passwords are **hashed** before storing in the database.
- JWT-based authentication for protected routes.
- Supports cookie/session-based login.

---

## Tech Stack

| Layer           | Technology                     |
|-----------------|--------------------------------|
| Frontend        | React.js + Tailwind CSS        |
| Backend         | Node.js + Express              |
| Database        | MongoDB (via Mongoose)         |
| Authentication  | JWT, Bcrypt                    |
| Email           | Mailtrap (SMTP testing)        |
| Validation      | Express Validator, Password Strength Meter |

---

