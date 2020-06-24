---
marp: true
paginate: true
theme: gaia
---

# Game of **Go Fish**

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


----

<!-- _backgroundColor: #222 -->

# The End

