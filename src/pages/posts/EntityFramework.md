---
title: Web API Part 2 - Connecting to a database
author: Matthew Shan
date: '2020-01-30'
thumb_img_path: images/thumbnails/ef.png
excerpt: >-
  Now that we have the basics of a Web API down, lets hook it up to a database with Entity Framework and finish it off!
template: post
---
#### Update: Code from the meeting

<b>[</b>Repo of Code this week: <a href="https://github.com/GVSU-Computing-Club/dotnet-webapi-sample/tree/EntityFramework" target="_blank">here</a><b>]

## Setup Instructions

---

Before you get started here, if you haven't already refer to the previous post for setup: <a href="../Getting%20Started%20with%20.NET%20Core/"> Here </a>

Your current code should be something like <a href="https://github.com/GVSU-Computing-Club/dotnet-webapi-sample" target="_blank"> this</a>

If you want to deploy app to the cloud, create a Microsoft Azure account: <a href="https://azure.microsoft.com/en-us/"> Here</a>. You will need your credit card, but they won't charge it without your consent. But if that isn't your cup of tea, you can just watch.

## Next Steps

---
**If you've already setup everything, you are good to go! These next instructions are on finishing up an API project, which will be explained at our meeting. These notes are here to supplement the lecture.**

Since last week we went a bit fast on the last part, lets review the controller we made before jumping in.

1. Lets make a database. I use <a href="https://www.gearhost.com/">GearHost</a> which lets us host a database for free. No credit card required.

2. Now lets install the EntityFramework tool to our dotnet command line. It's what will bridge our C# Code and our database. <br/> &nbsp; &#8594; &nbsp; `dotnet tool install --global dotnet-ef` <br/> Lets also get all the required packages to our project in the meantime/<br/> &nbsp; &#8594; &nbsp; `dotnet add package Microsoft.EntityFrameworkCore`<br/> &nbsp; &#8594; &nbsp; `dotnet add package Microsoft.EntityFrameworkCore.SqlServer`<br/> &nbsp; &#8594; &nbsp; `dotnet add package Microsoft.EntityFrameworkCore.Design`

3. Create a `CISClassContext.cs` class in the models folder.
```c#
  using Microsoft.EntityFrameworkCore;  
  namespace MyAPI.Models {
      public class CISClassContext : DbContext {
          public CISClassContext(DbContextOptions<CISClassContext> options) : base(options){ 

          }

          public DbSet<CISClassModel> CISClassItems {get; set;}
      }
  }
```

4. ConnectionString in App Settings (appsettings.json). This info is CONFIDENTIAL. Make sure you put it in your .gitignore when you push API code to a repository.
```json
  {
    "Data": {
      "APIConnection": {
        "ConnectionString": "Server=[serverName];Database=[datbaseName];User Id=[userId];Password=[password];Trusted_Connection=False"
      }
    } 
  }
```

5. Code to add in `Startup.cs`: 
Up top add this:
```c#
using Microsoft.EntityFrameworkCore;
using MyAPI.Models;
```
Now have your `ConfigureServices()` method look like this
```c#
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            /** NEW STUFF BELOW HERE **/
            //Adding our DBContext
            services.AddDbContext<CISClassContext>(
                opt => opt.UseSqlServer(Configuration["Data:APIConnection:ConnectionString"])
            );
            /** NEW STUFF ABOVE HERE **/

            services.AddControllers();
            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
            });
        }
```

6. Primary key in our model. We can just add an ID property to our class. 

7. Migrations. Lets have EnitityFramework now generate our database table based on the CISClassModel class. <br/> &nbsp; &#8594; &nbsp; `dotnet ef migrations add AddCISClassToDB` <br/> &nbsp; &#8594; &nbsp; `dotnet ef database update`

8. Look at the data in Azure Data Studio. 

9. Add our context to our controllers.

10. POST, PUT, DELETE Requests.

### Deploying to Azure

1. Press Ctrl+Shift+X to open the extensions tab. Then add the `Azure App Service` to VS Code.

2. Now create a publish folder by doing the following command:<br/> &nbsp; &#8594; &nbsp; `dotnet publish -c Release -o ./Publish`

3. Right Click the Publish Folder and click "Deploy to Web App"