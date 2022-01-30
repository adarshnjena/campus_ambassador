# BACKEND

- Backend is in Firebase (Spark for Now)

## DATABASE: #/users/$uid/profile/<>

- This is the place to store profile data.
  - First Name
  - Last Name
  - College Name
  - Mobile Number
  - Year of Study
  - ...
  - Profile Image should either be stored in Storage or as a base64 mime string. (Prefer Storage)

## DATABASE: #/users/$uid/tasks/<>

- Store completion for tasks.
- [true, false, false, false, true] etc
- Indexed with respect to task list

## DATABASE: #/tasklist/<>

- Task List LMAO:
- Use ADMIN to create task list. (IMPORT JSON) before deploying the hosted app. 

## STORAGE: #/users/$uid/<>

- One file for each task, uploaded image will be shown to users.
- Named will be profile.jpg / task_1.jpg / task_2.jpg / task_3.jpg.
- IDK how to handle extensions but ok. We will store the url in the profile section.

## ACCESS RULES

```firebase
// STORAGE
// Grants a user access to a node matching their user ID
service firebase.storage {
  match /b/{bucket}/o {
    // Files look like: "user/<UID>/path/to/file.txt"
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}

// DATABASE (RTDB)
{
  "rules": {
    //".read": "auth.uid != null",
    //".write": "auth.uid != null",
    "tasklist":{
      ".read": "auth.uid != null",
    },
    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid == $uid",
        ".write": "auth != null && auth.uid == $uid"
      }
    }
  }
}
```
