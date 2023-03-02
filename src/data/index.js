export const categoryOptions = [
  "select category",
  "sports",
  "history",
  "politics",
  "general knowledge",
  "entertainment: books",
  "entertainment: film",
  "entertainment: cartoon & animations",
  "science & nature",
  "science: mathematics",
  "animals",
  "geography",
  "science: computers",
  "celebrities",
];

export const diffOptions = ["select difficulty", "easy", "medium", "hard"];

export const table = {
  sports: 21,
  history: 23,
  politics: 24,
  "general knowledge": 9,
  "entertainment: books": 10,
  "entertainment: film": 11,
  "entertainment: cartoon & animations": 32,
  "science & nature": 17,
  "science: mathematics": 19,
  animals: 27,
  geography: 22,
  "science: computers": 18,
  celebrities: 26,
};

export const LoginErrors = {
  email: {
    msg: `Sorry, we can't find an account with this email address.`,
    route: "/register",
    text: "create a new account",
  },
  password: {
    msg: `Incorrect password `,
    route: "#",
    text: "reset your password.",
  },
};
