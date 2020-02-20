# dribbblejs

A Typescript-first [Dribbble API](https://developer.dribbble.com/v2) library.

## Features

##### 🤖 Full Typescript support

##### 🌈 Familiar API setup

##### ⚡️  Feather light

##### 🚨 Proper error handling

##### 🧘‍♀️ Framework agnostic

## Getting Started
### Installation

```
yarn add dribbblejs
```
```
npm install dribbblejs
```

### Usage

```ts
import { Dribbble } from "dribbblejs";

const dribbble = new Dribbble({
  authToken: "xxxxxxxx"
});
```

## API

### User

#### Get the authenticated user
```ts
dribbble.user.get()
```

### Projects

#### Fetching a list of projects
```ts
dribbble.projects.list()
```
#### Create a project
```ts
dribbble.projects.create()
```
#### Update a project
```ts
dribbble.projects.update()
```
#### Delete a project
```ts
dribbble.projects.delete()
```

### Shots

#### Fetching a list of shots
```ts
dribbble.shots.list()
```
#### Get a shot
```ts
dribbble.shots.get()
```
#### Create a shot
```ts
dribbble.shots.create()
```
#### Update a shot
```ts
dribbble.shots.update()
```
#### Delete a shot
```ts
dribbble.shots.delete()
```

### Attachments

#### Create an attachment for a shot
```ts
dribbble.attachments.create()
```

#### Delete an attachment for a shot
```ts
dribbble.attachments.create()
```

---

###### MIT Licensed
