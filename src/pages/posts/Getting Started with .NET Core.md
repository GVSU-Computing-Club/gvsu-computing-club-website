---
title: Getting Started with .NET Core Web API
author: Matthew Shan
date: '2020-01-23'
thumb_img_path: images/thumbnails/dotnet.png
excerpt: >-
  Here are the setup instructions for our Web API meeting on January 23, 2020.
template: post
---




## Setup Instructions

---



1. First off, lets download the required <a href="https://dotnet.microsoft.com/download" target="_blank">SDK for .NET Core 3.1.1</a>. Make sure you download the installer for *Build Apps* for your system. This will install the `dotnet` command line interface.

2. Now, lets get a text editor for this. I highly recommand <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>. It has a nice C# extension and I really like having a terminal and file explorer on the same screen.

3. Later you will need <a href="https://docs.microsoft.com/en-us/sql/azure-data-studio/download?view=sql-server-ver15" target="_blank">Azure Data Studio</a> to manage your database. Its a nice database management software created by Microsoft. Might as well grab it for your system now.

*Alternatively to Steps 1 & 2, if you like IDEs you can use Visual Studio 2019. If you do, make sure you install required components for .NET Core. Be warned: directions will be a different although concepts will be the same. I personally choose not to use Visual Sudio 2019 because it is a little heavy.* 

<img src="/images/thumbnails/dotnet.png" 
alt=".NET Core logo"  border="10" style=" width: 60%; height: 60%; text-align: center; display: block; margin: 0 auto;"/>

## Next Steps

---

**If you've already setup everything, you are good to go! These next instructions are on setting up an API project, which will be explained at our meeting. These notes are here to supplement the lecture.**

Intro: Follow along the C# Introduction.

1. Lets start off by making the project. Use your system's command line/terminal to traverse to your desired folder. Then run the following command: <br/>
&nbsp; &#8594; &nbsp; `dotnet new webapi -n [Name of your project]`

2. Now lets add **Swagger** to our project. This will help us test our API calls.
<br/> <br/> Run the following command to add the package to our project:<br/>
&nbsp; &#8594; &nbsp; `dotnet add <Name>.csproj package Swashbuckle.AspNetCore -v 5.0.0-rc4`
<br/> <br/> Now lets add some code to the top of `Startup.cs`: <br/>
```C#
using Microsoft.OpenApi.Models;
```
<br/> In `ConfigureServices()` function in `Startup.cs`:
```C#
    // Register the Swagger generator, defining 1 or more Swagger documents
    services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
    });
``` 
<br/> In `Configure()` function in `Startup.cs`:
```C#
    // Enable middleware to serve generated Swagger as a JSON endpoint.
    app.UseSwagger();

    // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
    // specifying the Swagger JSON endpoint.
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = string.Empty;
    });
```

3. Now lets build and run the project:<br/>
&nbsp; &#8594; &nbsp; `dotnet build`<br/>
&nbsp; &#8594; &nbsp; `dotnet run`<br/>
You will be provided with a localhost URL. Ctrl+Click it and you will now be taken to the Swagger UI. You should see a `WeatherForecast` GET request, provided by Microsoft.

4. I originally wanted to delete the extra weather files created by `dotnet`, but lets actually keep them as future reference. For the sake of organizaton, create a `Models` folder and `WeatherForecast.cs` into `Models`. Now during the presentation, learn about Controllers and Models and how the relate to the API. 

<hr/>

5. Follow along and create the required models and controllers, or create your own. We are going to learn about the HTTP Requests that are used in REST APIs

6. Now that we've learned the project structure of the Web API, and got a GET http request working, next week we will be connecting our project to an actual database and making POST, PUT, and DELETE requests.