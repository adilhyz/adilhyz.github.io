---
title: "BlackArch Mirror Install"
description: "BlackArch is a mirror the BlackArch Linux software repository which contains various security and hacking tools."
date: 2023-09-22
draft: false
tags: ["Linux","ArchLinux","BlackArch","Mirrors"]
categories: ["Tutorial","OS"]
summary: "On Arch Linux, mirrors are software package repositories that allow users to download and update software more quickly and stably. Mirrors are spread across various servers around the world, ensuring a more even network load and optimal download speeds."
---

![](/posts/blackarch-mirror-install/already.png)

Arch Linux, a "mirror" refers to a copy of the software package repository that allows users to quickly download and manage software. Mirror repositories are servers that provide access to these packages from various geographical locations, facilitating better network load distribution and faster download speeds. Mirror mirrorsync, on the other hand, is a copy of all Arch Linux repositories organized by the main repository, used to ensure that mirror repositories stay up-to-date by automatically managing and replenishing them.

## Introduction

In the context of BlackArch, a mirror is a copy of the BlackArch Linux software repository, which contains various security and hacking tools. This mirror allows users to quickly download and install BlackArch packages.


![](/posts/blackarch-mirror-install/ba-slider.png)

## BlackArch Mirror Installations.

{{< alert icon="triangle-exclamation" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}}
The installer only works for [<abbr title="Arch Linux">*Arch*</abbr>](https://archlinux.org), and <abbr title="Based Distro">based</abbr> distros.
{{< /alert >}}

Run https://blackarch.org/strap.sh as root and follow the instructions.

    curl -O https://blackarch.org/strap.sh

Verify the SHA1 sum

    echo 5ea40d49ecd14c2e024deecf90605426db97ea0c strap.sh | sha1sum -c

Set execute bit

    chmod +x strap.sh

Run strap.sh

    sudo ./strap.sh

Enable multilib following [wiki](https://wiki.archlinux.org/index.php/Official_repositories#Enabling_multilib) and run:

    sudo pacman -Syu

## After Installations
After installation, you can try several tools such as pentesting, networking, exploitation and others. then choose the tool that you like and also need.

You can also view blackarch categories by using the command

    sudo pacman -Sg | grep blackarch

    sudo pacman -S blackarch-<category>

![](/posts/blackarch-mirror-install/ba-social.png)

In today's article, I explain how to install BlackArch Mirror. BlackArch Mirror is my preferred Mirror and I use it. If you are still confused, you can check my [Youtube](https://youtube.com/@adilhyz).またね!