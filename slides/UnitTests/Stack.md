---
marp: true
paginate: true
theme: gaia
---

# An Intro to Unit Testing in 3 Parts

* [Creating a Stack - Test-First](#2)
* [TBA](#20)
* TBA

----

# Creating a Stack - Test-First

![bg right fit](./UncleBob.jpg)

- C# version of Uncle Bob's [Java sample](https://youtu.be/58jGpV2Cg50?t=2655)
- Using [xUnit](https://xunit.net/docs/getting-started/netcore/cmdline)

----

# First Test


```csharp
[Fact]
public void Create_Stack() //Nothing()
{
    Stack myStack = new Stack();
}
```

```csharp
public class Stack
{

}
```

----

# Stack is empty

```csharp
[Fact]
public void Stack_Is_Empty() //Create_Stack() //Nothing()
{
    Stack myStack = new Stack();
    Assert.True(myStack.IsEmpty);
}
```

```csharp
    public bool IsEmpty => true;
```

----

# Push onto Stack

```csharp
[Fact]
public void Stack_Is_Not_Empty()
{
    Stack stack = new Stack();
    stack.Push(0);
    Assert.False(stack.IsEmpty)
}
```

```csharp
public void Push(int number)
{
    _isEmpty = false;
}
private bool _IsEmpty = true;
public bool IsEmpty => _IsEmpty;
```

----

# Refactor

```csharp
public class StackTest
{
    Stack stack = new Stack();
    [Fact]
    public void Stack_Is_Empty()
    {
        Assert.True(stack.IsEmpty);
    }
    [Fact]
    public void Stack_Is_Not_Empty()
    {
        stack.Push(0);
        Assert.False(stack.IsEmpty)
    }
}
```

----

# Pop

```csharp
[Fact]
public void Will_Throw_Underflow_When_Empty_Stack_Is_Popped()
{
    Assert.Throws<UnderflowException>(() => stack.Pop())
}
```

```csharp
// 1)  Inner class
public class UnderflowException : Exception {}

// 2) 
public void Pop()
{
    throw new UnderflowException();
}
```

----

# Push and Pop

```csharp
[Fact]
public void After_One_Push_And_One_Pop_Stack_Will_Be_Empty()
{
    stack.Push(0);
    stack.Pop();
    Assert.True(stack.IsEmpty);
}
```

```csharp
public void Pop()
{
    if (IsEmpty)
        throw new UnderflowException();
    _IsEmpty = true
}
```

----

# Push Twice, Pop Once Test

> Finally, a test to make me write a better solution.
> **Rule:** Everything you do to the tests makes them more specific. Everything you do to the production code makes it more general.

```csharp
[Fact]
public void After_Two_Pushes_And_One_Pop_Stack_Will_Not_Be_Empty()
{
    stack.Push(0);
    stack.Push(7);
    stack.Pop();
    Assert.False(stack.IsEmpty);
}
```

----

# Push Twice, Pop Once Solution

```csharp
public class Stack
{
    private int _Size = 0;
    public bool IsEmpty => _size == 0;
    public void Push(int number)
    {
        _Size++;
    }
    public void Pop()
    {
        if (IsEmpty)
            throw new UnderflowException();
        _Size--;
    }
    public class UnderflowException : Exception {}
}
```

----

# After Pushing X will Pop X

> **Rule:** *Don't* go for the gold! Avoid the central behaviour for as long as you can.
> The "gold" in this case is LIFO.

```csharp
[Fact]
public void After_Pushing_X_Will_Pop_X()
{
    stack.Push(99);
    int actual = stack.Pop();
    Assert.Equal(actual, 99);
}
```

----

# Push X Pop X Solution

```csharp
public int Pop()
{
    if (IsEmpty)
        throw new UnderflowException();
    _Size--;
    return 99;
}
```

----

# Augment the test

Move from a `[Fact]` to a `[Theory]` by using different expectations.

```csharp
[InlineData(99)]
[InlineData(77)]
[Theory]
public void After_Pushing_X_Will_Pop_X(int expected)
{
    stack.Push(expected);
    int actual = stack.Pop();
    Assert.IsEqual(actual, expected);
}
```

----

# Make the test pass

```csharp
private int _Element = -1;

public void Push(int number)
{
    _Element = number;
    _Size++;
}
public int Pop()
{
    if (IsEmpty)
        throw new UnderflowException();
    _Size--;
    return _Element;
}
```

----

# Push Twice Pop Twice

> Time to **go for the gold**

```csharp
[Fact]
public void After_Pushing_X_Then_Y_Will_Pop_Y_Then_X()
{
    stack.Push(99);
    stack.Push(88);

    Assert.Equal(88, stack.Pop());
    Assert.Equal(pp, stack.Pop());
}
```

----

# Make the test pass

```csharp
private int[] _Element = new int[2];

public void Push(int number)
{
    _Element[_Size] = number;
    _Size++;
}

public int Pop()
{
    if (IsEmpty)
        throw new UnderflowException();
    int element = _Element[_Size - 1];
    _Size--;
    return element;
}
```

----

# Final Refactorings

* Rename the `_Size` to `_LogicalSize`, as it's more meaningful


----

# Summary

> The **counter** is the critical part of a LIFO behaviour.

* Watch the Video of Uncle Bob
  * Listen especially to his [comments **after** the code demo](https://youtu.be/58jGpV2Cg50)
  * Who taught Uncle Bob about Test Driven Development?
  * How long had Uncle Bob been programming before he learned TDD?
- ***Then...***

----

# Try This Now

* Build on this demo
  * Test if the stack is **full**
  * What happens if you push when the stack is full?
  * What if you want to set the stack's `upperLimit` when you create the stack?

----

# End of Part 1
<!-- _backgroundColor: #222 -->


----

----

# End of Part 2
<!-- _backgroundColor: #222 -->


----

# End of Part 3
<!-- _backgroundColor: #222 -->

----

