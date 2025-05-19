// lib/auth.js

export const login = () => {
  localStorage.setItem("isLoggedIn", "true");
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("isLoggedIn") === "true";
};
