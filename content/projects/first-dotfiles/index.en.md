---
title: "First Dotfiles"
description: "First Dotfiles, which uses bspwm."
date: 2023-04-14
draft: false
tags: ["Linux","ArchLinux","dotfiles", "bspwm"]
categories: ["Projects", "OS"]
summary: "The first dotfiles bspwm I made."
---

![bspwm img](https://raw.githubusercontent.com/adilhyz/arco-bspwm-dotfiles/master/screenshots.jpg)

 [{{< icon "github" >}} Source Dotfiles](https://github.com/adilhyz/arco-bspwm-dotfiles)

## 💻 Dotfiles

A some addition that's neovim by using nvchad

{{< github repo="NvChad/NvChad" >}}

### Installations

```sh
git clone https://github.com/adilhyz/arco-bspwm-dotfiles ~/dotfiles &&
git clone https://github.com/NvChad/NvChad ~/dotfiles/.config/nvim &&
mv ~/dotfiles/.config/* ~/.config;
```

In terminal run nvim then


<kbd>:PackerSync</kbd>+<kbd>ENTER</kbd>