const printUserEmail = (userName: string, email: string, pronouns?: string): void => {
  console.log(`${pronouns ? pronouns : ''} ${userName} - ${email}`)
};

printUserEmail('John', 'jonas@one.lt', 'Mr');
printUserEmail('John', 'jonas@one.lt');

type UserWithEmail = {
  userName: string;
  email?: string;
}

const getEmail = (user: UserWithEmail): string => user.email ?? '';

const useUserEmail = (user: UserWithEmail, callback?: (email: string) => void): void => {
  const userEmail = user.email;
  if (userEmail) {
    callback?.(userEmail);
  }
}
