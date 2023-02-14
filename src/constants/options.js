export const filters = [
  {
    name: "전체",
    option: "all",
  },
  {
    name: "프론트엔드",
    option: "frontEnd",
  },
  {
    name: "백엔드",
    option: "backEnd",
  },
  {
    name: "앱",
    option: "app",
  },
];

export const stacks = {
  all: [
    "React.js",
    "Vue.js",
    "Anguler.js",
    "JQuery",
    "Node.js",
    "Spring",
    "Django",
    "Ruby",
    "RN",
    "Flutter",
    "Kotlin",
    "Swift",
  ],
  frontEnd: ["React.js", "Vue.js", "Anguler.js", "JQuery"],
  backEnd: ["Node.js", "Spring", "Django", "Ruby"],
  app: ["RN", "Flutter", "Kotlin", "Swift"],
};

export const fields = [
  {
    id: "frontEnd",
    name: "프론트엔드",
    value: "frontEnd",
  },
  {
    id: "backEnd",
    name: "백엔드",
    value: "backEnd",
  },
  {
    id: "app",
    name: "앱",
    value: "app",
  },
];

export const postingData = {
  title: "",
  content: "",
  contact: "",
  stack: undefined,
};
