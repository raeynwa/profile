# Verifikasi portfolio showcase

**Acuan terbaru (21 Oktober 2026):** lihat `docs/stage-4-release-review.md` untuk pemeriksaan akhir Technical / Racing Red. Audit produksi terbaru melaporkan 0 temuan; audit penuh masih mencatat 5 entri pada satu rantai dependensi alat lint. Hasil di bawah merupakan arsip draf navy/teal, bukan status implementasi saat ini.

Diperbarui 19 Oktober 2026. Hasil di bawah berlaku untuk iterasi showcase navy/teal, menggantikan pemeriksaan draf terang sebelumnya. Pekerjaan lokal di branch `codex/profile-redesign`; tanpa commit, push, deployment, atau pengiriman pesan eksternal.

## Pemeriksaan yang lulus

- `npm run build`: build produksi Next.js berhasil, termasuk lint dan pemeriksaan tipe bawaan. Halaman utama diprerender statis; first-load JavaScript 128 kB menurut output build.
- `npx --offline tsc --noEmit`: lulus.
- `git diff --check`: lulus; hanya pemberitahuan LF/CRLF Windows.
- HTTP halaman utama: 200.
- `/api/download`: 200, `application/pdf`, 2.769.228 byte. CV September 2025 tetap dipertahankan.

## Browser dan interaksi

Diperiksa melalui browser dalam aplikasi menggunakan preview lokal pada port 3187. Ukuran berikut dibaca langsung dari `innerWidth` setelah viewport override.

| Lebar CSS | Overflow horizontal dokumen |
| --- | --- |
| 320 px | Tidak |
| 375 px | Tidak |
| 560 px | Tidak |
| 768 px | Tidak |
| 1024 px | Tidak |
| 1440 px | Tidak |

- Pemeriksaan lebar dilakukan dengan kedelapan kartu proyek tambahan ditampilkan.
- Menu ponsel membuka dan menutup. Escape menutup menu dan mengembalikan fokus ke tombol. Memilih Projects menutup menu.
- Tab pengalaman dapat dioperasikan lewat klik, tombol panah, dan End. Panel sesuai peran ditampilkan: engineering, Project Manager, dan product ownership.
- Pilihan galeri menampilkan keempat proyek. Next dari proyek terakhir kembali ke Tando; Previous dari Tando kembali ke labbkpi.
- Perluasan arsip menampilkan delapan proyek tambahan; tombol Show fewer mengembalikan tiga kartu.
- Dialog Parents Info menampilkan kontribusi Project Manager dan peran tim. Dialog labbkpi menampilkan pengerjaan mandiri serta cakupan setelah rilis.
- Dialog membuka sebagai modal dan mengunci scroll halaman. Escape dan tombol Close menutupnya, melepaskan scroll, dan mengembalikan fokus ke tombol pembuka.
- Pada lebar 375 px, dialog tidak memiliki overflow horizontal dan konten panjang dapat digulir.
- Screenshot asli Tando berhasil dimuat. Visual Hermes, Parents Info, dan labbkpi diberi label ilustrasi.
- Tautan email, WhatsApp, GitHub, LinkedIn, dan CV memakai tujuan yang sudah dikonfirmasi/disimpan. Tidak ada pesan dikirim selama pengujian.
- Log browser pada pemeriksaan akhir tidak menunjukkan error atau warning.
- Screenshot desktop, ponsel, dan galeri disimpan sebagai bukti visual lokal dalam folder visualizations chat.
- Preview milik agent dihentikan setelah pemeriksaan; server milik pengguna pada port 1000 tidak dihentikan.

## Konten

- Seluruh antarmuka dan metadata berbahasa Inggris; `html lang="en"`, Open Graph `en_US`. Nama produk/organisasi dipertahankan. Screenshot sumber Tando mempertahankan bahasa produk aslinya.
- Headline mengikuti pilihan Raey persis. About membahas pekerjaan saja.
- Tidak ada blok penawaran jasa, proses penjualan, atau form brief. Kontak hadir sebagai tautan ringan.
- Tidak menambahkan tanggal kerja, metrik hasil, testimoni, sertifikasi, atau profil freelance yang belum dikonfirmasi.
- Implementasi AI Tando dan pemakaian Hermes dibatasi sesuai wawancara; tidak mengklaim pengetikan kode manual atau pengembangan software otonom penuh.

## Dependensi dan batas pemeriksaan

- Next.js dan eslint-config-next sebelumnya diperbarui dari 15.5.7 ke 15.5.28. Perbaikan kompatibel `npm audit fix` diterapkan tanpa `--force`.
- Audit produksi terakhir pada iterasi sebelumnya masih melaporkan dua temuan: Next.js (moderate) dan PostCSS transitif (high). Audit belum diulang pada iterasi visual ini; input dependensi tidak berubah. Rekomendasi otomatis saat itu adalah migrasi Next.js ke 16.4.2, sebuah perubahan mayor.
- Audit penuh juga mencatat dependensi tool lint yang belum terselesaikan. Temuan tersebut belum dinyatakan selesai; tinjau sebelum deployment publik. Tidak ada klaim bahwa seluruh dependensi bebas kerentanan.
- Tidak menguji perangkat fisik, pembaca layar, pengiriman email/WhatsApp, aplikasi klien di balik autentikasi, atau keamanan aplikasi secara menyeluruh.
- Tidak mengklaim peningkatan konversi atau hasil komersial yang belum diukur. Ini iterasi desain untuk ditinjau pemilik.
