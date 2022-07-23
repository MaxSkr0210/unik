import store from "./../store";

export const isAuth = (to: any, from: any, next: any) => {
  // if (document.cookie.length > 0) {
  //   next();
  // } else {
  //   next("");
  // }
  console.log(store);
  next();
};
