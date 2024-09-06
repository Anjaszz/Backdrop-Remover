# Backdrop Remover

**Backdrop Remover** adalah website yang memudahkan Anda untuk menghapus latar belakang dari gambar dan memilih warna latar belakang baru dengan cepat dan efisien. Menggunakan teknologi canggih dari API [remove.bg](https://www.remove.bg/), kami menawarkan solusi sederhana untuk menghilangkan latar belakang dari foto Anda dan memberikan opsi untuk menambahkan latar belakang warna yang sesuai dengan kebutuhan Anda.

## Screenshot
![Screenshot web](/Ss/Screenshot%20(357).png)

## Fitur

- **Unggah Gambar:** Unggah gambar dari perangkat Anda untuk diproses.
- **Hapus Latar Belakang:** Gunakan teknologi API remove.bg untuk menghapus latar belakang gambar dengan akurasi tinggi.
- **Pilih Warna Latar Belakang:** Setelah latar belakang dihapus, pilih warna latar belakang baru dari palet warna yang tersedia.
- **Unduh Hasil:** Unduh gambar hasil dengan latar belakang yang telah dihapus dan warna latar belakang yang dipilih dalam format PNG.

## Teknologi yang Digunakan

- **React.js:**
- **Tailwind CSS:** 
- **remove.bg API:**

## Cara Instalasi

1. Clone repositori ini:
    ```bash
    git clone https://github.com/Anjaszz/Backdrop-Remover.git
    ```
2. Masuk ke direktori proyek:
    ```bash
    cd Backdrop-Remover
    ```
3. Instal dependensi:
    ```bash
    npm install
    ```
4. Konfigurasi API key:
- Buat file .env di root proyek dan tambahkan API Key remove.bg Anda:
    ```bash
   VITE_API_KEY = YOUR API KEY HERE
    ```
5. Jalankan aplikasi di lingkungan pengembangan:
    ```bash
    npm run dev
    ```
6. Buka [http://localhost:5173](http://localhost:5173) di browser untuk melihat aplikasi.

## Kontribusi
Saya menyambut kontribusi dari semua pengembang! Jika Anda ingin menambahkan fitur baru, memperbaiki bug, atau meningkatkan aplikasi, silakan fork repository ini dan buat pull request.