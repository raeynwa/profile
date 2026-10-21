# Arah portofolio Raey

Draf kerja, dimulai 17 Oktober 2026 dan diperbarui 21 Oktober 2026. Informasi membedakan jawaban langsung Raey, materi yang diperiksa, dan usulan editorial.

Tahap 1–4 telah selesai secara lokal pada 21 Oktober. Website berada di branch `codex/profile-redesign`, dengan beranda, empat route studi kasus, tautan proyek asli, serta metadata dan pemeriksaan akhir. Pengguna menyetujui tahap 3 sebelum tahap 4. Laporan terbaru ada di `docs/stage-4-release-review.md`; deployment belum dilakukan. Domain portofolio dikonfirmasi sebagai `https://raeynwa.my.id`.

## Acuan terkini — 20 Oktober 2026

Bagian ini menjadi acuan saat menyusun implementasi berikutnya. Catatan bertanggal 17–19 Oktober pada bagian selanjutnya merupakan riwayat; beberapa keputusan desain, tautan, dan aset di sana sudah digantikan.

- Tujuan: showcase profesional yang memperlihatkan kemampuan memahami masalah, menangani proyek menyeluruh, membuat pertimbangan teknis, dan membuktikannya lewat karya.
- UI dan materi harus memiliki identitas sendiri. Referensi Gazi dipakai untuk memahami preferensi, bukan disalin menjadi rancangan final.
- Gaya yang disetujui: **Technical / Racing Red**, latar utama hitam. CTA merah gelap dengan teks putih yang terbaca; grafik GitHub memakai nuansa merah.
- Acuan warna dan komposisi yang disetujui: `C:/Users/Raey/.codex/visualizations/2026/10/17/01a14aa5-774f-7e42-bc73-4e32fbcb9cac/portfolio-racing-red-refined.html`. Draf detail beranda dan studi kasus Tando untuk review: `C:/Users/Raey/.codex/visualizations/2026/10/17/01a14aa5-774f-7e42-bc73-4e32fbcb9cac/portfolio-detail-preview.html`.
- Identitas utama: nama, tipografi, dan visual karya. About fokus pada pekerjaan.
- Bahasa situs: Inggris saja. Headline persis **Full-Stack Engineer | Next.js, NestJS & Laravel | System Architect**.
- Alur beranda: intro → selected work → about → GitHub activity → contact. **Explore selected work** menggulir ke section karya; kartu proyek membuka halaman studi kasus tersendiri.
- Ikon GitHub dan LinkedIn ditempatkan di area hero, di bawah headline pada sisi kiri.
- Kontak: email, WhatsApp, dan LinkedIn. Tautan komunikasi Upwork/Fiverr dihilangkan.
- Copy kontak yang disetujui: **Have an idea or a collaboration in mind?** / **Let's talk it through.**
- Email `raeynwa@gmail.com`; WhatsApp `https://wa.me/6287792067999`; LinkedIn `https://www.linkedin.com/in/raey-m-yunus-32b470233/`; GitHub `https://github.com/raeynwa`.
- Unduh CV PDF terbaru dari `E:/Raey/Work/Raey/profile/output/pdf/CV_Raey_Maulana_Yunus_Updated_2026.pdf`.
- Gunakan istilah **contributions**. Angka 708 untuk tahun 2026 adalah snapshot yang diberikan Raey dan dapat berubah; aktivitasnya terutama dari repositori privat pekerjaan dan freelance. Tidak mengklaim kontribusi open source atau menambahkan daftar repositori publik.
- Pembaruan setelah rilis, 21 Oktober: pengguna mengaktifkan private contributions anonim di profil publik dan meminta rentang **12 bulan terakhir**. Kalender aktif kini mengambil total, tanggal, jumlah harian, dan level warna dari grafik publik GitHub dengan cache satu jam; snapshot 708 tidak lagi dirender. Detail di `docs/github-activity.md`.
- Demo Tando dan labbkpi disediakan sebagai tombol nonaktif **Demo in preparation**. Pengelolaan demo publik dikerjakan pada sesi/scope terpisah.
- URL proyek asli dapat dicantumkan setelah dikonfirmasi. URL localhost dan repo privat tidak menjadi tautan publik pada studi kasus.
- URL dikonfirmasi pada 21 Oktober: Tando `https://tando.raeynwa.my.id`, Parents Info `https://api.almasoem.com`, dan labbkpi `https://labbkpi.id`. Parents Info khusus akun orang tua siswa; labbkpi memerlukan akun. Browser memperlihatkan landing page Tando, login labbkpi, serta halaman pemeliharaan Parents Info pada saat diperiksa. Hermes tetap lokal tanpa tombol live.
- Branch kerja portofolio: `codex/profile-redesign`. Tahap persiapan aset ini tidak mengubah kode aplikasi portofolio atau source proyek asli.

### Materi empat studi kasus

Tahap 1 setelah persetujuan desain Tando: labbkpi, Parents Info, dan Tim AI Hermes sudah disusun menjadi halaman studi kasus lengkap dengan pola masalah → kontribusi → alur → keputusan → galeri → hasil/scope. Materi yang sesuai pratinjau tersedia di `output/portfolio-design/case-studies.en.md` dan `case-studies.json`. Raey meminta pengecekan visual setiap tahap sebelum berlanjut; implementasi aplikasi merupakan tahap 2, tautan proyek asli tahap 3, dan pengujian akhir tahap 4.

Acuan aset: `output/portfolio-assets/README.md`. Setiap folder proyek berisi naskah Inggris, manifest, keterangan asal data, dan screenshot UI asli.

- **Tando:** tujuh gambar, data fiktif; peran dalam ide produk, arsitektur, pengarahan implementasi AI, pengujian, dan deployment. Teknologi mencakup Next.js, NestJS, PostgreSQL, dan **Docker**, dikonfirmasi langsung Raey pada 20 Oktober.
- **labbkpi:** enam gambar terpilih, data fiktif; delivery mandiri, relasi data MySQL bersama/per instrumen, QA, VPS, CI/CD, serta komunikasi dan dukungan klien. Aturan perhitungan dan interpretasi mengikuti keilmuan BK dari klien.
- **Parents Info:** lima gambar, data fiktif; Raey sebagai Project Manager, riset pengguna, analisis dan proses bisnis. Tim mengerjakan ERD, coding, QA, dan dokumen teknis.
- **Tim AI Hermes / Mission Control:** empat gambar terpilih dari aplikasi lokal dengan data nyata, sesuai izin eksplisit Raey pada 20 Oktober. Raey menangani seluruh proses dari ide, perencanaan, development, hingga deployment lokal Docker. Penggunaan nyata yang dikonfirmasi: invoice dan laporan progres proyek. Framework tetap diatribusikan kepada Hermes; Mission Control adalah pemantauan read-only dan kantor 3D adalah visualisasi status. Tidak mengklaim delivery proyek klien secara otonom.

Data nyata Hermes tidak memperluas izin untuk menampilkan kredensial atau isi keuangan klien. Gambar yang dipilih hanya memperlihatkan roster/status, kantor virtual, dan detail tugas Tando milik Raey. Tidak ada invoice atau percakapan mentah yang dibuka untuk capture.

## Riwayat catatan 17–19 Oktober 2026

## Tujuan dan audiens

### Status arah desain dan branch

- Pada 18 Oktober 2026, Raey meminta arah visual yang berbeda dari draf terang dengan aksen biru dan akan mencari inspirasi terlebih dahulu.
- Pada 19 Oktober, Raey memilih portfolio showcase tanpa hard selling, dengan referensi https://www.gazijarin.com/#projects. Ia menyukai cara penyajian profil/proyek dan visual gelapnya. Keputusan ini menggantikan penundaan arah visual sebelumnya.
- About hanya membahas pekerjaan; Raey tidak ingin menambahkan minat atau kegiatan pribadi.
- Implementasi: navy/teal, pengantar personal, About profesional, tab pengalaman per proyek, galeri empat proyek, delapan proyek tambahan, dan kontak ringan. Blok penawaran layanan, proses penjualan, serta form brief dihapus.
- Screenshot Tando berasal dari aset implementasi lokal milik proyek. Visual Parents Info, Hermes, dan labbkpi merupakan ilustrasi yang ditandai.
- Pekerjaan sekarang berada pada branch `codex/profile-redesign`.
- Sebelumnya perubahan dibuat di working tree saat `master` aktif, tanpa commit atau push. Branch terpisah dibuat dengan mempertahankan semua perubahan. Saat pemisahan, `HEAD`, `master`, dan `origin/master` sama-sama berada di commit `c135d1fef5b4ab323f697607e3bcdb78be4e9d14`.

Raey ingin memperoleh proyek dari individu, UMKM, bisnis, sekolah, dan institusi, baik lokal maupun internasional. Pengunjung juga bisa datang dari Upwork atau platform freelance lainnya. Jangan membatasi positioning pada pendidikan hanya karena mayoritas proyek lama berada di bidang itu.

Usulan positioning: partner pengembangan aplikasi web yang dapat memahami kebutuhan, menyusun sistem, mengarahkan implementasi, menguji hasil, dan menyiapkan aplikasi untuk digunakan. Bukti utama harus berupa keputusan dan pekerjaan nyata, bukan sekadar daftar framework.

Raey memilih **bahasa Inggris saja** untuk seluruh website pada 18 Oktober 2026. Keputusan ini menggantikan usulan awal situs dwibahasa. Percakapan dan catatan internal dapat tetap berbahasa Indonesia. Tautan profil Upwork dan Fiverr belum diberikan.

## Informasi yang dikonfirmasi langsung

### Tando — produk pribadi yang sudah digunakan

- Pemicu: Raey menerima dokumen internal kantor untuk diisi dan ditandatangani. Tautan dokumen ternyata dapat dibuka siapa pun yang memiliki URL.
- Kekhawatiran: gambar tanda tangan yang sama digunakan dalam administrasi lain dan berpotensi dipakai ulang tanpa konteks.
- Solusi: QR yang menuju verifikasi tanda tangan, dengan watermark, peruntukan, URL dokumen asli, dan batas waktu.
- Tujuan: mengurangi risiko penyalahgunaan; jangan menjanjikan bahwa penyalinan atau penyalahgunaan dapat dihilangkan sepenuhnya.
- Peran Raey: konsep produk, alur pengguna, arsitektur, penentuan dependensi, pengarahan pengerjaan, pengujian, dan deployment.
- AI dipakai untuk diskusi produk dan kemungkinan benar/salah, riset produk serupa, penyusunan dokumen berdasarkan template milik Raey, serta seluruh implementasi kode sesuai arahannya.
- Konsistensi dokumentasi lintas proyek merupakan bagian dari metode kerja Raey.
- Pengujian dan deployment dilakukan Raey sendiri.
- Jangan menggambarkan pekerjaan ini sebagai pengetikan seluruh kode secara manual.

Sumber tambahan: chat “Perbarui brief landing page Tando” dan PRD lokal Tando. PRD membatasi produk sebagai alat dokumen biasa, bukan penyedia tanda tangan elektronik tersertifikasi. Kemampuan pencabutan, perpanjangan, dan riwayat juga ditemukan dalam konteks proyek tersebut. Target KPI di dokumen produk bukan hasil yang sudah tercapai.

### Tim AI pribadi berbasis Hermes — proyek terpisah

- Tando dan tim AI Hermes adalah dua proyek berbeda.
- Penggunaan nyata yang dikonfirmasi: membuat invoice klien dan laporan progres proyek.
- Materi teknis pendukung: README Hermes Tim AI dan PRD Mission Control.
- Sistem memakai Hermes, Telegram, routing model, dan Docker. Mission Control adalah dashboard pemantauan; jangan mengklaim semua aksi pengelolaan agen dilakukan dari dashboard.
- Posisikan sebagai integrasi dan pengembangan alur kerja di atas Hermes, bukan penciptaan model atau framework Hermes.
- Jangan mengklaim tim telah menyelesaikan proyek software secara otonom dari awal sampai akhir; penggunaan tersebut belum dikonfirmasi.
- Jangan memakai angka penghematan waktu, akurasi, atau jumlah dokumen tanpa bukti.

### Kontak dan preferensi diskusi

- Email `raeynwa@gmail.com` dan WhatsApp yang ada di repository dikonfirmasi masih aktif.
- Penggalian informasi dilakukan satu pertanyaan per tahap, sesuai preferensi Raey.

### Identitas profesional yang dipilih

- Headline yang diminta Raey, dipakai persis: **Full-Stack Engineer | Next.js, NestJS & Laravel | System Architect**.
- Headline ini juga dipakai Raey di Upwork, Fiverr, dan LinkedIn.
- Gunakan headline tersebut untuk identitas profesional website. Nama tempat kerja utama tidak perlu ditebak atau ditambahkan berdasarkan riwayat lama.
- Jabatan **Project Manager** tetap ditulis sebagai peran spesifik pada studi kasus Parents Info.
- Sumber tunggal headline di implementasi: `identity.headline` pada `src/lib/profile.ts`, dipakai pada pengantar dan metadata.
- Bahasa website, catatan proyek, label aksesibilitas, dan metadata menggunakan bahasa Inggris. Nama organisasi dan produk dipertahankan.

### Layanan yang dikonfirmasi

Raey ingin menawarkan ketiga layanan berikut kepada klien baru:

1. Pengembangan aplikasi dari awal sampai rilis.
2. Konsultasi dan analisis sistem.
3. Pengelolaan proyek dan tim.

Ketiga kemampuan ini ditunjukkan lewat pengalaman dan proyek. Versi showcase tidak menampilkan blok penawaran atau form layanan. Pendidikan, bisnis, UMKM, dan individu menjadi konteks penerapan, bukan pembatas layanan.

Pemetaan bukti: labbkpi mendukung layanan pengembangan menyeluruh; Parents Info mendukung analisis dan project management; Tando mendukung pengarahan produk, arsitektur, implementasi berbantuan AI, pengujian, dan deployment.

## Proyek unggulan yang dipilih Raey

1. Tando.
2. Tim AI pribadi berbasis Hermes.
3. Al Ma’soem Parents Info.
4. labbkpi — platform digitalisasi praktik psikotes di laboratorium UIN Banten, sesuai nama yang diminta Raey dan domain `labbkpi.id`.

### Parents Info — penjelasan fitur keuangan dari Raey

- Sebelumnya pembayaran berupa transfer ke VA masing-masing siswa dengan nominal bebas.
- Raey mengembangkan fitur tagihan dengan nominal yang ditentukan Divisi Keuangan Yayasan.
- Pembayaran mengikuti nominal tagihan, sehingga tidak lebih atau kurang.
- Wali kelas dan sekolah tidak lagi perlu menyampaikan informasi tagihan secara terpisah kepada orang tua.
- Payment gateway menyediakan pilihan kanal pembayaran.
- Notifikasi otomatis dikirim melalui WhatsApp dan email orang tua; Raey menyebut pengiriman realtime.
- Informasi akademik juga mencakup kehadiran, prestasi, poin pelanggaran, dan hafalan siswa.
- Tidak menambahkan angka penghematan waktu, volume transaksi, atau penurunan kesalahan yang belum diberikan.
- Dikerjakan bersama tim.
- Jabatan Raey saat proyek Parents Info: **Project Manager**.
- Peran Raey: menentukan arah sistem, riset awal pengguna, analisis, dan perumusan proses bisnis untuk tim.
- Tim: pembuatan ERD, coding, QA, serta dokumen teknis setelah pengembangan.
- Jangan mengklaim Raey menulis sendiri seluruh kode atau melakukan sendiri QA Parents Info.

### labbkpi — digitalisasi alat praktik psikotes

- Nama publik yang diminta Raey: **labbkpi**, mengikuti domain `labbkpi.id`.
- Berawal dari pengajuan digitalisasi alat praktik mahasiswa di sebuah laboratorium UIN Banten.
- Fokus digitalisasi: psikotes yang umumnya menggunakan lembar kertas agar dapat dikerjakan melalui komputer dan HP.
- Hasil tes dapat diperoleh langsung setelah pengerjaan, menurut penjelasan Raey.
- Pengelola juga dapat mengunggah Excel berisi hasil tes yang perlu diolah. Jangan mengasumsikan semua data harus berasal dari pengerjaan tes langsung di platform.
- Raey mengonfirmasi bahwa pengembangan labbkpi ditangani sendiri.
- Tanggung jawab langsung: analisis, penyusunan dokumen hasil analisis, penentuan arsitektur, pengembangan, pengujian, deployment, aspek keamanan siber, dan layanan pengguna setelah rilis.
- Cakupan tersebut mendukung narasi kepemilikan seluruh siklus pengembangan dan operasional pascarilis. Tidak ada klaim sertifikasi keamanan, hasil audit/pentest, atau jaminan bebas kerentanan yang diberikan.
- Metode implementasi AI yang dijelaskan untuk Tando tidak otomatis diasumsikan berlaku pada labbkpi.
- Belum ada angka waktu pengolahan, jumlah peserta, atau peningkatan akurasi yang diberikan.

Jenis asesmen yang disebutkan pada portofolio sebelumnya dan stack proyek institusi tetap dipertahankan sebagai informasi awal. Hasil terukur dan izin screenshot masih perlu didalami. Dua proyek institusi lama menjadi proyek unggulan, sementara delapan proyek lainnya tetap tersedia sebagai proyek tambahan.

## Perubahan konten dan pengalaman pengunjung

- Pengantar memperkenalkan Raey dan bidang pekerjaannya dengan bahasa personal.
- Empat proyek unggulan dapat dijelajahi tanpa mengunjungi situs eksternal.
- Tiap proyek memiliki konteks dan cakupan sistem, ditambah peran jika sudah terkonfirmasi.
- Tando menggunakan screenshot website implementasinya. Tiga proyek unggulan lain memakai ilustrasi yang ditandai. Tidak menampilkan tanda tangan asli, data siswa, informasi klien, atau invoice nyata.
- Teknologi mendukung bukti pengerjaan dan tidak menjadi bagian utama penawaran.
- Kemampuan engineering, analisis/arsitektur, dan project management hadir melalui tab pengalaman berbasis proyek.
- CV menjadi informasi pendukung; pengunjung diarahkan untuk menjelajahi proyek.
- Kontak berupa email dan tautan profil/WhatsApp. Tidak ada form brief atau pengiriman pesan otomatis.
- Tidak memasang testimoni, metrik keberhasilan, logo dukungan, harga, tenggat, atau janji dukungan yang belum dikonfirmasi.
- Tanggal pekerjaan lama yang belum diperbarui tidak dipresentasikan sebagai posisi sekarang.

## Temuan audit tautan

Pemeriksaan awal 17 Oktober 2026, berdasarkan hasil alat web; kegagalan akses tidak dengan sendirinya membuktikan sebuah situs sudah tidak aktif.

- `labbkpi.id`: tidak dapat diakses alat riset.
- `pmb.masoemuniversity.com`: alat menerima respons 401.
- `sips.almasoem.com`: alat menampilkan halaman “The website has been stopped”.
- `pos.koperasimbs.com`: tidak dapat diakses alat riset.
- Sumber resmi Ma’soem menyebut domain PMB `.ac.id` dan `.com` pada materi berbeda; domain proyek tidak diganti berdasarkan dugaan.

Sumber resmi pendukung konteks pendaftaran, bukan bukti kontribusi Raey:

- [Pendaftaran mahasiswa baru 2025/2026, Ma’soem University](https://masoemuniversity.ac.id/berita/pendaftaran-mahasiswa-baru-gelombang-1-tahun-akademik-20252026-resmi-dibuka/).
- [Informasi pendaftaran, Ma’soem University](https://masoemuniversity.ac.id/artikel/siapa-saja-yang-berhak-mendapatkan-info-beasiswa-dari-kampus/).

## Pertanyaan lanjutan

Tanyakan satu per satu, jangan mengirim seluruh daftar sekaligus:

1. Tanggapan Raey terhadap iterasi showcase gelap berdasarkan referensi Gazi Jarin.
2. Kapasitas dan bentuk kolaborasi untuk proyek baru.
3. labbkpi: penggunaan aktual dan hasil yang dapat dibuktikan.
4. Parents Info dan labbkpi: hasil terukur dan screenshot yang boleh dibuka.
5. URL profil Upwork dan Fiverr jika ingin ditautkan.

## Prioritas setelah wawancara

1. Tinjau penyajian proyek dan salinan bahasa Inggris pada iterasi showcase.
2. Tambahkan bukti visual asli yang boleh dipublikasikan, dengan data disamarkan jika perlu.
3. Tinjau draf bahasa Inggris, termasuk metadata dan label kontak. Tidak menambah pilihan bahasa Indonesia.
4. Tambahkan hasil yang terverifikasi dan testimoni berizin jika tersedia.
5. Konfirmasi domain produksi sebelum menambah canonical, hreflang, dan sitemap.
6. Tinjau hasil audit dependensi sebelum deployment; pembaruan mayor tidak dipaksakan dalam draf desain ini.
