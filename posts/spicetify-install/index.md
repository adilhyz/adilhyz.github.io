# Spicetify Tool Untuk Spotify Premium


## Spotify

**Spotify** adalah salah satu pemutar musik online paling populer. Namun, Pengguna biasa sering diganggu oleh <u>iklan yang berkepanjangan</u>. lagi asik-asiknya dengerin musik, eh tiba-tiba nongol iklan. Kalau begini terus basmi saja semuanya.

<!-- {{< image src="./3961-spotify.png" alt="Spotify" >}} -->

> [!NOTE]
> Untuk menghilangkan iklan, kita diharuskan upgrade Pengguna biasa ke Premium alias keluar duit lagi, duit lagi. Padahal token listrik aja udah mau habis, kan? Nah, di sinilah [**Spicetify**](#spicetify) jadi solusi Alternatif. Kalau ada yang gratis, kenapa harus bayar? :D

## Spicetify

{{< image src="spicetify.png" alt="Spicetify" width="170px">}}

**Spicetify** merupakan tool command-line alat baris perintah multiplatform untuk menyesuaikan klien Spotify resmi, Yang dimana bisa meng-**custom** Tampilan Bawaan Yaitu [Tema](https://github.com/spicetify/spicetify-themes/blob/master/THEMES.md), Ekstensi, Dan Snippest biar playlist-mu ikutan kece. Ada Juga Extensi yang yang bisa membasmi iklan sama mirip dengan **Premium** pada umumnya.

## Instalasi

> [!TIP] {{< typeit tag=span >}} Info{{< /typeit >}}
> Spicetify Support Multiplatform, Jadi Install Sesuai Kebutuhan Platform.

> ### Windows

Instalasi yang direkomendasikan untuk menginstal Spicetify. bagi Pengguna Windows.

```powershell {title="User"}
iwr -useb https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.ps1 | iex
```

Setelah terinstall Kita Pergi ke directory Spicetify di `%appdata%\spicetify`

```powershell {title="User"}
cd %appdata%\spicetify
```

Lalu Backup Spotify-mu terlebih dahulu

```powershell {title="User"}
spicetify backup apply enable-devtools
```

Spotify sekarang masih dalam konfigurasi Spicetify bawaan, saran saya menggunakan [spicetify marketplace](https://github.com/spicetify/marketplace) kita bisa menggabungkan berbagai kustomisasi untuk tampilan yang lebih personal dan disesuaikan.

Lanjut ke pemasangan [**spicetify-marketplace**](https://github.com/spicetify/marketplace)

```powershell {title="User"}
iwr -useb https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.ps1 | iex

```

> ### MacOS

Instalasi Spicetify bagi Pengguna MacOS.

```zsh {title="User"}
brew install spicetify/homebrew-tap/spicetify-cli
```

**Backup** Spotify-mu
```zsh {title="User"}
spicetify backup apply enable-devtools
```

**Spicetify** sudah terinstall di Spotify dalam konfigurasi bawaan, Saya sarankan [spicetify marketplace](https://github.com/spicetify/marketplace), Supaya bisa menggabungkan berbagai kustomisasi untuk tampilan yang lebih kece dan disesuaikan.

```zsh {title="User"}
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```

> ### Linux

### [Arch Based](https://wiki.archlinux.org/title/Arch-based_distributions)

Disini Jika kalian lebih suka dengan AUR packages maka bisa dengan **AUR** 

{{< tabs type="segment" >}}
{{% tab title="With **AUR**" %}}


```sh {title="Terminal"}
yay -S spicetify-cli
```

Berikan **izin akses** directory Spotify untuk mengeksekusi Spicetify.

```sh {title="Terminal"}
sudo chmod a+wr /opt/spotify

sudo chmod a+wr /opt/spotify/Apps -R
```

Backup Spotify, Untuk memberikan **izin akses** directory Spotify untuk mengeksekusi Spicetify.

```sh {title="Terminal"}
spicetify backup apply enable-devtools
```

setelah semua terbackup Spotify mu sekarang masih dalam konfigurasi bawaan Disini saya menggunakan spicetify marketplace agar Kita bisa mengkombinasi beberapa kustomisasi, 

> [!QUESTION] Kenapa tidak menginstall Tema dan Ekstensi Manual saja
> Karena disini lebih mudah dan **UI**/**UX** nya lebih friendly di semua Pengguna, <u>**Tidak disarankan**</u> untuk instalasi manual. tapi boleh saja jika ngulik untuk menambah pengalaman.

Lanjut ke pemasangan **spicetify-marketplace**
```sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```

{{% /tab %}}
{{< /tabs >}}

### [Debian Based](https://en.wikipedia.org/wiki/Category:Debian-based_distributions)

> [!NOTE]
> Menggunakan distro berbasis Debian yang tidak ada di list itu **work** asalkan ada manajemen paket `apt`

Pertama, unduh Installer menggunakan `curl`

```sh {title=Terminal}
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.sh | sh
```

Berikan **izin akses** directory Spotify untuk mengeksekusi Spicetify.

```sh {title=Terminal}
sudo chmod a+wr /opt/spotify

sudo chmod a+wr /opt/spotify/Apps -R
```


Backup Spotify, Untuk memberikan **izin akses** directory Spotify untuk mengeksekusi Spicetify.

```sh
spicetify backup apply enable-devtools
```

Untuk melihat config `spicetify -c` Untuk detailnya Lihat ke folder `~/.config/spicetify`. 
setelah semua terbackup Spotify mu sekarang masih dalam konfigurasi bawaan Disini saya menggunakan spicetify marketplace agar Kita bisa mengkombinasi beberapa kustomisasi, 

> [!QUESTION] Kenapa tidak menginstall Tema dan Ekstensi Manual saja
> Karena disini lebih mudah dan **UI**/**UX** nya lebih friendly di semua Pengguna, <u>**Tidak disarankan**</u> untuk instalasi manual. tapi boleh saja jika ngulik untuk menambah pengalaman.

Lanjut ke pemasangan **spicetify-marketplace**
```sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```

### Distro Lain
{{< image src="othlinux.png" alt="Other Distro" width="170px">}}

Untuk instalasi Spicetify pada distro lain seperti `Alpine Linux`, `NixOS`, `Gentoo`, dan `FreeBSD`. mirip dengan [Debian](#debian-based), tetapi berbeda berdasarkan manajemen paket dan perintah **root** yang digunakan pada setiap distro. Penting untuk menginstal paket dependensi yang diperlukan dan membaca dokumentasi distro dan Spicetify secara menyeluruh untuk instruksi yang lebih spesifik.

Kalau `fedora` masih bisa, sama seperti [Debian Based](#12-debian-based).

## Theme, Extension, Snippets

{{< image src="marketplace.webp" caption="[spicetify marketplace](https://github.com/spicetify/marketplace)" width="570px">}}

> [!TIP]
> Saya sarankan untuk segera menginstall **Adblock** segera untuk membasmi iklan berkepanjangan.

Disini kita Disajikan dengan UI Yang Ramah Pengguna. Ekstensi, Tema, Snippet, Dan juga Apps. Penting bahwa semua ini gratis tidak ada biaya tambahan sedikit pun. Semoga informasi ini bermanfaat dalam memaksimalkan Pengalaman mendengarkan musik Anda

## Referensi

- https://www.omgubuntu.co.uk/2022/01/spicetify-change-spotify-app-theme


---

> Penulis: [Adilhyz](https://github.com/adilhyz)  
> URL: https://sanrei.my.id/posts/spicetify-install/  

