export const isAuth = (to: any, from: any, next: any) => {
  console.log(from);

  if (document.cookie.length > 0) {
    next(from.fullPath);
  } else {
    next();
  }
};
