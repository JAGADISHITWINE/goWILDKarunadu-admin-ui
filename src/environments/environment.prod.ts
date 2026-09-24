export const environment = {
  production: true,
  baseUrl: (window as any)?.__env?.API_BASE_URL || 'http://localhost:4001/api/auth',
  contentBaseUrl: (window as any)?.__env?.CONTENT_API_URL || 'http://localhost:4001/api/content',
  mediaBaseUrl: (window as any)?.__env?.MEDIA_BASE_URL || 'http://localhost:4001/',
  encryptionKey: (window as any)?.__env?.ENCRYPTION_KEY || 'JagguBoss_Secret_2025!',
  // Non-sensitive salt used for client-side derivations only.
  encryptionSalt: 'start-here-salt'
};
