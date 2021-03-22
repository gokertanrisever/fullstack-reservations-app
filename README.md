# Fullstack Assignment <!-- omit in toc -->
This project allows de Bijenkorf's Hiring Managers to screen potential Fullstack Developer applicants.

# Table of Contents <!-- omit in toc -->
- [Folder structure](#folder-structure)
- [Pre-requisites](#pre-requisites)
- [Goal](#goal)
- [Instructions](#instructions)
- [Requirements](#requirements)
  - [Scenario: Reservation Overview](#scenario-reservation-overview)
    - [Loading](#loading)
    - [No reservations](#no-reservations)
    - [Reservations](#reservations)
  - [Scenario: Create Reservation](#scenario-create-reservation)
    - [Valid input](#valid-input)
    - [Invalid input](#invalid-input)
    - [Cancel](#cancel)
  - [Scenario: Delete Reservation](#scenario-delete-reservation)
- [Notes](#notes)
- [Submitting your code](#submitting-your-code)

# Folder structure
The initial project structure looks like this:
```
client/
wireframes/
NOTES.md
README.md
```

# Pre-requisites
You can open the wireframes in [Draw.io](https://app.diagrams.net/) in your browser or by using the [Draw.io VSCode extension](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)

# Goal
Create a straight forward web application that demonstrates knowledge of the following:

- Containerization;
- Data storage;
- REST API implementation;
- API CRUD operations;
- Client state management;
- Client routing;
- Implementation of Web Client in React;
- Unit Testing

# Instructions
You are asked to create a working application. Technology choice is mostly up to you, however we ask **you** to implement the Web Client in [React](https://reactjs.org/). For that reason we have bootstrapped the [client](./client) with [Create React App](https://create-react-app.dev/). Implementation of routing, state management and networking is down to you. You are free to implement the API in any way you feel appropriate given it satisfies the above mentioned Goals.

# Requirements
Implement the following wireframes to the best of your ability:

## Scenario: Reservation Overview

### Loading
[Wireframe](./wireframes/reservation-overview--loading.drawio)

```
GIVEN waiting for network
WHEN page loads
THEN display loading indicator
```

### No reservations
[Wireframe](./wireframes/reservation-overview--no-reservations.drawio)

```
GIVEN there are no reservations
WHEN page loads
THEN display a message to the user
```

### Reservations
[Wireframe](./wireframes/reservation-overview--reservations.drawio)

```
GIVEN there are reservations
WHEN page loads
THEN list reservation items
```


## Scenario: Create Reservation
[Wireframe](./wireframes/reservation-create.drawio)

```
GIVEN user taps "Create reservation" button
WHEN on start screen
THEN show Create Reservation form
```

### Valid input
All fields are required

```
GIVEN user taps "Create" button
WHEN valid user input in edit form
THEN create reservation
AND return to Reservation Overview
```

### Invalid input
All fields are required

```
GIVEN user taps "Create" button
WHEN invalid user input on edit form
THEN mark fields as invalid
```

### Cancel
```
GIVEN user taps "Cancel" button
WHEN on edit form
THEN return to Reservation Overview
```

## Scenario: Delete Reservation
[Wireframe](./wireframes/reservation-delete.drawio)
```
GIVEN user taps "Delete" button
WHEN on start screen
THEN show dialog
```

```
GIVEN user taps "Delete" button
WHEN dialog shown
THEN delete reservation item
```

```
GIVEN user taps "Cancel" button
WHEN dialog shown
THEN close dialog
```

# Notes
If you have any remarks or observations while working on this assignment you are encouraged submit these along with the assignment in [NOTES.md](./NOTES.md).

# Submitting your code
When you complete the assignment, please push your code to a remote repository or email us a .zip file with your solution. **Please do not fork this repository**.
