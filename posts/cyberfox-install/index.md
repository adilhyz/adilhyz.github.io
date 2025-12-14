# Instalasi Cyberfox Untuk Penetration Testing


## CyberFox

Cyberfox merupakan Browser yang berbasis dari Firefox, yang di desain untuk Penetrasi Sistem tersedia di 64-bit dan 32-bit. Diambil dari sumber [sourceforge](https://sourceforge.net/projects/cyberfox) Cyberfox sudah tidak mendapatkan update terbaru lagi sejak 2018. meski begitu Cyberfox tidak kalah unggul dari browser sebelah, karena masih support beberapa ekstensi lawas Yaitu {{< link href="https://github.com/adilhyz/EXT/raw/refs/heads/main/hackbar-v2.9.xpi" content="Hackbar" download="https://github.com/adilhyz/EXT/raw/refs/heads/main/hackbar-v2.9.xpi" card=false >}}, Alat serbaguna untuk Penetrasi Keamanan.

{{< image src="cyberfox-logo.png" alt="CyberFox" >}}

## Download
> ### Windows

Disini saya sudah menyediakan bahan untuk instalasi, download sesuai asitektur cpu.

|     AMD    | Intel  |
|------------|--------|
| [CyberFox For Amd 64Bit](https://sourceforge.net/projects/cyberfox/files/Cyberfox-52.9.1.en-US.win64-x86_64.amd.exe/download) |[CyberFox For Intel 64Bit](https://sourceforge.net/projects/cyberfox/files/Cyberfox-52.9.1.en-US.win64-x86_64.intel.exe/download)|
| [CyberFox For Amd 32Bit](https://sourceforge.net/projects/cyberfox/files/Cyberfox-52.9.1.en-US.win32.amd.exe/download) | [CyberFox For Intel 32Bit](https://sourceforge.net/projects/cyberfox/files/Cyberfox-52.9.1.en-US.win32.intel.exe/download) |

> [!NOTE]
> Atau Bisa Kunjungi Official Link ([Sourceforge](https://sourceforge.net/projects/cyberfox/files/))

> ### Linux

#### Arch based

[Arch](https://wiki.archlinux.org/title/Arch-based_distributions) Btw dikarenakan environment **pacman** yang mana `.zst` tidak seperti **package** `.deb` dan kita perlu menginstall beberapa mirror tambahan, disini saya sudah menyediakan mirror repositori Cyberfox untuk Arch Linux, Untuk Instalasi saya menyediakan dua Opsi yaitu `Otomatis` dan `Manual`

{{< tabs type="segment" >}}
{{% tab title="Otomatis" %}}

Otomatis Menggunakan `echo` *(Sekali klik di Terminal)*

```shell {title="Terminal"}
sudo echo -e "\n[adilhyz-repo]\nSigLevel = Optional TrustAll\nServer = http://adilhyz.github.io/adilhyz-repo/x86_64\n" | sudo tee -a /etc/pacman.conf > /dev/null
```

Lalu Update untuk Sinkronkan database **pacman**

```shell {title="Terminal"}
sudo pacman -Syyu
```

{{% /tab %}}
{{% tab title="Manual" %}}

Manual edit `/etc/pacman.conf`

```shell {title="Terminal"}
sudo vim /etc/pacman.conf
```

Tambahkan mirror di bagian paling bawah

```shell /etc/pacman.conf {title="Edit /etc/pacman.conf (sudo)"}
SigLevel = Optional TrustAll
Server = http://adilhyz.github.io/adilhyz-repo/x86_64
```

Lalu Update untuk Sinkronkan database **pacman**

```shell {title="Terminal"}
sudo pacman -Syyu
```

{{% /tab %}}
{{< /tabs >}}

Terakhir Install Cyberfox

```shell {title="Terminal"}
sudo pacman -S cyberfox
```

> [!SUCCESS] Selesai
> Setelah Instalasi CyberFox Menggunakan mirror [adilhyz-repo](/projects/adilhyz/adilhyz-repo/) Cyberfox Siap Di Jalankan.


#### Debian based

> [!INFO] Download CyberFox untuk [Debian](https://distrowatch.com/search.php?basedon=Debian). 
>Versi Terbaru [x86_64.deb](https://sourceforge.net/projects/cyberfox/files/Zipped%20Format/Cyberfox-52.9.1.en-US.linux-x86_64.deb/download) | [x86.deb](https://sourceforge.net/projects/cyberfox/files/Cyberfox-52.9.1.en-US.win64-x86_64.amd.exe/download)


## Run CyberFox

{{< image src="awal.webp" width="530px" caption="Jalankan CyberFox" >}}


Setelah [Instalasi](#download) CyberFox, untuk pertama kali kita ditampilkan untuk mengkustom tampilan awal, silahkan isi sesuai selera masing-masing. Setelah di pilih, lanjut menginstall Ekstensi terlebih dahulu.


Setelah [Instalasi](#download) CyberFox, untuk pertama kali kita ditampilkan untuk mengkustom tampilan awal, silahkan pilih sesuai kebutuhan. lalu kita menginstall **Ekstensi** terlebih dahulu.

### Install Ekstensi [**Hackbar**](https://github.com/adilhyz/EXT "Hackbar Extension by Adilhyz") 

{{< link href="https://github.com/adilhyz/EXT/archive/refs/tags/1.0.zip" content="Repositori Ekstensi Hackbar Terbaru" download="https://github.com/adilhyz/EXT/archive/refs/tags/1.0.zip" card=true >}}

> [!NOTE]
> Install ekstensi di menu **Add-ons**, dan Pergi ke menu **Extensions**.

{{< image src="adon.gif" class="grid-w70" width="530px" caption="Klik **Add-ons**" >}}
{{< image src="ekstensi.gif" class="grid-w70" width="530px" caption="Pilih Ekstensi [**hackbar-v2.9.xpi**](https://github.com/adilhyz/EXT/raw/refs/heads/main/hackbar-v2.9.xpi)" >}}

### Impor Backup [**json**](https://github.com/adilhyz/EXT/raw/refs/heads/main/HackbarGweh.json)

Sesudah Menginstall ekstensi HackBar, kemudian restore backup ke Tools lalu pilih Ikon settings dan file Import File [.json](https://github.com/adilhyz/EXT/raw/refs/heads/main/HackbarGweh.json)

{{< image src="impor.gif" class="grid-w70" width="530px" caption="Pilih Backup [**HackbarGweh.json**](https://github.com/adilhyz/EXT/raw/refs/heads/main/HackbarGweh.json)" >}}
{{< image src="akhira.webp" class="grid-w70" width="530px" caption="Dan Ya, Cyberfox sudah siap untuk Pentesting" >}}


## FAQ

{{< details "**Ini bisa dipakai di distro selain Arch?**" >}}

> [!TIP]
> **Bisa**, untuk Fedora, NixOs dan Gentoo. pada saat artikel ini dibuat saya belum mencobanya, intinya jika mencoba dan ngulik setidaknya bisa menurut saya.
{{< /details >}}

{{< details "**Apa perbedaan Cyberfox versi Intel dan AMD?**" >}}

> [!NOTE]
> Secara teknis hanya optimisasi build-nya saja yang beda. Versi Intel dan AMD dibangun agar performa maksimal di arsitektur CPU masing-masing. Hingga artikel ini dibuat, dua-duanya bisa jalan di semua CPU.
>
> Di Linux Juga sama itu multifungsi kok, baik intel dan amd bisa berjalan dengan baik.
{{< /details >}}

---

> Penulis: [Adilhyz](https://github.com/adilhyz)  
> URL: https://sanrei.my.id/posts/cyberfox-install/  

