export const environment = {
  production: true,
  baseUrl: (window as any)?.__env?.API_BASE_URL || 'https://go-wild-karunadu-admin-api.vercel.app/',
  mediaBaseUrl: (window as any)?.__env?.MEDIA_BASE_URL || '',
  encryptionKey: (window as any)?.__env?.ENCRYPTION_KEY || 'JagguBoss_Secret_2025!',
  // Non-sensitive salt used for client-side derivations only.
  encryptionSalt: 'start-here-salt'
};
