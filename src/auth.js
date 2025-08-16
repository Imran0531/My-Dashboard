// Simple hard-coded auth

const AUTH_KEY = "demo_auth_user";

// Change these if you want different login details:
export const HARDCODED_USER = {
  email: "pixelhr@gmail.com",
  password: "Admin@123", // Case-sensitive
  name: "Admin",
};

export function login(email, password) {
  if (email === HARDCODED_USER.email && password === HARDCODED_USER.password) {
    localStorage.setItem(
      AUTH_KEY,
      JSON.stringify({ email: HARDCODED_USER.email, name: HARDCODED_USER.name })
    );
    return { ok: true };
  }
  return { ok: false, message: "Invalid email or password" };
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthed() {
  return Boolean(localStorage.getItem(AUTH_KEY));
}

export function getUser() {
  const raw = localStorage.getItem(AUTH_KEY);
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
