---
title: "Spicetify Tool Untuk Pecinta Gratisan"
description: "Pasang Spicetify lebih hemat, simpel dan langsung bikin hari makin asik. Jadi, siapin komputermu dan nikmati Spotify-mu jadi lebih berkelas! ☕🎶"
date: 2023-11-23
draft: false
tags: ["Windows","Linux","ArchLinux","Debian","Ubuntu","LinuxMint","Spotify"]
categories: ["Music","Tools","Tutorial","OS"]
---

![pendahuluan](./3961-spotify.png "Spotify merupakan alat pemutar musik online populer, namun pengguna biasa dibatasi oleh iklan yang menggagu lagi asik asiknya ngemusik eh malah muncul iklan kalau gini mah mending banned aja iklan nya wkwkwk.")

Namun untuk memberantas iklan kita arus mengupgrade pengguna ke premium yang notabene nya keluar duit, duit lagi duit lagi mana token listrik udah mau habis lagi, kata gua mah mending pasang spicetify kalau ada yang gratis kenapa harus beli :v

Eits balik ke topik Spicetify merupakan tool 
bebas iklan sama seperti premium pada umumnya bedanya spicetify bisa kustomisasi tema biar playlist-mu ikutan eksis.

# Instalasi 
## 1. Linux
![typing](./🐧.png)
### 1.1 Arch Based

- list based [Arch](https://wiki.archlinux.org/title/Arch-based_distributions)

*Sedikit ingpo*, Based Arch di wiki resminya ***kurang lengkap***. jika anda menggunakan distro berbasis Arch yang tidak ada di list itu **work** asalkan ada manajemen paket `pacman`.

Instalasi paket aur
```sh
yay -S spicetify-cli
```


Selanjutnya, berikan **izin akses** kepada Spicetify untuk memoles instalasi

```sh
sudo chmod a+wr /usr/share/spotify

sudo chmod a+wr /usr/share/spotify/Apps -R
```

Setelah itu, masuk ke dalam folder `~/.config/spicetify`

Dan jalankan
```sh
spicetify backup apply enable-devtools
```
setelah semua terbackup selamat spotify anda telah ~~terhapus~~ :v

jk, spotify mu sekarang masih dalam konfigurasi bawaan disini ada dua metode yakni metode manual dengan mengedit beberapa konfigurasi spicetify saya tidak merekomendasikan itu, maka saya menyarankan menggunakan spicetify marketplace agar Kita bisa mengkombinasi beberapa kustomisasi ea (͠≖ ͜ʖ͠≖)

Lanjut ke pemasangan **spicetify-marketplace**
```sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```

### 1.2 Debian Based

- list based [Debian](https://en.wikipedia.org/wiki/Category:Debian-based_distributions)

Jika anda menggunakan distro berbasis Debian yang tidak ada di list itu **work** asalkan ada manajemen paket `apt`.

Pertama, jalankan skrip untuk mengunduh dan menginstal Spicetify cihuy

```sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.sh | sh
```

Selanjutnya, berikan akses izin kepada Spicetify untuk memoles instalasi

```sh
sudo chmod a+wr /usr/share/spotify

sudo chmod a+wr /usr/share/spotify/Apps -R
```

Untuk melihat konfig gunakan `spicetify -c`, Lalu masuk ke folder `~/.config/spicetify`

Dan jalankan
```sh
spicetify backup apply enable-devtools
```

Setelah terbackup semua Selamat spotify anda telah ~~dibanned~~ :v

jk(눈_눈), Dan Ya spotify mu sekarang masih dalam konfigurasi bawaan sebelumnya ada dua metode yakni Pertama metode manual dengan mengedit beberapa konfigurasi spicetify saya tidak merekomendasikan itu, Dan kedua saya menyarankan menggunakan spicetify marketplace agar Kita bisa mengkombinasi beberapa kustomisasi (◡_◡҂) ᕤ

Lanjut ke pemasangan **spicetify-marketplace**
```sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```

### 1.3 Distro Lain
![otherlinux](./othlinux.png)

Untuk distro lain seperti `Alpine Linux`, `NixOS`, `Gentoo`, dan `FreeBSD`. metode instalasi untuk Spicetify mirip dengan [Debian](#12-debian-based), tetapi berbeda berdasarkan manajemen paket dan perintah root yang digunakan pada setiap distro. Penting untuk menginstal paket dependensi yang diperlukan dan membaca dokumentasi distro dan Spicetify secara menyeluruh untuk instruksi yang lebih spesifik.

Kenapa gak ada ~~`fedora`~~?

ya gw males aja :v

Intinya kalau `fedora` masih bisa, sama seperti [Debian Based](#12-debian-based).

## 2. Windows
![wedus](./winanim.png)

Ini adalah metode instalasi yang kami rekomendasikan untuk sebagian besar pengguna. Ini adalah cara tercepat dan paling dapat diandalkan untuk menginstal Spicetify. kalau gw sih enggak ಠ_ಠ

```sh
iwr -useb https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.ps1 | iex
```

Dan jalankan untuk membackup spotifymu
```sh
spicetify backup apply enable-devtools
```

spotify mu sekarang masih dalam konfigurasi bawaan, saran saya menggunakan spicetify marketplace kita bisa menggabungkan berbagai kustomisasi untuk tampilan yang lebih personal dan disesuaikan.

Lanjut ke pemasangan **spicetify-marketplace**

```sh
iwr -useb https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.ps1 | iex

```

## 3. MacOS
![MacOs](./apperu.png)


```sh
brew install spicetify/homebrew-tap/spicetify-cli
```

Jalankan untuk membackup spotifymu
```sh
spicetify backup apply enable-devtools
```

Spicetify mu sudah terinstall di spotify tapi masih polos bawaan, nih. Saya merekomendasikan Spicetify Marketplace, biar Spotify mu makin kemren dan sesuai selera. langsung ae (͡ ° ͜ʖ ͡ °)

```sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```

## Pra-Instalasi

Sekarang Anda bisa mengkombinasikan beberapa kustomisasi berupa Ekstensi, Tema, Snippet, Dan juga Apps. Penting bahwa semua ini gratis tidak ada biaya tambahan sedikit pun. Semoga informasi ini berguna dalam memaksimalkan musik Anda ¬‿¬