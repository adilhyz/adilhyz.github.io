---
title: "Dotfiles Pertama"
description: "Dotfiles Pertama saya, dengan window manager bspwm."
date: 2023-04-14
draft: false
tags: ["Linux","ArchLinux","dotfiles", "bspwm"]
categories: ["Projects", "OS"]
summary: "Dotfiles bspwm pertama yg saya buat."
---

![img bspwm](https://raw.githubusercontent.com/adilhyz/arco-bspwm-dotfiles/master/screenshots.jpg)

[{{< icon "github" >}} Source Dotfiles](https://github.com/adilhyz/arco-bspwm-dotfiles)

## 💻 Dotfiles

ada beberapa tambahan yakni neovim disini saya menggunakan nvchad

{{< github repo="NvChad/NvChad" >}}

### Instalasi

```sh
git clone https://github.com/adilhyz/arco-bspwm-dotfiles ~/dotfiles &&
git clone https://github.com/NvChad/NvChad ~/dotfiles/.config/nvim &&
mv ~/dotfiles/.config/* ~/.config;
```

Di terminal jalankan nvim lalu


<kbd>:PackerSync</kbd>+<kbd>ENTER</kbd>