new Promise((res, rej) =>  {
  setTimeout(() => {
    res ({ isAuth: true });
  }, 2000);
})
.then((authInfo) => {
  return new Promise((res, rej) => {
    if (!authInfo.isAuth) {
      rej ({});
    }
    setTimeout(() => {
      res ({ name: 'Max' })
    }, 2000);
  })
})
.then((user) => console.log(user.name))
.catch((err) => console.log(err));