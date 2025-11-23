// src/utils/getFirstRouteForRole.js
import routes from "../routes";

export function getFirstRouteForRole(role) {
  const allowed = routes.filter(
    (r) => r.role?.includes(role) && r.show === true
  );

  if (allowed.length === 0) return "/welcome"; // fallback

  return allowed[0].path;
}
