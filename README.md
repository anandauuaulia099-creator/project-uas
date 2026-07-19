# User Manager App

Aplikasi SPA sederhana untuk menampilkan dan menambahkan pengguna dengan Vue 3, Vue Router, Tailwind CSS, dan MockAPI.

## Menjalankan aplikasi

```sh
npm install
npm run dev
```

Buka URL yang ditampilkan Vite (umumnya `http://localhost:5173`).

## Build produksi

```sh
npm run build
```

Endpoint bawaan berada di `src/services/userApi.js`. Endpoint dapat diganti tanpa mengubah kode menggunakan environment variable:

```sh
VITE_API_URL=https://contoh.mockapi.io/users
```
