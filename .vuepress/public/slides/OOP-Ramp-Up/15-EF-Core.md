---
marp: true
paginate: true
---

<style>
section { justify-content: flex-start; }
</style>

# EF Core in the Console

- [ ] Entity Framework Core (short intro) - Console application
  - [ ] Code-First (with or without Navigation Properties)

1) Setup
   1) Console App
   1) NuGet
      1) `Microsoft.EntityFrameworkCore.SqlServer`
      1) (**SKIP** - only for scaffolding/reverse engineering) `Microsoft.EntityFrameworkCore.Tools`
1) Create entity classes
1) Create DAL class
1) Create connection string
1) Program
   1) Read from JSON file, write to database
   1) Read from database

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

# Method to Read JSOn Files

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

