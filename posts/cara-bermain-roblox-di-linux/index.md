# Cara Bermain Roblox Di Linux


## Roblox

Oke kali ini saya akan sharing bagaimana cara memainkan game Roblox di Linux.

> [!roblox] Roblox
> Sebenarnya, untuk Roblox sendiri belum ada versi native-nya di Linux.
Jadi, untuk memainkannya dibutuhkan aplikasi pihak ketiga.
Salah satu yang cukup stabil saat ini adalah Sober.

jadi di tutorial ini saya akan sharing sedikit mengenai cara memainkan Roblox di Linux menggunakan Sober.

## Sober

**Sober** ini bisa dibilang pendekatan baru untuk menjalankan Roblox di desktop Linux.
Dia beda dari yang lain nggak kayak Wine, emulator Android, atau virtual machine.
Sober bekerja dengan membuat runtime khusus yang emang disiapkan buat kode-nya Roblox,
supaya bisa kompatibel dan jalan mulus.

Sober berjalan di atas **flatpak** dan saat ini **belum tersedia dengan binnary nya sendiri**.
Perlu dicatat juga, ++Sober ini masih proyek eksperimental.++
Yang artinya Lebih ke proyek passion daripada Software produksi.
Jadi belum didukung secara resmi oleh Roblox, dan bisa aja di-discontinue (*Tidak Dilanjutkan*) sewaktu-waktu.
Jadi, jangan kaget kalau nanti ketemu bug atau ketidakstabilan.

Tapi menariknya, banyak pengguna yang justru bilang 
performanya Sober ini bisa nyamain atau bahkan **ngalahin client Roblox di Windows**.

## Instalasi Flatpak

Sayangnya, Sober sendiri cara paling simple untuk pemasangannya adalah melalui flatpak.
Jadi saya yang anti flatpak ini harus menurunkan ego saya untuk memasang flatpak di OS yang saya gunakan sekarang. 
Untuk cara setup Flatpak sendiri bisa cek di dokumentasi resmi https://flathub.org/setup

> ### Arch Linux

Instalasi Pada Arch Linux, dan distro yang [berbasis Arch Linux](https://wiki.archlinux.org/title/Arch-based_distributions#Active)

```bash {title=sudo}
sudo pacman -S flatpak
```

> ### Debian
Instalasi Pada Debian, dan distro yang [berbasis Debian](https://distrowatch.com/search.php?basedon=Debian)

```bash {title=sudo}
sudo apt update
```

```bash {title=sudo}
sudo apt install flatpak
```

> ### Fedora

Untuk Fedora, Flatpak sudah terpasang default di **Fedora Workstation**, **Fedora Silverblue**, dan **Fedora Kinoite**.
Lalu, yang perlu dilakukan hanyalah mengaktifkan Flathub, yang merupakan cara untuk mendapatkan aplikasi Flatpak.
Flathub sudah dikonfigurasi secara default sebagai bagian dari Repositori Pihak Ketiga.

## Instalasi Sober


Kalau Flatpak sudah siap di Sistem yang kita gunakan, Kita tambahkan flathub untuk instalasi sober:

```bash {title=Terminal}
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

Jika flathub sudah terinstall, sekarang kita lanjut install Sober:

```bash {title=Terminal}
flatpak install flathub org.vinegarhq.Sober
```

{{< image src="sober-install.png" caption="Instalasi Sober" width="570px">}}

Sekarang Kalian bisa Menjalankan Sober di Search Menu Atau Bisa dengan command:

```bash {title=Terminal}
flatpak run org.vinegarhq.Sober
```

{{< image src="sober-preview.png" caption="Tampilan Sober" width="570px">}}

Lalu ikuti saya stepnya untuk menginstall Roblox.

{{< image src="sober-info.png" caption="Instruksi Sober" width="570px">}}

Setelah proses instalasi selesai, Sober akan otomatis tertutup. 

Tenang,  Kalian bisa menjalankan Sober di Search Menu atau dengan command yang sama:

```bash {title=Terminal}
flatpak run org.vinegarhq.Sober
```

{{< image src="sober-login.png" caption="Login Ke Akun Kalian" >}}

Kali ini kamu akan disuguhkan halaman login Roblox.
Kalau sudah punya akun, tinggal login. Kalau belum, saya sarankan buat akun dulu lewat browser di https://www.roblox.com/


Kalau sudah punya akun, balik lagi ke Sober dan login.
Setelah itu tinggal pilih main di map mana.

{{< image src="sober-vd.png" alt="Map: Violence District">}}

## Pengalaman Main Roblox di Linux

Sejauh ini aman-aman aja, Sober bisa menjalankan Roblox tanpa kendala. Tanpa lag, tanpa force close.

Oke mungkin sekian sharing tutorial dari saya kali ini, Jika ada kendala atau pertanyaan silahkan komentar.

## Referensi

- https://www.linuxsec.org/2025/07/cara-bermain-roblox-di-linux.html


---

> Penulis: [Adilhyz](https://github.com/adilhyz)  
> URL: https://sanrei.my.id/posts/cara-bermain-roblox-di-linux/  

