const loadJson = async (url) => {
  let res = await fetch(url);

  if (res.status === 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(res.status);
};

loadJson("no-such-user.json").catch(alert);
