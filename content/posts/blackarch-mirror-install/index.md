---
title: "BlackArch Mirror Install"
description: "BlackArch adalah sebuah repositori perangkat lunak BlackArch Linux yang berisi berbagai tools."
date: 2023-09-22
draft: false
tags: ["Linux","ArchLinux","BlackArch","Mirrors"]
categories: ["Tutorial","OS"]
summary: "Di Arch Linux, mirror yaitu repositori paket perangkat lunak yang memungkinkan pengguna mengunduh dan memperbarui software dengan lebih cepat dan stabil. Mirror tersebar di berbagai server di seluruh dunia, memastikan beban jaringan lebih merata dan kecepatan unduhan optimal."
---

![](./already.png)

## Pendahuluan
Dalam konteks BlackArch, mirror adalah salinan repositori perangkat lunak BlackArch Linux, yang berisi berbagai alat keamanan dan peretasan. Mirror ini memungkinkan pengguna untuk mengunduh dan menginstal paket BlackArch dengan cepat.


![](./ba-slider.png)

## Instalasi Mirror BlackArch.

{{< alert icon="triangle-exclamation" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}}
Installer ini hanya bekerja untuk [<abbr title="Arch Linux">*Arch*</abbr>](https://archlinux.org), dan <abbr title="Based Distro">Distro</abbr> basenya.
{{< /alert >}}

Download file dari https://blackarch.org/strap.sh dengan menggunakan curl

    curl -O https://blackarch.org/strap.sh

Verifikasi jumlah SHA1

    echo 5ea40d49ecd14c2e024deecf90605426db97ea0c strap.sh | sha1sum -c

Mengatur bit eksekusi

    chmod +x strap.sh

Jalankan strap.sh

    sudo ./strap.sh

Aktifkan multilib mengikuti [wiki](https://wiki.archlinux.org/index.php/Official_repositories#Enabling_multilib) dan jalankan:

    sudo pacman -Syu

## Setelah Instalasi
Setelah instalasi, Anda dapat mencoba beberapa alat seperti pentesting, jaringan, eksploitasi dan lainnya. kemudian pilih alat yang Anda sukai dan juga Anda butuhkan.

Anda juga dapat melihat kategori blackarch dengan menggunakan perintah

    sudo pacman -Sg | grep blackarch

    sudo pacman -S blackarch-<kategori>

![](./ba-social.png)

Dalam artikel hari ini, saya menjelaskan cara menginstal BlackArch Mirror. BlackArch Mirror adalah Mirror pilihan saya dan saya menggunakannya. Jika Anda masih bingung, Anda dapat melihat [Youtube](https://youtube.com/@adilhyz) Saya. またね!