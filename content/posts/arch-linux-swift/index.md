+++
author = "Sanrei Adilhyz"
title = "Arch Linux Swift"
date = "2022-09-22"
description = "Mari kita lihat kekuatan Swift di sisi server."
tags = [
    "linux",
]
categories = [
    "programming",
    "linux",
]
+++

![](https://cdn-images-1.medium.com/max/2400/1*1uTQIR_1grk5niRdg5jQ-w.jpeg)

Swift adalah bahasa pemrograman sumber terbuka, kuat, dan didesain dengan indah yang dikembangkan oleh Apple. Setiap pengembang iOS membuat aplikasi yang indah dengan memanfaatkan fitur-fitur Swift yang indah. Namun dalam blog hari ini, kita akan membahas tentang manfaat sisi server dari Swift, bukan tentang iOS.

## Jadi apakah Vapor ini?

Ini adalah kerangka kerja web HTTP paling populer yang ditulis dalam bahasa Swift (22,1 ribu bintang di Github saat artikel ini ditulis). Ini memungkinkan Anda untuk menulis situs web, API, dan proyek cloud dengan Vapor. Jika Anda sudah mengetahui bahasa pemrograman Swift, Anda bisa mengembangkan proyek backend tanpa harus belajar bahasa lain. Karena ditulis dalam bahasa Swift, kinerjanya tinggi, dapat berjalan pada distribusi macOS dan Linux.

## Instalasi

## Instalasi untuk macOS

Ketika menulis blog ini, saya bermaksud menginstalnya untuk Linux, tetapi Anda tidak boleh mengabaikan platform yang sebenarnya. Saya akan mengasumsikan bahwa Anda telah menginstal Xcode dan Brew di komputer Anda.

Yang harus kita lakukan adalah menyeduh dan memasukkan Vapour.

    brew install vapor

Anda juga dapat memeriksa apakah ia berfungsi dengan parameter - help untuk memeriksa apakah ia terinstal tanpa masalah.

    vapor --help

## Instalasi untuk Arch Linux

Berikut adalah langkah-langkah untuk mengembangkan di Linux;

* Editor teks untuk menulis kode Swift. Saya lebih suka menggunakan Visual Studio Code.

* Paket Swift yang cocok untuk distribusi Linux Anda dan

* Mengkompilasi Vapor setelah menginstal Swift

Pertama, siapkan editor teks favorit Anda. Karena saya menggunakan Arch Linux di komputer saya, saya mengkompilasi Visual Studio Code dari AUR

    yay -S visual-studio-code-bin #Stabil
    yay -S visual-studio-code-insider-bin #versi Insider (tidak stabil)

Setelah menginstal editor teks, sekarang saatnya menginstal Swift.Situs web Swift menyediakan instalasi untuk Ubuntu, CentOS 7 dan Amazon Linux 2. Anda bisa menemukannya dengan mencari repositori distribusi yang Anda gunakan. Untuk instalasi Arch Linux, Anda bisa menginstalnya sebagai paket biner untuk Fedora dari AUR ([swift-bin](https://aur.archlinux.org/packages/swift-bin/)), atau Anda bisa mengkompilasinya sendiri ([swift-language](https://aur.archlinux.org/packages/swift-language/)). Saya mengunggah berkas biner untuk menghemat waktu, Anda dapat mengunggahnya sebagai berikut;

[Arch Linux Swift Lang](https://asciinema.org/a/WYONSKo0P1nSVqUpURYkzG1ka)

Setelah proses instalasi selesai, Anda bisa mengecek apakah sudah berfungsi atau belum dengan parameter - version.

    swift --version

Jika kita telah berhasil menyelesaikan instalasi Swift, mari kita lanjutkan dengan menginstal Vapor Toolbox. Untuk menginstal Vapor Toolbox, kita perlu mengunduhnya dari halaman git dan mengkompilasinya di komputer kita.

    git clone <https://github.com/vapor/toolbox.git>
    cd toolbox
    make install

Mari jalankan parameter - help untuk memverifikasi bahwa ia terinstal tanpa masalah seperti yang kita lakukan pada instalasi Mac.
    vapor --help

Setelah menjalankan perintah tersebut, Anda akan melihat daftar perintah yang tersedia. Jika Anda melihatnya, selamat, Anda telah berhasil menginstal Vapor Framework dengan mengikuti langkah-langkah berikut ini 🥳

## Setelah instalasi

Sekarang setelah kita menyelesaikan instalasi, mari kita buat sebuah proyek baru. Untuk membuat proyek

    vapor new <proje ismi>

    #Contoh
    vapor new merhaba

> Jika Anda menambahkan parameter *-n, Anda memulai dengan template murni dengan menjawab tidak untuk semua pertanyaan tanpa mengajukan pertanyaan apa pun. Itulah yang saya lakukan.

![](https://cdn-images-1.medium.com/max/2096/1*mDXvZTqC8xCtLLypJe2ptw.png)

Sekarang mari kita masuk ke dalam proyek kita dan membuka proyek kita dengan editor teks.

    cd merhaba
    code . Saya menulis perintah ini karena saya menggunakan #vscode

    #Jika Anda berada di lingkungan Mac
    open Package.swift #Jika Anda berada di lingkungan Mac

![](https://cdn-images-1.medium.com/max/3840/1*SRjGxMQeuipUE3Y-oyY0LA.png)

Jika Anda akan menggunakan Visual Studio Code, saya sangat menyarankan untuk menginstal plugin [Swift](https://marketplace.visualstudio.com/items?itemName=sswg.swift-lang). Plugin ini mendukung penyelesaian kode, deskripsi kesalahan, dan fitur debugging. Jika Anda tidak akan menggunakan Visual Studio Code, ada [panduan instalasi](https://github.com/swift-server/guides/blob/main/docs/setup-and-ide-alternatives.md) untuk IDE/Editor lain. Saat ini ada panduan untuk instalasi Atom, CLion, Emacs dan Vim.

Sekarang kita telah membuat proyek dan membukanya dengan editor teks, mari kita jalankan proyek kita.

    swift run

Perintah ini untuk mengkompilasi dan menjalankan proyek kita. Proses pertama mungkin akan memakan waktu lebih lama.

    [...]
    Creating working copy for <https://github.com/swift-server/swift-backtrace.git>
    Working copy of <https://github.com/swift-server/swift-backtrace.git> resolved at 1.3.3
    Building for debugging...
    [1852/1852] Linking Run
    Build complete! (61.74s)
    [ NOTICE ] Server starting on <http://127.0.0.1:8080>

Setelah kompilasi selesai, Anda dapat membuka [http://127.0.0.1:8080/hello](http://127.0.0.1:8080/hello) dari browser Anda dan mengonfirmasi apakah kompilasi sudah berfungsi kembali.

Dalam artikel hari ini, saya menjelaskan cara menginstal Swift dan Vapor di Arch Linux. Terimakasih.

[**Referensi**](https://hellstabber.github.io/posts/arch-linux-swift/)