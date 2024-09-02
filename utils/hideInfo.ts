const hideEmail = (email: string) =>
  email.slice(0, 2) +
  "*".repeat(email.indexOf("@") - 2) +
  email.slice(email.indexOf("@"));

const hideName = (name: string) =>
  name.slice(0, 2) + "*".repeat(name.length - 2);

export { hideEmail, hideName };
