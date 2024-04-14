export const maskEmail = (email: string, maskChar = '*'): string => {
  const [username, domain] = email.split('@');
  const maskedUsername = username?.replace(/.(?=.{3})/g, maskChar); // Replaces all characters except the first 3 with the mask character
  return `${maskedUsername}@${domain}`;
};
