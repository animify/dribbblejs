<img src="https://i.imgur.com/jWLABuP.png" width="280">



[![Maintainability](https://api.codeclimate.com/v1/badges/70117f75b09f8473edd4/maintainability)](https://codeclimate.com/github/animify/dribbblejs/maintainability)

A promise based, Typescript-first [Dribbble API](https://developer.dribbble.com/v2) library.

## Features

##### 🤖 Full Typescript support

##### 🌈 Familiar API setup

##### ⚡️  Feather light

##### 🚨 Proper error handling

##### 🧘‍♀️ Framework agnostic

## Getting Started
### Installation

##### with Yarn
```
$ yarn add dribbblejs
```
##### or with NPM
```
$ npm install dribbblejs
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

> ##### [Official User API Documentation](https://developer.dribbble.com/v2/user/)

#### Get authenticated user

```ts
dribbble.user.get()
```

---
### Projects

> ##### [Official Projects API Documentation](https://developer.dribbble.com/v2/projects/)

#### Get list of projects

```ts
dribbble.projects.list()
```

#### Create a project
```ts
dribbble.projects.create({
    name: 'Project name', // *Required*
    description: 'Project description' // Optional
})
```

#### Update a project by `id`

```ts
dribbble.projects.update('883377', {
    name: 'New project name', // Optional
    description: 'New project description' // Optional
})
```

#### Delete a project by `id`

```ts
dribbble.projects.delete('883377')
```

---

### Shots

> ##### [Official Shots API Documentation](https://developer.dribbble.com/v2/shots/)

#### Get list of shots
```ts
dribbble.shots.list()
```
#### Get a shot by `id`
```ts
dribbble.shots.get('6432565')
```

#### Create a shot
```ts
dribbble.shots.create({
    image: imageFile // *Required*
    title: 'Shot title', // *Required*
    description: 'Shot description', // Optional
    low_profile: true, // Optional
    rebound_source_id: 6432542, // Optional
    scheduled_for: 1582391638790, // Optional
    tags: ['ui', 'illustration'], // Optional
    team_id: 3818924 // Optional
})
```

#### Update a shot by `id`
```ts
dribbble.shots.update('6432565', {
    title: 'New shot title', // Optional
    description: 'New shot description', // Optional
    low_profile: true, // Optional
    rebound_source_id: 6432542, // Optional
    scheduled_for: 1582391638790, // Optional
    tags: ['ui', 'illustration'], // Optional
    team_id: 3818924 // Optional
})
```

#### Delete a shot by `id`
```ts
dribbble.shots.delete('6432565')
```

---

### Attachments API

> ##### [Official Attachments API Documentation](https://developer.dribbble.com/v2/attachments/)

#### Create attachment for a `shot`

```ts
dribbble.attachments.create('6432565', {
    file: attachmentFile // *Required*
})
```

#### Delete attachment `id` for a `shot`
```ts
dribbble.attachments.delete('1376676', '6432565')
```


---

### License
Dribbblejs is [MIT licensed](./LICENSE).
