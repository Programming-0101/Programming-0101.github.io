---
marp: true
paginate: true
---

<style>
section { justify-content: flex-start; }
</style>

# EF Core in the Console

![bg fit right](.15/../15/stick_figure_working_on_database_1600_clr_8845.png)

- Bare-bones Console Application
- SQL Server Database
  - Store Data
  - Read Data

* Project Setup
* Use JSON Data (*to store in database*)
* Entity Framework Core
  * Entities
  * Database Context

----

# Project Setup

1) Create a new console application called "ConsoleApp" with a solution file called "EF Core Console.sln".
1) Add a NuGet packages for Entity Framework:
   1) `Microsoft.EntityFrameworkCore`
   1) `Microsoft.EntityFrameworkCore.SqlServer`
1) Add the School Catalog database to you database server
   1) [SchoolCatalog.dacpac](./15/SchoolCatalog.dacpac)

----

# Add JSON Files - `courses.json`

```json
[
   {
      "courseId": "PROG-0101",
      "name": "Programming Fundamentals with OOP",
      "hours": 75,
      "credits": 3.0
   },
   {
      "courseId": "DATA-0150",
      "name": "Foundations of Database Design",
      "hours": 75,
      "credits": 3.0
   },
   {
      "courseId": "CORE-0103",
      "name": "Communications",
      "hours": 50,
      "credits": 2.0
   }
]
```

----

# Add JSON Files - `terms.json`

```json
[
    { "termId": 20203, "startDate": "2020-09-08", "endDate": "2020-12-18" },
    { "termId": 20211, "startDate": "2021-01-04", "endDate": "2021-04-23" },
    { "termId": 20212, "startDate": "2021-05-03", "endDate": "2021-07-30" },
    { "termId": 20213, "startDate": "2021-09-07", "endDate": "2012-12-17" },
    { "termId": 20221, "startDate": "2022-01-04", "endDate": "2022-04-22" },
    { "termId": 20222, "startDate": "2022-05-02", "endDate": "2022-07-29" },
    { "termId": 20223, "startDate": "2022-09-06", "endDate": "2022-12-16" }
]
```

----

# Create Entity Classes - `Term`

```csharp
public class Term
{
   public int TermId { get; set; }
   public DateTime StartDate { get; set; }
   public DateTime EndDate { get; set; }
   
   public override string ToString()
   {
         return $"{StartDate.ToShortDateString()}-{StartDate.ToShortDateString()}";
   }
}
```

----

# Create Entity Classes - `Course`

```csharp
public class Course
{
   public string CourseId { get; set; }
   public string Name { get; set; }
   public int Hours { get; set; }
   public double Credits { get; set; }

   public override string ToString()
   {
         return $"{CourseId} - {Name}";
   }
}
```

----

# Create Entity Classes - `Section`

```csharp
public class Section
{
   public int SectionId {get; set;}
   public int TermId { get; set; }
   public string CourseId { get; set; }
   public string Number { get; set; }
}
```

----

# Add DAL Class

```csharp
using Microsoft.EntityFrameworkCore;

public class SchoolCatalogContext : DbContext
{
   const string ConnectionString = 
      "Data Source=.;Initial Catalog=SchoolCatalog;Integrated Security=true;";
   
   public DbSet<Models.Course> Courses { get; set; }
   public DbSet<Models.Term> Terms { get; set; }
   
   protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
   {
         optionsBuilder.UseSqlServer(ConnectionString);
   }
}
```

----

# Method to Read JSON Files

```csharp
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
```

```csharp
IEnumerable<T> ReadData<T>(string fileName)
{
   var result = new List<T>();
   string jsonText = File.ReadAllText(fileName);
   var options = new JsonSerializerOptions
   {
         PropertyNamingPolicy = JsonNamingPolicy.CamelCase
   };
   result = JsonSerializer.Deserialize<List<T>>(jsonText, options);
   return result;
}
```

----

# Code to Write to Database

Get the data from the JSON files

```csharp
var courses = app.ReadData<Course>("courses.json");
var terms = app.ReadData<Term>("terms.json");
```

Write the data to the database (only if tables are empty)
```csharp
using (var context = new Data.SchoolCatalogContext())
{
      if(!context.Courses.Any())
         context.Courses.AddRange(courses);
      if(!context.Terms.Any())
         context.Terms.AddRange(terms);
      context.SaveChanges();
}
```

----

# Code to Read from Database

Read and display database contents

```csharp
using (var context = new Data.SchoolCatalogContext())
{
      foreach(var item in context.Courses)
         Console.WriteLine(item);

      foreach(var item in context.Terms)
         Console.WriteLine(item);
}
```
