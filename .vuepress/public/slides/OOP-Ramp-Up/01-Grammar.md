---
marp: true
paginate: true
---

<style>
section {
  justify-content: flex-start;
}
</style>

<!--
_backgroundColor: lightsteelblue
-->

<!-- This is party a refresher for those who have taken introductory C# courses -->
<!-- Your introductory course may or may not have placed emphasis on the grammar -->
<!-- Objects might not have been emphasized, but they are central to the C# language and should be understood as both essential and commonplace -->


![bg right](./01/ball-457334_640.jpg)

# A Simplified C# Grammar

- [Introduction to C#](#2)
- [Common Grammar Elements](#5)
- [Classes and Class Members](#12)
- [Flow Control](#21)
- [Objects, Inheritance and More](#31)

----

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

> An official [**Language Reference**](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/introduction) is available from Microsoft, including the [formal grammar](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure) for C#.

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
- Brief explanation of terms

> Our focus is on

* Common Grammar Elements
* Classes and Class Members
* Flow Control
* Objects, Classes and More

> Use this as a starting point for learning the C# Grammar, then reference the [**official grammar**](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure).

----

<!--
_backgroundColor: lightsteelblue
-->
# Common Grammar Elements

- Program Statements and Statement Blocks
- Variable Declarations
- Assignment Operations
- Expressions
- Namespace Declarations
- Using

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
  - `expression` is any valid C# expressionthat matches the variable's data type.
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
  - **`*=`** Multiply-Equals and **`/=`** Divide-Equals and **`%=`** Modulus-Equals
- `expression` is any valid C# expression matching the variable's data type
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

* Expressions are ***evaluated*** at run-time.
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

----

<!--
_backgroundColor: lightsteelblue
-->
# Classes and Class Members

- Class Definition
- Field Declarations
- Property Declarations
- Methods
- Constructors

---

# Classes and Class Members

> A class is a "blue print" for creating objects. A class describes
> 
> - What a thing **looks like** (*Fields* and *Properties*)
> - How a thing **behaves** (*Constructors* and *Methods*)

> Classes are [**reference types**](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types).
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
    [set { /* Body of setter */ }]
}
```

- `[accessModifier]` is `public`, `private` (the default), `protected`, or `internal`
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

<!--
_backgroundColor: lightsteelblue
-->
# Flow Control

- Method Calls
- Selection
  - If-Else
  - Switch
- Loops
  - For + ForEach
  - While + Do-While
 
----

# Method Calls

<!--
While the [Method Declaration](#method-declarations) *defines a set of instructions*, those instructions only run when the method is *called* from somewhere. The operating system is responsible to call the `Main()` method, but after that, all method calls are the responsibility of our program. The grammar of a method call is as follows.
-->

```csharp
[[ClassName | ObjectName].]MethodName(argumentList)
```

A **Method Call** is an expression where
- `MethodName` is the programmer-defined name of the method,
- `argumentList` is a comma-separated list of values that correspond to the parameters of the method declaration,
- When called from outside the class, use
  - `ClassName` for `static` methods, `ObjectName` for **instance** methods
  - The **Member Access Operator** - `.` - after `ClassName`/`ObjectName`
- When called from inside the class,
  - `ClassName`/`ObjectName` can be omitted.

----

# `this` Keyword

- Only used with **instance** (non-static) members of the class within which it is used
- The `this` keyword is implied, but is optional

    ```csharp
    Display("Some Text")
    ```

    is interpreted as

    ```csharp
    this.Display("Some Text")
    ```

----

# If-Else

```csharp
if(conditionalExpression)
   statementOrStatementBlock // true side
else
   statementOrStatementBlock // false side
```

The **if-else** provides **alternate paths of logic**, where
- `conditionalExpression` is an expression whose ultimate data type is a `bool`.
- `statementOrStatementBlock` is either a **single** statement or a **single** statement *block* (zero or more statements inside curly braces - `{ }`).
  - Immediately after the `if`: will run if `conditionalStatement` results in a **`true`**
  - Immediately after the `else`: will run if `conditionalStatement` results in a **`false`**
  - The `else statementOrStatementBlock` portion is optional.

----

# Switch-Case

```csharp
switch(cardinalExpression)
{
    case matchingExpression1:
        statementOrStatementBlock
        break;
    case matchingExpression2:
        statementOrStatementBlock
        break;
    // ...additional case statements...
    default:
        statementOrStatementBlock
        break;
}
```
----

# Switch-Case (cont.)

The **switch** provides **alternate paths of logic**, where
- `cardinalExpression` is an expression that produces a single value of any primitive data type (`int`, `double`, `char`, `string` or an `enum`).
- Each `matchingExpression` is a constant value whose data type matches the data type of the `cardinalExpression`. A match is determined by the value of the `cardinalExpression` being **equal to** the `matchingExpression`. The `break` indicates the end of the path of logic for the matching expression.
- `statementOrStatementBlock` is either a **single** statement or a **single** statement *block* (zero or more statements inside curly braces - `{ }`).
- The `default` block will execute if `cardinalExpression` did not match any of the listed matching expressions.

----

# `for` Loop

<!--
- `initializations` is a comma-separated set of variable initializations or assignments; the variables identified here should be ones used in the `conditionalExpression`. This portion is optional
- `conditionalExpression` is an expression whose ultimate data type is a `bool`. The `conditionalExpression` is evaluated at the beginning of the loop.
- `incrementations` is a comma-separated set of modifications to the variable(s) controlling the loop; the variables identified here should be ones used in the `conditionalExpression`. This portion is optional.
- `statementOrStatementBlock` is either a **single** statement or a **single** statement *block* (zero or more statements inside curly braces - `{ }`).
  - The `statementOrStatementBlock` will only execute as long as the `contitionalExpression` results in a **`true`** value.
  - The loop exits when the `conditionalStatement` results in a **`false`** value.
-->

```csharp
for([initializations]; conditionalExpression; [incrementations])
   statementOrStatementBlock
```

The **for** provides **repetitive execution of code**, where
- `initializations` is an optional comma-separated set of variable initializations
- `conditionalExpression` is an expression whose ultimate data type is a `bool`
  - Evaluated at the beginning of the loop.
  - Loop exits when the `conditionalStatement` is **`false`**
- `incrementations` is an optional comma-separated set of variable modifications
- `statementOrStatementBlock` is either a **single** statement or a **single** statement *block*

----

# `foreach` Loop

```csharp
foreach([dataType] variable in enumerableCollection)
   statementOrStatementBlock
```

The **for** provides **repetitive execution of code**, where the repetition occurs for each item in the `enumerableCollection`.
- `enumerableCollection` is any object that represents a collection of values
  - (i.e.: supports `IEnumerable`).
- `variable` is an identifier to represent each item in the collection as it loops
- `dataType` declares the data type of the variable
  - This is optional
  - When omitted the data type of `variable` is inferred from the `enumerableCollection`.

----

# `while` Loop

```csharp
while(conditionalExpression)
   statementOrStatementBlock
```

The **while** provides **repetitive execution of code**, where
- `conditionalExpression` is an expression whose ultimate data type is a `bool`
  - Evaluated at the **beginning** of the loop.
  - Loop exits when the `conditionalStatement` is **`false`**
- `statementOrStatementBlock` is either a **single** statement or a **single** statement *block*
  - It executes at a **minimum** of **zero** times

----

# `do while` Loop

```csharp
do
   statementOrStatementBlock
while (conditionalExpression);
```

The **do-while** provides **repetitive execution of code**, where
- `conditionalExpression` is an expression whose ultimate data type is a `bool`
  - Evaluated at the **end** of the loop.
  - Loop exits when the `conditionalStatement` is **`false`**
- `statementOrStatementBlock` is either a **single** statement or a **single** statement *block*
  - It executes at a **minimum** of **one** time

----

<!--
_backgroundColor: lightsteelblue
-->
# Objects, Inheritance and More

- Enumerations
- Structures
- Interfaces
- Data Types and Inheritance
- Generics
- Object Instantiation
- Extension Methods
- Delegates
- Events

----

# Enumerations

> Enumerations are [**value types**](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types).

```csharp
[accessModifier] enum TypeName
{
    NamedConstantList
}
```

- `[accessModifier]` is either `public` or `internal`. If no access modifier is provided, then the default modifier is `internal`
- `TypeName` is the programmer-defined name for the enumerated type
- `NamedConstantList` is a comma-separated list of names for constants in this format

```csharp
ConstantName [= value]
```

----

# Structures

> Structures are similar to classes, but are [**value types**](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types).

```csharp
[accessModifier] struct TypeName
{
    // Structure members
}
```

- `[accessModifier]` is either `public` or `internal`. If no access modifier is provided, then the default modifier is `internal`
- `TypeName` is the programmer-defined name for the structure type
- The members of a struct include [**fields**](#15), [**properties**](#16), [**methods**](#19), and [**constructors**](#20)

----

# Interfaces

> "An interface defines a contract. Any class or struct that implements that contract must provide an implementation of the members defined in the interface." ([source](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface))

```csharp
[accessModifier] interface TypeName
{
    // Interface members
}
```

- `[accessModifier]` is either `public` or `internal`. If no access modifier is provided, then the default modifier is `internal`
- `TypeName` is the programmer-defined name for the interface type

----

# Interfaces

Interface members can include the signatures for

- Properties - Identify the presence of a getter and/or optional setter method
- Methods - No body is specified for the method *(pre C# 8)*

```csharp
propertyType PropertyName { get; [set;] }
```

```csharp
returnType MethodName(parameterList);
```

There are **no access modifiers** on interface members.

----

# Interface Implementations

- You **cannot** directly instantiate an interface.
- You can **reference** an object by its interface type.
- Classes and structs can implement many interfaces.


----

# Data Types and Inheritance

> Inheritance can be applied to classes, interfaces, and enumerations

- A **`class`** can only **inherit** from one other class, but may **implement** multiple interfaces
- An **`interface`** can only **inherit** from other interfaces
- An **`enum`** can only **inherit** from the integer-based types `int`, `short`, `long`

----

# Data Types and Inheritance

```csharp
[accessModifier] typeKeyword DerivedTypeName [: BaseType]
{
    // Members
}
```

Inheritance "builds on" a base type data type where

- `[accessModifier]` is either `public` or `internal`. If no access modifier is provided, then the default modifier is `internal`
- `typeKeyword` is either `class`, `enum` or `interface`
- `DerivedTypeName` is the programmer-supplied name for the data type that **inherits from** the `BaseType`

----

# Type Inheritance and Interface Implementation

```csharp
[accessModifier] class DerivedTypeName [: BaseType[, InterfaceTypes...]]
{
    // Members
}
```

Classes can combine inheritance with interfaces

- First identify the base type you **inherit** from
- Add additional interfaces as needed
- Separate the types with commas

----

# Generic Types

```csharp
[accessModifier] typeKeyword TypeName<T>
{
    // type members
}
```

**Generics** can be applied to structs, classes and interfaces, where

- `[accessModifier]` is either `public` or `internal`. If no access modifier is provided, then the default modifier is `internal`
- `typeKeyword` is either `class`, `struct` or `interface`
- `TypeName` is the programmer-supplied name for the data type
- **`T`** is a generic **placeholder** for a type declared in a subtype or an instance of the generic

----

# Generic Types - Usage

```csharp
[accessModifier] classOrInterface DerivedTypeName [: GenericBase<DataType>]
```

You can create a subtype from a generic type ([**inheritance**](#38)), where

- `Datatype` is a specific type

```csharp
new GenericType<DataType>(argumentList)
```

You can [instantiate](#43) from a generic type and provide the specific `DataType` at the moment of instantiation. 

----

# Generic Methods

```csharp
[accessModifier] [static] returnType MethodName<T>(ParameterList)
{
    // body of method
}
```

**Generics** can be applied to [method declarations](#19), where

- The generic type `<T>` can be explicitly or implicitly stated
  - Explicit if the type `T` is not included in the parameter list
  - Implicit if the type `T` is included in the parameter list
- The `returnType` can be identified as the generic type `T`

----

# Object Instantiation

```csharp
new TypeName(argumentList)
{
    // Initializer List
}
```

Objects can be instantiated from classes and structs using the `new` keyword, where

- `TypeName` is the name of the class or struct
- `argumentList` is a comma-separated list of values/expressions whose
  - data type and order matches a constructor in the class/struct
- The initializer list is
  - a comma-separated list of assignments to public properties of the class/struct
  - wrapped in parenthesis
  - optional

----

# Delegates

You declare a delegate similar to how you declare a [method signature for an interface](#35).

```csharp
delegate returnType DelegateName(parameterList);
```

You **instantiate** a delegate by passing in the name of a method with a **matching signature**.

```csharp
DelegateName methodInstance = new DelegateName(methodName)
```

You **invoke** (call) a delegate like you would [call any method](#22).

```csharp
methodInstance(argumentList)
```

----

# Events

[**Events**](https://docs.microsoft.com/en-us/dotnet/standard/events/) are based on [delegates](#43) but use the [**observer design pattern**](https://docs.microsoft.com/en-us/dotnet/standard/events/observer-design-pattern). They allow us to

- Create "hooks" inside of our methods to invoke other methods as "observers"
- "Publish" a single event to multiple "subscribers"

> ".NET provides the [`EventHandler`](https://docs.microsoft.com/en-us/dotnet/api/system.eventhandler?view=netcore-3.1) and [`EventHandler<TEventArgs>`](https://docs.microsoft.com/en-us/dotnet/api/system.eventhandler-1?view=netcore-3.1) delegates to support most event scenarios. Use the [EventHandler](https://docs.microsoft.com/en-us/dotnet/api/system.eventhandler?view=netcore-3.1) delegate for all events that do not include event data. Use the [`EventHandler<TEventArgs>`](https://docs.microsoft.com/en-us/dotnet/api/system.eventhandler-1?view=netcore-3.1) delegate for events that include data about the event. These delegates have no return type value and take two parameters (an object for the source of the event, and an object for event data)." ([MS Docs](https://docs.microsoft.com/en-us/dotnet/standard/events/))

---

<!--
_backgroundColor: #1111
_color: black
-->

# The End