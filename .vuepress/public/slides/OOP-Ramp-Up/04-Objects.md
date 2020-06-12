---
marp: true
paginate: true
---

<style>
section { justify-content: flex-start; }
</style>

![bg cover opacity:.15](03/blueprint.jpg)

# Inheritance *and* Composition

> *Favor **composition** over **inheritance***

* Inheritance represents an **"Is-A"** relationship between types
  * From a general type to a more specific type
  * Useful when there is a **common base** for various types
  * Use a base class when you have a common **implementation** you want shared
  * Helpful when building off of a library *(**Open-Closed** principle)*
  * A `Car` ***is*** a `PassengerVehicle`
* Composition represents a **"Has-A"** relationship between types
  * Complex types are more typically **made up of** other types
  * A `Car` ***has*** an `Engine`

----

# Inheritance Example (Base Class)

<!-- PassengerVehicle is a BASE CLASS (aka: a SUPERCLASS) -->
<!-- Its properties and methods will be inherited by the DERIVED CLASS (SUBCLASS) -->
<!-- protected - The setters can be changed by the subclass, but are private to outside classes -->
<!-- virtual - The subclass can override the base class method -->

```csharp
public abstract class PassengerVehicle
{
    public int MaxOccupancy { get; protected set; }  // Passengers only
    public int CurrentOccupancy { get; protected set; } // Passengers only
    public virtual void AddPassengers(int count)
    {
        if (CurrentOccupancy + count > MaxOccupancy)
          throw new Exception("Not enough room in vehicle");
        CurrentOccupancy += count;
    }
    public virtual int UnloadPassengers()
    {
        int count = CurrentOccupancy;
        CurrentOccupancy = 0;
        return count;
    }
}
```

----

# Inheritance Example (Base Class - cont.)

<!-- Two abstract method are defined - they must be implemented by the subclass -->

```csharp
public abstract class PassengerVehicle
{
    // ...
    public abstract void Start();
    public abstract void Stop();
}
```

* `Start()` and `Stop()` must be implemented by the class that inherits from `PassengerVehicle`
* An `abstract` method/property does not have an implementation

----

# Inheritance Example (Derived Class)

```csharp
public class Car : PassengerVehicle
{
    public Motor Engine { get; private set; }
    public override void Start()
    {
        // ...
    }
    public override void Stop()
    {
        // ...
    }
}
```

```csharp
public class Motor
{
    // ...
}
```

----

# Inheritance Example (Derived Class)

```csharp
public class Rickshaw : PassengerVehicle
{
    public override void Start()
    {
        // ...
    }
    public override void Stop()
    {
        // ...
    }
}
```

----

# Inheritance Example (Instantiation)

```csharp
PassengerVehicle taxi = new Car();
taxi.AddPassengers(2);

// ... time to switch vehicles

PassengerVehicle touristCart = new Rickshaw();
touristCart.AddPassengers(taxi.UnloadPassengers());
```

----

# Inheritance - A Practical Example

- The **Entity Framework Core** library has a class called `DbContext`
  * It provides base functionality for working with databases
  * You inherit from `DbContext` and provide specifics of your database in your derived class

```csharp
public class NorthwindTradersContext : DbContext
{
    // ...
}
```

----

<!-- _backgroundColor: #222 -->

# The End

<!--
- [ ] Introduce inheritance and composition ("favor composition over inheritance")
  - [ ] Constructor chaining
  - [ ] Override .ToString() - polymorphism
  - [ ] abstract classes and abstract methods
-->
