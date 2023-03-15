const getUsers = async (names) => {
  let users = [];

  for (let name of names) {
    let user = await fetch(`https://api.github.com/users/${name}`)
      .then((res) => {
        if (res.status !== 200) {
          return null;
        } else {
          return res.json();
        }
      })
      .catch((err) => {
        return null;
      });

    users.push(user);
  }

  let result = await Promise.all(users);

  return result;
};

console.log(getUsers(["TeryaevAndrey"]));
