---
title: "Track Location Seeker Tool"
description: "Seeker Tools and Their Role in Digital Security"
date: 2023-09-23
draft: false
tags: ["Windows","Linux","ArchLinux", "Hacking"]
categories: ["Tutorial","OS", "Tools", "Social Engineering"]
summary: "Seeker Tools and Their Role in Digital Security"
---

## Seeker?

Seeker is an open-source tool used for web-based location tracking. Seeker allows users to create a link that can be sent to their target. When the target opens the link, the tool will store their location data.

<!-- [![Bruh](https://img.youtube.com/vi/ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=ID) -->

{{< timeline >}}

{{< timelineItem icon="substack" header="Tool Seeker also has its own advantages!" badge="introduction">}}

<i>Here are the various advantages of Tool Seeker:</i>

{{< gallery >}}
    <img src="/posts/track-lokasi-seeker-tool/ketikan.gif" width="337px" />
{{< /gallery >}}

<ul>
    <li>Simple and Easy to Use: Seeker has a simple and easy-to-use interface, which allows users to quickly start searching for information.</li>
    <li>Geolocation Search: Seeker focuses on finding information related to the user's physical location (geolocation), which can be useful for things like cybersecurity or digital investigations.</li>
    <li>Auto Scan: It can perform automatic scans that make it possible to detect potential problems faster than manual checks.</li>
    <li>Integration with Location Maps: Seeker integrates search results with location maps, a useful visualization of the geolocation data found.</li>
</ul>
{{< /timelineItem >}}

{{< timelineItem icon="mug-hot" header="What is missing from this tool?" badge="seeker" >}}

<b><i>For every advantage there is a disadvantage</i></b>, The following include:

{{< gallery >}}
  <img src="/posts/track-lokasi-seeker-tool/ketikannn.gif" width="337px" />
{{< /gallery >}}

<ul>
  <li>Inaccurate Data: Geolocation information is not always accurate, as the data found by Seeker is affected by how much data is publicly available.</li>
  <li>Context Understanding: Search results found by seekers may require a good understanding of context to be interpreted correctly.</li>
  <li>Troubleshooting:This tool can identify problems, but it does not necessarily provide concrete solutions. Users still need to analyze the scan results and take the necessary steps.</li>
  <li>It is important that the advantages and disadvantages vary based on the proper use and correct implementation of these tools.It is always important to use security tools with good ethics and in compliance with applicable laws.</li>
</ul>
{{< /timelineItem >}}

{{< /timeline >}}

## Installation

### Windows Installation

#### Step 1: Git Installation

> - Download [Git](https://git-scm.com/download/win) for Windows.
> - Follow the steps for installation.

#### Step 2: Python & Ngrok Installation

> - Download [Python](https://www.python.org/downloads/windows/) for Windows.
> - Select Python version (Python 3.x is recommended) and download the installer.
> - Then follow steps by steps for installation. Make sure to check the [Add Python to PATH](./python3.webp) during the installation process so that Python can run via Command Prompt.
> -
> - Download [Ngrok](./ngrok.png) For Windows.
> - Make sure you have a [Ngrok](https://ngrok.com) account.
> - Extract ngrok zip file in `C:\ngrok`
> - Search 'Environment' in windows search and select [Edit the Environment Variable Settings](./EnvVarSettings.png).
> - Edit [PATH](./EnvVarPath1.png). Then Add `C:\ngrok` to [PATH](./EnvVarPath2.png) list.
> - Then 'Ok' to Save All Changes.


#### Step 3: Seeker Tool Installation

- Open [Git Terminal](./terminal-gitbash.png) / Command Prompt in Windows and clone the repo.

      git clone https://github.com/thewhiteh4t/seeker.git


- Navigate to the seeker directory:

      cd seeker

- Install Python dependencies:

      pip install -r requirements.txt

### Arch Linux Installation

#### Installation Package Requirement

- Step by step to install on Arch Linux:

      sudo pacman -S git python3 ngrok

- Seeker Tool Installation Here I'm using Mirror From [BlackArch](../blackarch-mirror-install/).

![](./ba-seeker.gif)


### After Installation

After all the installations are done, let's

#### Run Seeker Tool

- [`Windows`](/tags/windows) :

      python seeker.py -p 1337

- [`Arch Linux`](/tags/archlinux) :

      sudo seeker -p 1337

#### Run Ngrok

Authenticate your [Ngrok](https://dashboard.ngrok.com/get-started/your-authtoken) config.

- Authtoken is stored in the default configuration file.

      ngrok config add-authtoken YOUR_AUTH_TOKEN

- Change [`YOUR_AUTH_TOKEN`](./authtoken.png) with your token. Last connect to localhost:

      ngrok http 1337

## Preview

![](./seeker.gif)

 After all is done, you can visit [http://localhost:1337](http://localhost:1337) or with the Port Forwarding ngrok, [https://6ccc-190-2-133-230.ngrok-free.app](https://6ccc-190-2-133-230.ngrok-free.app) in your browser and check if it is working properly. For more details see [image](./#preview).

またね!