"use strict";
async function loadUser() {
  try {
    let results = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/users/2"),
      fetch("https://jsonplaceholder.typicode.com/users/3"),
      fetch("https://jsonplaceholder.typicode.com/users/4"),
      fetch("https://jsonplaceholder.typicode.com/users/5"),
      fetch("https://jsonplaceholder.typicode.com/users/6"),
      fetch("https://jsonplaceholder.typicode.com/users/7"),
    ]);
    const users = await Promise.all(results.map((item) => item.json()));
    users.forEach((user) => {
      console.log(user.name);
    });
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

loadUser();
