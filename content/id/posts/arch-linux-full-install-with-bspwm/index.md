---
title: "Instalasi Arch Linux Full Dengan Bspwm"
description: "Adilhyz."
# keywords: "linux, arch linux, youtube, tutorial, linus tech tips, ubuntu, endeavouros, linux, Arch Linux, kernel"
date: 2023-10-22T13:28:35+07:00
draft: false
tags: ["Linux","ArchLinux","Kernel","bspwm"]
categories: ["OS","Tutorial"]
---

![pendahuluan](./pendahuluan.gif "Hai semua, kali ini saya akan mengshare cara menginstal Arch Linux dengan lingkungan desktop bspwm.   juga dibandel oleh btrfs dan snapshots")

- Mode bootingnya adalah **EFI**.
- Saya beranggapan bahwa Anda sudah memiliki stik USB dengan ISO Arch Linux dan sudah [```BOOTABLE```](https://id.wikipedia.org/wiki/List_of_tools_to_create_bootable_USB)

Jangan lupa bawa cemilan untuk menikmati santuy ☕ ...

# Link

1. [Download ISO Arch Linux Terbaru](https://archlinux.org/download/)
2. [Konek ke Internet - Arch Linux Wiki](https://wiki.archlinux.org/title/installation_guide#Connect_to_the_internet)
3. [Swap - Arch Linux Wiki](https://wiki.archlinux.org/title/Swap)
4. [Adilhyz´s bspwm dotfiles install](https://github.com/adilhyz/dotfiles-v1)

## 1. Pra-Instalasi

### 1.1 Atur Waktu

```sh
timedatectl set-ntp true
```

### 1.2 Buat Partisi Disk

Disini saya akan membuat 2 Partisi.

- [x] Partisi untuk Arch Linux (Btrfs)
- [x] Partisi Untuk Swap
- [ ] Partisi EFI (Opsional), disini saya dualboot dengan windows


```sh
cfdisk /dev/[device]
```
Ini adalah struktur disk yang sudah di create ```1``` dan juga ```2```

```bash
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    1  29.3G  0 disk
├─sda1        8:1    1  29.2G  0 part [BOOTABLE-NYA]
└─sda2        8:2    1    32M  0 part
nvme0n1     259:0    0 238.5G  0 disk
├─nvme0n1p1 259:1    0  89.3G  0 part [WINDOWS]
├─nvme0n1p2 259:2    0   511M  0 part [EFI-WINDOWS]
├─nvme0n1p3 259:3    0   712M  0 part [RECOVERY-WINDOWS]
├─nvme0n1p4 259:4    0    40G  0 part [MYDATA]
├─nvme0n1p5 259:5    0     8G  0 part [SWAP] (1)
└─nvme0n1p6 259:6    0   100G  0 disk [ARCH] (2)
```

### 1.3 Memformat partisi

Sebelum memormat alangkah baiknya untuk membackup mirrorlist terlebih dahulu

```sh
cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.ori
```

gunakan mkfs.btrfs, dan mkswap juga swapon.

```sh
mkfs.btrfs /dev/nvme0n1p6 -L NYARCH -f
mkswap /dev/nvme0n1p5
swapon /dev/nvme0n1p5
```

### 1.4 Mengganti Mirrorlist

```sh
reflector --list-countries
reflector --country Indonesia --latest 5 --sort rate --save /etc/pacman.d/mirrorlist
```

update semua key

```
pacman -S archlinux-keyring
pacman-key --populate
```

### 1.5 Membuat Subvolume dan Mounting

```sh
mount /dev/nvme0n1p6 /mnt
cd /mnt
btrfs su cr @
btrfs su cr @home
btrfs su cr @cache
btrfs su cr @images
btrfs su cr @log
btrfs su cr @tmp
btrfs su cr @snapshots
cd
umount /mnt
```

```sh
mount -o compress=zstd:3,noatime,subvol=@ /dev/nvme0n1p6 /mnt
mkdir -p /mnt/{boot/efi,home,tmp,.snapshots,var/{cache,log,lib/libvirt/images}}
mount -o compress=zstd:3,noatime,subvol=@home /dev/nvme0n1p6 /mnt/home
mount -o compress=zstd:3,noatime,subvol=@tmp /dev/nvme0n1p6 /mnt/tmp
mount -o compress=zstd:3,noatime,subvol=@cache /dev/nvme0n1p6 /mnt/var/cache
mount -o compress=zstd:3,noatime,subvol=@log /dev/nvme0n1p6 /mnt/var/log
mount -o compress=zstd:3,noatime,subvol=@images /dev/nvme0n1p6 /mnt/var/lib/libvirt/images
mount -o compress=zstd:3,noatime,subvol=@snapshots /dev/nvme0n1p6 /mnt/.snapshots

mount /dev/nvme0n1p2 /mnt/boot/efi
```
Sebelum nya disini Saya menggunakan zstd sebagai kompresi.

{{< typeit 
  tag=h5
  speed=50
  breakLines=false
  loop=true
>}}
Kenapa zstd?
{{< /typeit >}}

> Zstandard, juga dikenal sebagai zstd, adalah metode kompresi yang cepat dan tidak mengganggu yang dirancang untuk situasi kompresi secara langsung, melampaui efektivitas level zlib yang banyak digunakan. zstd memiliki tahap entropi yang cepat berkat dukungan yang kuat dari pustaka [Huff0 dan FSE](https://github.com/Cyan4973/FiniteStateEntropy)

berikut benchmark perbedaan singkat antara zstd dan kompresi lainnya:

| Algoritma Kompresi | Rasio Kompresi| Kecepatan Kompresi| Kecepatan Dekompresi |
|--------------------|---------------|-------------------|----------------------|
| Zstd               | Tinggi        | Cepat             | Cepat                |
| Brotli             | Sangat Tinggi | Sedang            | Sedang               |
| Deflate (gzip)     | Rendah        | Cepat             | Cepat                |
| LZ77 (gzip)        | Sedang        | Sedang            | Cepat                |
| Snappy             | Rendah        | Sangat Cepat      | Sangat Cepat         |
| LZO                | Rendah        | Sangat Cepat      | Sangat Cepat         |
| Gzip               | Sedang        | Sedang            | Cepat                |

Sekilas, Zstd unggul dalam rasio kompresi yang tinggi dan kecepatan kompresi yang lebih cepat, sementara Brotli menawarkan rasio kompresi yang sangat tinggi dengan pengorbanan minimal dalam kecepatan kompresi dan dekompresi. Namun, perbandingan ini sangat bergantung pada karakteristik data spesifik yang sedang diuji dan kebutuhan unik setiap aplikasi.

## 2. Instalasi

### 2.1 Instalasi Base System

Ini akan tergantung pada merek prosesor (AMD atau Intel)

- Untuk Prosesor Intel tambahkan paket ```intel-ucode```
- Untuk Prosesor AMD tambahkan paket ```amd-ucode```

```sh
pacstrap /mnt base linux linux-zen linux-firmware git vim intel-ucode
```

*Tekan enter dua kali di sini...*

## 3. Mengkonfigurasi Sistem

### 3.1 Membuat fstab

```sh
genfstab -U /mnt >> /mnt/etc/fstab
cat /mnt/etc/fstab
```
Lalu copy backupan mirrorlist dengan:

```sh
cp /etc/pacman.d/mirrorlist.ori /mnt/etc/pacman.d/mirrorlist.ori
```

### 3.2 Chroot

```sh
arch-chroot /mnt
```

### 3.3 Pelokalan

Lihat semua zona waktu:
```sh
timedatectl list-timezones
```

Ganti wilayah dan kota dengan zona waktu anda.
```sh
ln -sf /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
hwclock --systohc
```

Edit dan hapus komentar dengan lokal Anda.
```sh
vim /etc/locale.gen 
```
![locale.gen](./localegen.gif "Setelah itu, buat lokal dengan:")

```sh
echo LANG=en_US.UTF-8 >> /etc/locale.conf
```

```sh
locale-gen
```

### 3.4 Konfigurasi Jaringan
Buat ```/etc/hostname``` dengan:

```sh
echo "ore" >> /etc/hostname
```

Lalu Buat ```/etc/hosts```:

```
127.0.0.1   localhost
::1         lobalhost
127.0.1.1   ore.localdomain     ore
```

Ganti semua "ore" dengan host yang Anda inginkan.

![pacman.conf](./pacmanconf.gif "Lalu ubah config ```/etc/pacman.conf``` untuk menambah [Color](#pacman.conf) dan [ILoveCandy](#pacman.conf)")

### 3.5 Instalasi Kebutuhan Paket

Umumnya ini dengan ```pacman -S . . .```, disini saya memudahkan dengan instalasi dari teks tanpa mengetik per paket. 

```sh
git clone https://github.com/adilhyz/ArchLinux AIO
```
Instal paket nya
```sh
pacman -S --needed - < /AIO/Paclists/Bspwm/needed
```

### 3.6 Edit mkinitcpio

Tambahkan binaries btrfs pada ```/etc/mkinitcpio.conf```

```sh
vim /etc/mkinitcpio.conf

# Tambahkan btrfs
> binaries=(btrfs)
```

### 3.7 Instalasi GRUB

Edit file ```/etc/default/grub```

```sh
vim /etc/default/grub

#Hapus Komen Pada
OS_PROBER=false

```

Terakhir Install Grub dengan ```grub-install```

```sh
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=ARCH --recheck
grub-mkconfig -o /boot/grub/grub.cfg
```

## 4. Pasca Instalasi

### 4.1 Aktifkan services systemctl

```sh
systemctl enable NetworkManager
systemctl enable bluetooth
systemctl enable dhcpcd
systemctl enable avahi-daemon
systemctl enable cups
systemctl enable haveged
systemctl enable sshd
systemctl enable reflector.timer
systemctl enable fstrim.timer
systemctl enable libvirtd
```

### 4.2 Tambahkan User

```sh
useradd -m -G sys,log,network,floppy,scanner,power.rfkill,users,video,storage,optical,lp,audio,wheel,adm sanrei
```

Tambahkan password ```user```

```sh
passwd sanrei
```

Edit ```/etc/sudoers``` run ```visudo``` and delete the following line:

```sh
EDITOR=nvim visudo

#Delete Comment wheel
%wheel ALL=(ALL) ALL
```

```sh
exit
```

## 5. Instalasi bspwm

Anda sekarang di berada [```tty```](https://en.wikipedia.org/wiki/TTY). Kita perlu mengunduh repositori tapi disini saya sudah buatkan installer. Saya membuat ini untuk membuat instalasi lebih mudah dan menghindari pengerjaan ulang.

**Unduh paket penginstal**
```sh
curl https://raw.githubusercontent.com/adilhyz/dotfiles-v1/master/RiceInstaller -o RiceCuy
chmod +x RiceCuy
./RiceCuy
```

> Setelah instalasi bspwm
>
> Instal paket all in one ini sudah di bundle dengan **media player** ```vlc``` dan juga **browser** ```firefox``` untuk selengkapnya cek [Paket Kebutuhan Arch Linux Saya](https://github.com/adilhyz/ArchLinux)

```sh
sudo pacman -S --needed - < /AIO/Paclists/Bspwm/needed
```

Terakhir Aktifkan **Display Manager**

```sh
sudo systemctl enable sddm
reboot
```

## 6. Selesai

Repositori: https://github.com/adilhyz/dotfiles-v1

Jika Anda Berkenan, kunjungi repositori [dotfiles](/posts/arch-linux-dotfiles/) bspwm dan saya telah menyiapkan dokumentasi sederhana dengan instalasi nya. Semoga informasi ini berguna untuk Anda dalam memaksimalkan penggunaan komputer Anda!

<!-- {{< list limit=2 >}}

{{< list title="OS" limit=4 where="Type" value="Bspwm" >}} -->