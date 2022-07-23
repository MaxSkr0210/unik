export const isAuth = (to: any, from: any, next: any) => {
  if (document.cookie.length > 0) {
    next();
  } else {
    console.log(123);

    next("");
  }
};
