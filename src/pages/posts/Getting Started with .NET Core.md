---
title: Getting Started with .NET Core Web API
author: Matthew Shan
date: '2019-12-27'
thumb_img_path: images/thumbnails/dotnet.png
excerpt: >-
  Here are the setup instructions for our Web API meeting on January 23, 2020.
template: post
---

## Setup Instructions

---

1. First off, lets download the required <a href="https://dotnet.microsoft.com/download" target="_blank">SDK for .NET Core 3.1</a>. Make sure you download the installer for *Build Apps* for your system. This will install the `dotnet` command line interface.

2. Now, lets get a text editor for this. I highly recommand <a href="https://code.visualstudio.com/ target="_blank">Visual Studio Code</a>. It has a nice C# extension and I really like having a terminal and file explorer on the same screen.

3. Later you will need [Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download?view=sql-server-ver15) to manage your database. Might as well grab it for your system now.

![.NET Core Logo](/images/thumbnails/dotnet.png)

## Next Steps

---

**If you've already setup everything, you are good to go! These next instructions are on setting up an API project, which will be explained at our meeting. These notes are here in case if you get lost during the lecture.**

1. Lets start off by making the project. Use your system's command line/terminal to traverse to your desired folder. Then run the following command: <br/>
&#8594; &nbsp; `dotnet new webapi -n [Name of your project]`

2. Now lets remove some of the extra files `dotnet` generated for use. We will create our own files later.

3. [Work in Progress]
