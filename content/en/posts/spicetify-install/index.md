---
title: "Spotify Fans Need to Check Out Spicetify"
description: "Spicetify, simple and relaxing. Enjoy your Spotify with more classy! ☕🎶"
date: 2023-11-23
draft: false
tags: ["Windows","Linux","ArchLinux","Debian","Ubuntu","LinuxMint","Spotify"]
categories: ["Music","Tools","Tutorial","OS"]
---

![pendahuluan](./3961-spotify.png "Do you think the official Spotify for Linux client would look better with a major restyle? So did the devs behind customisation tool Spicetify, which can do just that.")

Things you can do with Spicetify:

- Change colours within the UI
- Inject CSS for advanced customization
- Inject extensions to extend functionalities, change UI, etc
- Inject custom apps
- Remove bloated components to improve performance

For me, I just wanted a difference as well as a new look.

And if you're satisfied running a command-line script you found online (which you shouldn't be, but hey: I did it after I read it quickly), you can choose from a variety of community-created Spotify themes using Spicetify, but in my case I wouldn't use a manual theme

# Installation 
## 1. Linux
![typing](./🐧.png)

### 1.1 Arch Based

- Arch based [list](https://wiki.archlinux.org/title/Arch-based_distributions)

*A little info*, Based Arch on the official wiki is ***incomplete***. if you use an Arch based distro that is not on the list it **works** as long as there is `pacman` package management.

Aur package installation

```sh
yay -S spicetify-cli
```


Next, grant **access permission** to Spicetify to polish the installation

```sh
sudo chmod a+wr /usr/share/spotify

sudo chmod a+wr /usr/share/spotify/Apps -R
```

After that, go into the `~/.config/spicetify` folder.

Run for backup Spotify
```sh
spicetify backup apply enable-devtools
```
Spotify is now still in the default configuration here there are two methods, namely the manual method by editing some spicetify configurations I do not recommend that, then I recommend using the spicetify marketplace so that we can combine some ea customizations (͠≖ ͜ʖ͠≖)

Next to install **spicetify-marketplace**
```sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```

### 1.2 Debian Based

- Debian based [list](https://en.wikipedia.org/wiki/Category:Debian-based_distributions) 

If you are using a Debian-based distro that is not on the list it **works** as long as there is `apt` package management.

First, run the script to download and install Spicetify cwan

```sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.sh | sh
```

Next, grant access permissions to Spicetify to polish the installation

```sh
sudo chmod a+wr /usr/share/spotify

sudo chmod a+wr /usr/share/spotify/Apps -R
```

To view the config use `spicetify -c`, then go to the `~/.config/spicetify` folder.

And run
```sh
spicetify backup apply enable-devtools
```

And Yep your spotify now is still in the previous default configuration there are two methods that are First the manual method by editing some spicetify configurations I don't recommend that, And second I recommend using the spicetify marketplace so that we can combine some customizations (◡_◡҂) ᕤ

Next to install **spicetify-marketplace**
```sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```

### 1.3 Distro Lain
![otherlinux](./othlinux.png)

For other distros such as `Alpine Linux`, `NixOS`, `Gentoo`, and `FreeBSD`. the installation method for Spicetify is similar to [Debian](#12-debian-based), but differs based on the package management and root commands used on each distro. It is important to install the necessary dependency packages and read the distro and Spicetify documentation thoroughly for more specific instructions.

Why is there no ~~~`fedora`~~~?

For `fedora` it's still possible, just like [Debian Based](https://en.wikipedia.org/wiki/Category:Debian-based_distributions).

## 2. Windows
![wedus](./winanim.png)

This is the installation method we recommend for most users. It is the fastest and most reliable way to install Spicetify. ಠ_ಠ

```sh
iwr -useb https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.ps1 | iex
```

And run to back up your spotify.
```sh
spicetify backup apply enable-devtools
```

While your spotify is still in its default configuration, using the spotify marketplace we can incorporate various customizations for a more personalized and customized look.

Next to install **spicetify-marketplace**

```sh
iwr -useb https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.ps1 | iex

```

## 3. MacOS
![MacOs](./apperu.png)


```sh
brew install spicetify/homebrew-tap/spicetify-cli
```

Run to back up your spotify
```sh
spicetify backup apply enable-devtools
```

Your Spicetify is already installed on spotify but it's still plain. I recommend Spicetify Marketplace, to make your Spotify even more pretty and to your taste. go ahead (͡ ° ͜ʖ ͡ °)

```sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```

# Pra-Instalasi

Now you can customize extensions, themes, snippets, and apps. Importantly, all of this is free of charge with no additional costs whatsoever. Hope this information is useful in maximizing your music ¬‿¬