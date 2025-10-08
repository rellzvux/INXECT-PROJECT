# INXECT CRASH — Firebase Ready

## 🚀 Cara Deploy ke Vercel
1. Buka [Vercel.com](https://vercel.com)
2. Login → New Project → Import / drag folder ini
3. Deploy → Website langsung online

## 🧩 Firebase Setup
- Pastikan Firestore sudah aktif
- Collection: `users`
- Document ID = username
- Fields:
  - username: (string)
  - password: (string)
  - role: (string)
  - expiry: (string, format YYYY-MM-DD)
  - created: (timestamp)

## 🔐 Login
Masukkan username & password sesuai data Firestore.
