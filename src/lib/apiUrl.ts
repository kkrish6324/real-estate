/** Base URL for API calls, no trailing slash (e.g. https://api.example.com/api). */
export function getApiBase(): string {
  const raw = import.meta.env.VITE_API_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "http://localhost:5000/api";
}
