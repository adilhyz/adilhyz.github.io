---
title: "BlackArch Mirror Install"
date: 2023-09-22
draft: false
tags: ["Linux","ArchLinux","BlackArch","Mirrors"]
categories: ["OS"]
---

![](/posts/blackarch-mirror-install/already.png)


## Introduction
In Arch Linux, a "mirror" refers to a copy of the software package repository that allows users to quickly download and manage software. Mirror repositories are servers that provide access to these packages from various geographical locations, facilitating better network load distribution and faster download speeds. Mirror mirrorsync, on the other hand, is a copy of all Arch Linux repositories organized by the main repository, used to ensure that mirror repositories stay up-to-date by automatically managing and replenishing them.

In the context of BlackArch, a mirror is a copy of the BlackArch Linux software repository, which contains various security and hacking tools. This mirror allows users to quickly download and install BlackArch packages.


![](/posts/blackarch-mirror-install/ba-slider.png)

## BlackArch Mirror Installations.

The installer only works for [`ARCH`](https://archlinux.org) Linux, and `based distros`.

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