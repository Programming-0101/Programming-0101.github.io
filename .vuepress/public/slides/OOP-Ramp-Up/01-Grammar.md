---
marp: true
paginate: true
---

# C#

<!-- Case-Sensitive => UPPER- and lower-case case characters are different -->
<!-- Type-Safe => The data type of a thing is known at compile-time -->
<!-- Object-Oriented => Object paradigm to provide Polymorphism and Encapsulation -->
<!-- Extensible => You can add to (*extend*) the words built into the language -->

> As a **programming** language, is

* **Case-Sensitive**
* **Type-Safe**
* **Object-Oriented**
* **Extensible**

----

# C# Grammar

<!-- Keywords -->
<!--  => Define Data Types (int, string, bool) -->
<!--  => Provide Points of Extensibility (class, enum, interface) -->
<!--  => Segment and Link code (namespace, using) -->
<!--  => Enhance code security and accessibility (public, private, protected, internal) -->
<!-- Identifiers => Names the PROGRAMMER give to things (classes, variables, methods, etc.) -->
<!-- Symbols -->
<!--  => Provide structure and context (curly braces, semicolon, parenthesis) -->
<!--  => Operations (Arithmetic, Logical, Relational)  -->

- Grammar: A set of **rules** about how to write the language.

> As a programming **language**, C# has

* **Keywords** - Words built into the language that carry a specific meaning.
* **Identifiers** - Words added to the language and given meaning by the programmer.
* **Symbols** - Non-alpha-numeric characters that "perform" some specific operation in support of the keywords and identifiers.

----

# A Simplified C# Grammar

<!-- Most of the grammar rules in C# are quite short, defining the order of **keywords**, **identifiers** and **symbols**. In the following grammars, the use of Square brackets (**`[]`**) indicate an optional part of the syntax for the grammar rule; those square brackets are *not* actual symbols in the final syntax of the grammar -->

- Short representation of the grammar
- Square brackets (**`[]`**) indicate an optional part of the syntax for the grammar rule
- Brief explanation of terms.

----

# Program Statements and Statement blocks

- Individual instructions are known as **Program Statements**.
  - Ends in a semicolon (`;`)
- **Statement Block** - zero or more program statements that are enclosed in a set of curly braces (`{ }`)
  - Frequently used with **Flow Control Statements**

----

# Variable Declarations

<!--
Before a variable can be used, it must be *declared*. Declaring a variable tells the compiler to

* set aside room in memory to store information,
* treat that data as a specific data type, and
* refer to that information by the variable name
-->

```csharp
dataType variableName [= expression] [, ...]
```

A **Variable Declaration** defines a new variable where

- `dataType` is any built-in or programmer-defined data type.
- `variableName` is an **identifier** (name) to represent a value
- an optional initial value may be assigned, as denoted by `[= expression]`,
  - `expression` is any valid C# expression whose final data type matches the variable's data type.
  - Declaring and initializing at the same time is called **Variable Initialization**.
- Additional variable names (with or without initial values) can be declared using a comma-separated list.
  - All variables are of the same data type as the first variable in the list.

----

# Assignment Operation

**Assignment Operations**: Operations where a value is assigned or stored in a variable.

```csharp
variableName assignmentOperator expression
```

- `variableName` is the name of the variable that will receive/store the value.
- `assignmentOperator` is one of the following:
  - **`=`** Equals (*Assign*)
  - **`+=`** Plus-Equals and **`-=`** Minus-Equals
  - **`*=`** Multiply-Equals and **`/=`** Divide-Equals
  - **`%=`** Modulus-Equals
- `expression` is any valid C# expression
  - Final data type matches the variable's data type
- Add a semicolon to make it an **assignment statement**
  - `total = price * quantity;`

----

# Expressions

<!-- When an expression is processed by the computer, a single value is produced. This value can then be used in whatever operation the expressions occurs. For example, the value might be passed into a method as part of a method call, or it might be placed in a variable as part of an assignment statement. -->

An **Expression** is any combination of 

- *literal values*,
- *variable names*,
- *operators*, and/or 
- *method calls* (where the method returns a value).

* When an expression is processed by the computer, a **single value** is produced.

----

# Namespace Declaration

<!-- **Namespaces** are used to group classes and other programmer-defined data types into a single named group. The reason for grouping programmer-defined data types into namespaces is to prevent what are called "naming collisions". A naming collision is where two or more classes or other programmer-defined data types are given the same name. In other words, you cannot have two classes named `Circle` in the same namespace. However, if you place those two classes in different namespaces, then that is acceptable because the compiler will then be able to distinguish between the two classes based on the namespace they belong to.

Whenever a class or other data type is placed in a namespace, that namespace becomes part of the ***fully-qualified*** name of the data type. For example, if a class named `Circle` is placed in a namespace called `Geometry.Shapes`, then the fully qualified name of the class is `Geometry.Shapes.Circle`.

Namespaces allow us to isolate our classes and other data types into groups. All of the classes/data types in a given namespace can automatically reference each other. To reference or use data types in other namespaces, we must either use their fully-qualified names or *include* them through the **Using Statement**. -->

```csharp
namespace Name
{
    // Classes, enumerations, or other programmer-defined data types
}
```

A **Namespace Declaration** groups ***programmer-defined*** data types where
- The `Name` of the namespace can be one or more dot-separated names. For example, the following are all valid names for namespaces.
  `System`
  `System.Collections`
  `MyGame`
  `MyGame.GameRules`

----

# Using Statement

```csharp
using NamespaceName;
```

- Allows access to all the data types in referenced namespace
- Typically placed at the beginning of a file

```csharp
using Alias = NamespaceName.DataTypeName;
```

- Create an alternate name for a data type (a class, enum, interface, etc.)

```csharp
using static NamespaceName.DataTypeName;
```

- Allows us to use the name of static members without the class name

---

# Classes and Class Members

> A class is a "blue print" for creating objects. A class describes
> 
> - What a thing **looks like** (*Fields* and *Properties*)
> - How a thing **behaves** (*Constructors* and *Methods*)

<!--
As an object-oriented language, classes play a very prominent part of the code we write in C#. It is within classes, for example, that we place variables (also called *fields*) and methods (which are "*named* sets of instructions"). One of the first things that classes give us developers is a *context* or ***scope*** for the code that we write. Classes are also building blocks, acting as blueprints for new and complex data types that we as programmers can create as we develop richer and more complex computer programs. Classes permeate all the code that we write in C# and are so fundamental that you can't even write a "Hello World" program without them.
-->

----

# Class Definition

```csharp
[accessModifier] class ClassName
{
  // FieldDeclarations
  // PropertyDeclarations
  // Constructors
  // MethodDeclarations
}
```

A **Class Definition** describes a new data type where

- `[accessModifier]` is either `public` or `internal`. If no access modifier is provided, then the default modifier is `internal`.
- `ClassName` is the programmer-supplied name for the class (in `TitleCase` format)
- `FieldDeclarations`, `PropertyDeclarations`, `Constructors` and `MethodDeclarations` are all optional and can appear in any order.

----

# Field Declarations

<!-- `satic` - If present, the field is *shared* among all instances of the class. If absent (which is the common case) then the field is an *instance* member and one is created every time an object based on the class is created.  -->
<!-- `_FieldName` By convention, private fields are given an underscore as a prefix to the name. -->
<!-- `constantExpression` Being a constant expression does *not* mean that the field is a constant, only that the initial value stored in the field is a constant and can be known at compile time *before* the program runs. -->

```csharp
[accessModifier] [static] dataType _FieldName [= constantExpression];
```

A **Field Declaration** identifies a *static* or *instance* member variable of the class where
- `[accessModifier]` is either `public`, `private`, `protected`, or `internal`. 
  - Optional - the default modifier is `private`.
- `[static]` is an optional keyword
- `dataType` is any built-in or programmer-defined data type
- `_FieldName` is a the name you give to the member variable
- `constantExpression` is an optional expression producing a value

---

# Property Declarations

Properties are a kind of cross between methods and fields.

- **Used** (accessed) like a field
  - e.g.: `int age = student.Age;`
- **Runs** like a method
  - Specific logic in order to do the getting/setting
  - **`set`** is access when the property is on the left side of an assignment
  - All other cases use the **`get`**
- **`get`** is required
- **`set`** is optional

----

# Explicitly Implemented Property

<!--
Explicitly implemented properties are properties where the programmer supplies the getter and setter implementations. The bodies of the getter and setter may reference a field (known as a **backing store**) that holds the actual information. In these cases, the property is working to provide a **controlled access** to the underlying field's data.
-->
<!--
In other situations, a property may merely have a getter where the body of the getter *derives* or *calculates* a value to return from some other source, such as a calculation.
-->

```csharp
[accessModifier] [static] dataType PropertyName
{
    get { /* Body of getter */ }
    set { /* Body of setter */ }
}
```

- `[accessModifier]` is `public`, `private`, `protected`, or `internal`
  - default is `private`.
- `[static]` is optional
- `dataType` is any built-in or programmer-defined data type
- `PropertyName` is a the name you give to the property
- `Body of getter` instructions that return a value
- `Body of the setter` instructions to store information
  - incoming data is held in the **`value`** keyword

----

# Auto-Implemented Property

<!--
Autoimplemented properties are properties where the compiler takes care of the getter and setter implementations and also supplies a hidden field as the **backing store** for the property. The default get implementation is to retrieve the value from the backing store while the default set implementation is to place a value into the backing store.
-->

```csharp
[accessModifier] [static] dataType PropertyName { get; set; }
```

- `[accessModifier]` is `public`, `private`, `protected`, or `internal`
  - default is `private`.
- `[static]` is optional
- `dataType` is any built-in or programmer-defined data type
- `PropertyName` is a the name you give to the property

----

# Method Declarations

```csharp
[accessModifier] [static] returnType MethodName(ParameterList)
{
    // body of method
}
```

- `[accessModifier]` is `public`, `private`, `protected`, or `internal`
  - default is `private`.
- `[static]` is optional
- `returnType` is any built-in or programmer-defined data type
  - Signifies the kind of information that the method will return
  - If the method does not return any information, then use `void`
- `MethodName` is a the name you give to the method.
- `ParameterList` is a comma-separated list of individual variable declarations.

----

# Constructors

```csharp
[accessModifier] ClassName(ParameterList)
{
    // body of constructor
}
```

A **Constructor** is a set of instructions used when **instantiating** (creating) an object.

- `[accessModifier]` is `public`, `private`, `protected`, or `internal`
  - default is `private`.
- `ClassName` - Must be the same name as the class
- `ParameterList` is a comma-separated list of individual variable declarations.
- There is **no return type**
  - Classes never return any information - they are simply blocks of instructions used to set up the **initial state** of the object.

----

