---
marp: true
paginate: true
theme: gaia
---

# Game of **Go Fish**

There are a number of variations of [**GoFish**](https://en.wikipedia.org/wiki/Go_Fish), but the one that we'll use follows these rules.

* Two to four players, where play continues until all cards are gone
* Players collect ***pairs*** of cards based on the card value
* Players take turns in which
  * A player requests a card value from another player
  * The player's turn continues as long as they get cards from others
  * The turn ends with the player drawing a card when they have to "Go Fish"

----

# Game Behaviour

* Ensure At Least Two Players
* Ensure At Most Four Players
* Distinguish Players With The Same Name Using A Number
* Deal 5 Cards To Each Player
* Refill Players Hand When Empty
* Track Which Player Is Taking Their Turn
* Take Turns As Long As The Deck Is Not Empty And Players Have Cards
* Determine Winner Based On Number Of Pairs

----

# Player Behaviour

* Have A Name
* Begin With Five Cards
* Set Aside Any Pairs To Their Scoring Pile
* Request A Card From Another Player
* Relinquish A Requested Card To Another Player
* Draw A Card From The Deck

----

<!-- _backgroundColor: #222 -->

# The End

<!--

----

# `GoFish` Specifications

###### ***The_GoFish_Game_Must***...

```csharp
[Fact]
public void Ensure_At_Least_Two_Players()
{
    throw new NotImplementedException();
}
```

----

# `GoFish` Specifications

###### ***The_GoFish_Game_Must***...

```csharp
[Fact]
public void Ensure_At_Most_Four_Players()
{
    throw new NotImplementedException();
}
```

----

# `GoFish` Specifications

###### ***The_GoFish_Game_Must***...

```csharp
[Fact]
public void Distinguish_Players_With_The_Same_Name_Using_A_Number()
{
    throw new NotImplementedException();
}
```

----

# `GoFish` Specifications

###### ***The_GoFish_Game_Must***...

```csharp
[Fact]
public void Deal_5_Cards_To_Each_Player()
{
    throw new NotImplementedException();
}
```

----

# `GoFish` Specifications

###### ***The_GoFish_Game_Must***...

```csharp
[Fact]
public void Refill_Players_Hand_When_Empty()
{
    throw new NotImplementedException();
}
```

----


----

# `Player` Specifications

###### ***The_Player_Must***...

```csharp
[Fact]
public void Have_A_Name()
{
    throw new NotImplementedException();
}
```

----

# `Player` Specifications

###### ***The_Player_Must***...

```csharp
[Fact]
public void Begin_With_Five_Cards()
{
    throw new NotImplementedException();
}
```

----

# `Player` Specifications

###### ***The_Player_Must***...

```csharp
[Fact]
public void Set_Aside_Any_Pairs_To_Their_Scoring_Pile()
{
    throw new NotImplementedException();
}
```

----

# `Player` Specifications

###### ***The_Player_Must***...

```csharp
[Fact]
public void Request_A_Card_From_Another_Player()
{
    throw new NotImplementedException();
}
```

----

# `Player` Specifications

###### ***The_Player_Must***...

```csharp
[Fact]
public void Relinquish_A_Requested_Card_To_Another_Player()
{
    throw new NotImplementedException();
}
```

----

# `Player` Specifications

###### ***The_Player_Must***...

```csharp
[Fact]
public void Draw_A_Card_From_The_Deck_()
{
    throw new NotImplementedException();
}
```

----

# Card Deck

- should contains 52 cards
- should be able to shuffle the deck
- should be able to create a new deck using an existing array
- add cards to the deck
- return the top card of the deck
- remove the card played from the deck

----

# Card

- returns the rank of the card
- returns the suit of the card

----

# Client

- should be able to decipher a json response
- should be able to convert the name of a card

----

# Game

- Create a deck
- give the number representing the player's turn
- run_game should be able to distribute 5 cards to each player
- should run a round and return a json response object
- refills the player's cards
- run_round should check if a player has pairs
- should be able to determine a winner
- shouldn't determine a winner unless there are no cards left

----

# Player

- shoudl give its card to the other player who asked for it
- should be able to pair four cards

----

# Request

- should have a card attribute
- should have a fisher attribute
- should have a target attribute

----

# Request Validator

- should return if a request is valid or not

----

# Response

- should have a card attribute
- should have a fisher attribute
- should have a target attribute
- should contain if the target has the card asked for

----

# 


-->