---
marp: true
paginate: true
theme: gaia
---

# An Intro to Unit Testing in 3 Parts

* [Creating a Stack - Test-First](./Stack.html)
* Card Games
  * [Playing Cards/Deck](./Cards.html) as the foundation
  * [Go Fish](./GoFish.html)
  * [War](./War.html)
* TBA

----

<!-- _backgroundColor: #222 -->
<style scoped>
a { color: #234}
</style>

# The End

----

# Unit Testing

- [ ] AAA
- [ ] What is a "unit" (never go outside a process boundary - e.g.: Threads, DAL/DB, PL/App, Client/server)
- [ ] What is TDD? (Test-**Driven**-Development) (not *Design*)
- [ ] Purpose of TDD
  - [ ] Clearly express what the program is supposed to do
  - [ ] Increase programmer confidence that the code is doing what it is supposed to do
  - [ ] Improve the maintainability of the code base
- [ ] TDD is **NOT**
  - [ ] A substitute for knowing how to *Design* programs
    - [ ] You still need to know OOP *Design* patterns and when to use them
  - [ ] A fix for *badly written code*
- [ ] Test-unit cycle
  - [ ] Test-First Dumbed Down - Red/Green
  - [ ] Red-Green-Refactor
  - [ ] Deming/Shewart Cycle - Plan-Do-Study-Act
  - [ ] Test-First Cycle - Write-Reify-Reflect-Refactor
- [ ] TDD and Games - [Break Out](https://github.com/RoryDungan/Unity-TDD-Example)

----

![](./images/synchronize-150123-custom.png)

----

> ## ... we can't look at testing mechanistically. Unit testing does not improve quality just by catching errors at the unit level. And, integration testing does not improve quality just by catching errors at the integration level. The truth is more subtle than that. Quality is a function of thought and reflection - precise thought and reflection. That's the magic. Techniques which reinforce that discipline invariably increase quality.

<!-- _footer: https://michaelfeathers.typepad.com/michael_feathers_blog/2008/06/the-flawed-theo.html -->

----

- # **Express Intention**
* ## Naming
* ## Grouping and Nesting 
- # of **Code Usage**
* ## Realization of Intent 
- # with respect to **Data**
* ## One exemplar or many
* ## Explicit or Generated


----


----

<!-- _backgroundColor: #222 -->
<style scoped>
a { color: #234}
</style>

# The End

*"Opinions are like farts, everyone has them, but not everyone wants to hear them."*
[Joe Joe](https://www.youtube.com/watch?v=NzPGxr5xKtk&lc=UgwONINq9-akwUKBCop4AaABAg)
