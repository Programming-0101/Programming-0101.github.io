---
marp: true
paginate: true
---

<style>
section { justify-content: flex-start; }
</style>

# Enumerations

An enumeration is a

* Programmer-defined **primitive** data type
* Collection of **named values**
* **Value type**
* Better substitute for "Magic Numbers"

----

# Magic Numbers - The Land Before `enum`

```csharp
int status;
// ...
if (status == 5) // What does 5 mean?
```

* We wanted to distinguish different states (such as the `status` of something)
* The number of different states is typically more than 3
  * Otherwise we could have simply used a `bool`
* Simple integer values are easy to distinguish between each other
* The "meaning" of the integer values was known only to the programmer
  * *"What was the **intent** of the value?"* - Hard to know

----

# Magic Numbers - The Land Before `enum`

> First, we tried to use Constants to distinguish our "Magic Numbers"

```csharp
const int NOT_STARTED = 0;
const int STARTED = 1;
// ...
const int FINISHED = 5;
```

> But it got complicated as we needed more of them...

```csharp
const int SHIPMENT_STARTED = 1;
// ...
const int RETURN_MINOR_DAMAGE = 1;
```

----

# Magic Numbers - The Land Before `enum`

* How do you share constants among classes/objects?
* How do you stop the "explosion" of simple constants?
* How do you "group" constants to distinguish them (*aside from just using a prefix*)?
* How do you limit/control the range of acceptable values?

----

# `enum` - A Better Approach

```csharp
public enum ReturnState { NoDamage, MinorDamage, SignificantDamage }
```

```csharp
public enum RepairStatus { NotStarted, Started, /*...*/ Finished}
```

Enumerations allow us to

* Use meaningful names
* Clearly distinguish values
  * `ReturnState.NoDamage` is different from `ReturnState.MinorDamage`
* Group the values together
  * You can't "cross-contaminate" the enum values
    `ReturnState.Started` would be a **compiler error**

----

# The Parts of an Enumeration

```csharp
public enum ReturnState { NoDamage, MinorDamage, SignificantDamage }
```

- `ReturnState` is the **data type**
- `NoDamage`, `MinorDamage` and `SignificantDamage` are distinct **values**

```csharp
ReturnState shipmentItem = ReturnState.NoDamage;
```

- `shipmentItem` is a **variable** of **type** `ReturnState` with an initial **value** of `NoDamage`

----

# Controlling the underlying values

By default, enum values

- are `int` values under-the-hood
- start at zero
- increment by 1 automatically

```csharp
public enum ReturnState
{
    NoDamage,          // = 1
    MinorDamage,       // = 2
    SignificantDamage  // = 3
}
```

----

# Controlling the underlying values

We can set the underlying values and even change the underlying data type to any whole-number data type (`int`, `short`, `long`).

```csharp
public enum DayOfWeek : short
{
    Unknown = -1,
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}
```

----

# Enums As Flags

```csharp
[Flags]
public enum WeaponStatus
{                 // Binary Representation
    Offline = 0,  // 00000000
    Online = 1,   // 00000001
    Armed = 2,    // 00000010
    Firing = 4,   // 00000100
    Damaged = 8   // 00001000
}
```

```csharp
WeaponStatus torpedo = WeaponStatus.Armed | WeaponStatus.Online; // bitwise OR
// ...
if(torpedo.HasFlag(WeaponStatus.Online))
// ...
```

<!--
void Main()
{
	WeaponStatus torpedo = WeaponStatus.Firing | WeaponStatus.Online;
	if(torpedo == WeaponStatus.FireInTheHole)
		Console.WriteLine(torpedo);
	if(torpedo.HasFlag(WeaponStatus.Online))
		Console.WriteLine("Phasers Ready");
	torpedo = WeaponStatus.Armed | WeaponStatus.Damaged | WeaponStatus.Firing;
	if(torpedo == WeaponStatus.FireInTheHole)
		Console.WriteLine("EVACUATE");
}

// Define other methods, classes and namespaces here
[Flags]
public enum WeaponStatus
{                      // Binary Representation
	Offline = 0,       // 00000000
	Online = 1,        // 00000001
	Armed = 2,         // 00000011
	Firing = 4,        // 00000101
	Damaged = 8,       // 00001000
	FireInTheHole = 14 // 00001110
}
-->

----

# Enums in `switch` Statements

Enumerations are handy in simple `switch` statements.

```csharp
switch(status)
{
    case ReturnState.NoDamage;
        // ...
        break;
    case ReturnState.MinorDamage;
        // ...
        break;
    case ReturnState.SignificantDamage;
        // ...
        break;
}
```