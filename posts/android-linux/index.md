# Android Adalah Linux?


## Android

Ya, Android memanglah populer dikalangan pengguna smartphone, [data](https://gs.statcounter.com/os-market-share/mobile/worldwide) menunjukan bahwa Android menduduki peringkat pertama pengguna smartphone terbanyak di Dunia. Android merupakan sistem operasi sumber terbuka yang dikembangkan oleh [Google](https://www.android.com/) dan [Open Handset Alliance](https://www.openhandsetalliance.com/android_overview.html).  Android dirancang untuk perangkat ponsel pintar dan tablet. 

> [!QUESTION]+ Apa hubungan Android dengan kernel Linux
> **Kernel Linux** menjadi pondasi Android.* tetapi bukan merupakan **distribusi Linux**. Sebaliknya, Android adalah sebuah runtime berbasis Java yang berjalan di atas **Kernel Linux** dan memiliki arsitektur serta komponen yang berbeda dari sistem operasi *GNU/Linux* pada umumnya.

Android tidak bisa disebut sebagai distribusi Linux, karena Perbedaan utama terletak pada lapisan atas sistem pengguna dan lingkungan runtime yang sangat berbeda dari distribusi Linux:

- Kernel Linux menangani beberapa tugas seperti **manajemen memori**, **penjadwal tugas**, dan **driver hardware**.
- Namun, di Android, kernel ini mendapat beberapa modifikasi khusus. seperti <abbr title="Untuk inter proses communication (IPC)">Binder</abbr>, <abbr title="untuk manajemen pengelolaan sumber daya">wakelocks</abbr>, <abbr title="untuk shared memory">ashmem</abbr>, dan lainnya.

{{< image src="android-open-source.jpg" caption="https://www.makeuseof.com/tag/android-really-open-source-matter/" >}}

Beberapa perbaikan (patch) kernel Android telah disumbangkan kembali ke **Kernel Linux**, banyak patch Android tetap unik dan tidak ditemukan pada distribusi Linux umumnya. Ini membuat <u>kernel Android struktur dasar kernel Linux, tapi berfungsi secara sangat berbeda.</u>

### Perbedaan Ruang Pengguna (User Space)

> [!NOTE]
> Linux umum dibangun di atas kernel dengan **glibc** GNU coreutils, Shell seperti `bash`, Desktop Environment seperti [GNOME](https://www.gnome.org/) atau [KDE](https://kde.org/).

Sedangkan Android menggunakan:

- **Bionic** sebagai library `C` standar (alih-alih **glibc**), lebih ringan dan bersifat BSD-licensed
- **ART/Dalvik** sebagai runtime Android, bukan native ELF executable seperti di Linux desktop 
- Tidak ada **X11** atau **Wayland** untuk GUI Android memakai framework UI di atas window server khusus mobile. 

Hasilnya? Aplikasi desktop Linux tidak akan berjalan langsung di Android. karena berjalan melalui runtime, **Android Runtime** (ART) atau **Dalvik** (di versi lama) untuk menjalankan aplikasi, bukan lingkungan eksekusi digunakan di Linux desktop, bukan library Linux.


> [!QUESTION]+ Apakah Android adalah Linux
> Sebenarnya hanya merujuk pada kernel dasarnya, yaitu **Linux**, bukan keseluruhan sistem operasi. Secara teknis, Android menggunakan **HAL** (*Hardware Abstraction Layer*) untuk memudahkan pengembang mengakses hardware secara konsisten. Ini berbeda dengan **Linux desktop**, yang bergantung pada driver kernel serta perangkat lunak pengguna untuk integrasi hardware.  

Android Bukanlah Distro Linux  
Sebenarnya hanya merujuk pada kernel dasarnya Yaitu Linux, bukan keseluruhan sistem operasi. Secara teknis, Android menggunakan HAL (Hardware Abstraction Layer) untuk memudahkan pengembang mengakses hardware secara konsisten

{{< image src="AfD-Meet.png" caption="https://android-developers.googleblog.com/2025/02/meet-the-android-studio-team-Jamal-Eason.html" >}}

Berbeda dengan linux desktop yang bergantung pada driver kernel serta perangkat lunak pengguna untuk integrasi hardware. Aplikasi Android dibangun dalam bentuk paket `.apk` dan dijalankan di atas **ART** atau **Dalvik**, bukan sebagai biner Linux tradisional seperti `.deb` atau `.rpm`. Mekanisme perizinan aplikasi, siklus hidup, serta interaksi antarmuka pengguna semuanya didesain dalam kerangka Android tersendiri:  

- **Runtime & library**: Bionic + ART/Dalvik  
- **Utilities**: Toolbox/Toybox, bukan *GNU coreutils*  
- **GUI (Graphical User Interface)**: Native Android UI, bukan X Window System  

Dengan demikian, Android **bukanlah Linux dalam arti umum**. <u>Android adalah kerangka terpisah yang dibangun di atas kernel Linux yang sudah dimodifikasi secara khusus.</u>  

### Ekosistem Aplikasi & Model Pengembangan

Android memiliki HAL (Hardware Abstraction Layer) untuk memudahkan developer akses hardware secara konsisten. Ini berbeda dari Linux desktop, yang bergantung pada driver kernel dan perangkat lunak pengguna untuk integrasi hardware.

> [!HINT] Selain itu
> banyak produsen perangkat Android enggan merilis driver secara terbuka (*full open-source*). Akibatnya, pada sejumlah perangkat, Android menjadi semacam **black box** bagi komunitas pengembang.  

## Android Terbaru

Pada Saat Artikel ini dibuat, Android 16 yang dijadwalkan rilis penuh pada akhir 2025 masih menggunakan kernel Linux sebagai pondasi utama. Namun, Google kini semakin agresif dalam mengembangkan Android Generic Kernel Image (GKI) dan menerapkan modularisasi kernel, yang membuat kernel Android semakin berbeda dengan Linux Desktop. 

{{< image src="android-16-adaptive.png" caption="https://android-developers.googleblog.com/2025/06/a-product-manager-guide-to-scaling-android-apps-across-from-factors.html" >}}

kernel terbaru dari Android, pun pada dasarnya menggunakan pondasi kernel Linux (versi 6.x), yang di modifikasi untuk Perangkat Ponsel Pintar dan Tablet.

### Android Menyumbang Balik ke Kernel Linux

Meskipun Tidak semua perubahan kontribusi di merge kembali ke kernel utama Linux, komunitas Android tetap berkontribusi ke ekosistem Kernel Linux, terutama dalam hal dukungan Hardware dan patch Keamanan:

- Kernel Linux memberikan banyak fitur **Keamanan**
- **SELinux** diaktifkan secara default untuk membatasi akses
- **APK** memiliki permissions model di aplikasi
- **Private Compute Core** di Android 12 Ke Atas untuk *isolasi data sensitif*

## Keamanan

Beberapa celah kerentanan seperti <abbr title="Dirty Copy-On-Write">Dirty COW</abbr> masih bisa mengancam Android lawas

{{< image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/DirtyCow.svg/250px-DirtyCow.svg.png" caption="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/DirtyCow.svg/250px-DirtyCow.svg.png" >}}

Kerentanan yang dieksploitasi secara aktif setidaknya sejak *Oktober 2016* silam. bahwa memang masih rentan terhadap Kerentanan telah ada di kernel Linux sejak versi **2.6.22** yang dirilis pada *September 2007*

Kerentanan telah di Patch pada kernel Linux versi **4.8.3**, **4.7.9**, **4.4.26** dan ke bawah. Artinya sebagian Besar Sebelum **4.8.3** Masih Rentan Terhadap celah keamanan Dirty COW

## Referensi

* [Android Developers – Platform Architecture (Linux kernel, HAL, ART)](https://developer.android.com/guide/platform?hl=id)
* [Kernel - Android System Programming [Book]](https://www.oreilly.com/library/view/android-system-programming/9781787125360/9dc4394d-fb7a-418d-8d88-3c5c212a3371.xhtml)
* [Controversy about whether Android is Linux or not.](https://www.reddit.com/r/linuxquestions/comments/h0eiu2/)
* [Notes on Android Architecture](https://stan.bar/androidarch/)
* [Bionic (software) - Wikipedia](https://en.wikipedia.org/wiki/Bionic_%28software%29)
* [Chapter I - Introduction - The Evolution of Android's Architecture](https://newandroidbook.com/book/Introduction.html)
* [Platform Architecture | Android Developers](https://developer.android.com/guide/platform)
* [Forbes (via Quora) – Kernel changes in Android](https://www.forbes.com/sites/quora/2013/05/13/what-are-the-major-changes-that-android-made-to-the-linux-kernel/?utm_source=chatgpt.com)
* [Wikipedia – ART, Dalvik](https://en.wikipedia.org/wiki/Android_Runtime)
* [Wired – Linux and Android code merge](https://www.wired.com/2012/03/android-linux/)
* [Wikipedia – Dirty COW vulnerability](https://en.wikipedia.org/wiki/Dirty_COW)

## FAQ

{{< details "**Apakah Android adalah Linux?**" >}}

> [!NOTE]
> Ya dan tidak. Android menggunakan kernel Linux sebagai pondasi, tetapi tidak menggunakan komponen ciri khas distribusi Linux seperti **glibc**, **systemd**, atau X11/Wayland. Android juga menggunakan Bionic sebagai libc-nya dan ART sebagai runtime, membuatnya sangat berbeda dari distro Linux pada umumnya.

{{< /details >}}

{{< details "**Mengapa Android tidak disebut sebagai distro Linux biasa?**" >}}

> [!TIP]
> Karena Android tidak menjalankan daemon Linux standar. Ia tidak memakai shell `bash` sebagai default, tidak ada **glibc**, dan antarmuka utamanya bukan GUI **X11**/**Wayland**, tetapi berbasis **Java**/**Kotlin** dan **ART**.

{{< /details >}}

{{< details "**Apakah Android bisa digunakan seperti Linux Desktop**" >}}

> [!IMPORTANT]
> Secara bawaan tidak bisa. Namun, dengan akses root device atau tools seperti Termux, Linux Deploy, atau `proot`, Android bisa menjalankan lingkungan Linux (seperti Arch, Ubuntu). Tapi, ini bersifat terbatas dan tidak sama dengan pengalaman desktop asli.
{{< /details >}}


---

> Penulis: [Adilhyz](https://github.com/adilhyz)  
> URL: https://sanrei.my.id/posts/android-linux/  

