---
title: Web API Part 2 - Connecting to a database
author: Matthew Shan
date: '2020-01-30'
thumb_img_path: images/thumbnails/ef.png
excerpt: >-
  Now that we have the basics of a Web API down, lets hook it up to a database with Entity Framework and finish it off!
template: post
---

## Setup Instructions

---

Before you get started here, if you haven't already refer to the previous post for setup: <a href="../Getting%20Started%20with%20.NET%20Core/"> Here </a>

Your current code should be something like <a href="https://github.com/GVSU-Computing-Club/dotnet-webapi-sample" target="_blank"> this </a>

If you want to deploy app to the cloud, create a Microsoft Azure account: here

## Next Steps

---
**If you've already setup everything, you are good to go! These next instructions are on finishing up an API project, which will be explained at our meeting. These notes are here to supplement the lecture.**

Since last week we went a bit fast on the last part, lets review the controller we made before jumping in.

1. Lets make a database. I use <a href="https://www.gearhost.com/">GearHost</a> which lets us host a database for free. No credit card required.

2. Now lets install the EntityFramework tool to our dotnet command line. It's what will bridge our C# Code and our database. <br/> &nbsp; &#8594; &nbsp; `dotnet tool install --global dotnet-ef`

3. CISClassContext : DbContext

4. ConnectionString in App Settings

5. Configuration in Startup

6. Primary key in our model

7. Migrations

8. Add our context to our controllers

9. Add data our database

10. POST, PUT, DELETE Requests.

### Deploying to Azure

1.

2.

3.  