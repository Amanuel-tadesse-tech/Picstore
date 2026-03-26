export const getLoginUrl = () => {
  const portalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUrl = `${window.location.origin}/api/oauth/callback`;
  return `${portalUrl}?app_id=${appId}&redirect_uri=${encodeURIComponent(redirectUrl)}`;
};
