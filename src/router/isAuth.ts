export const isAuth = (to: any, from: any, next: any) => {
  if (document.cookie.length > 0) {
    next(from.fullPath);
  } else {
    next();
  }
};
