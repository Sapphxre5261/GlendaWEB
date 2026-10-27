export type AuthUser = {
  username: string;
};

const DEV_USERNAME = "admin";
const DEV_PASSWORD = "glenda1234";

// TODO: replace with a real user store (database / external auth provider).
// For now credentials come from AUTH_USERNAME / AUTH_PASSWORD; in development
// a demo account (admin / glenda1234) is used when they're not set.
export async function verifyCredentials(
  username: string,
  password: string,
): Promise<AuthUser | null> {
  const isProd = process.env.NODE_ENV === "production";
  const expectedUser = process.env.AUTH_USERNAME ?? (isProd ? undefined : DEV_USERNAME);
  const expectedPass = process.env.AUTH_PASSWORD ?? (isProd ? undefined : DEV_PASSWORD);

  if (!expectedUser || !expectedPass) return null;
  if (username !== expectedUser || password !== expectedPass) return null;

  return { username };
}
