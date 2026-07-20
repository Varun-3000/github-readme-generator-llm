export const FRAMEWORKS = [
  {
    name: "React",
    runtime: "Node.js",
    dependencies: [
      "react",
      "react-dom"
    ],
    configFiles: [],
    directories: [
      "packages/react"
    ],
    repoNames: [
      "react"
    ]
  },

  {
    name: "Next.js",
    runtime: "Node.js",
    dependencies: [
      "next"
    ],
    configFiles: [
      "next.config.js",
      "next.config.ts"
    ]
  },

  {
    name: "Express.js",
    runtime: "Node.js",
    dependencies: [
      "express"
    ]
  },

  {
    name: "Vue.js",
    runtime: "Node.js",
    dependencies: [
      "vue"
    ]
  },

  {
    name: "Angular",
    runtime: "Node.js",
    dependencies: [
      "@angular/core"
    ],
    configFiles: [
      "angular.json"
    ]
  },

  {
    name: "LangChain",
    runtime: "Python",
    dependencies: [
      "langchain",
      "langchain-core",
      "langchain-community",
      "langchain-groq"
    ]
  },

  {
    name: "FastAPI",
    runtime: "Python",
    dependencies: [
      "fastapi"
    ]
  },

  {
    name: "Flask",
    runtime: "Python",
    dependencies: [
      "flask"
    ]
  },

  {
    name: "Django",
    runtime: "Python",
    dependencies: [
      "django"
    ]
  },

  {
    name: "Spring Boot",
    runtime: "Java",
    dependencies: [
      "spring-boot-starter"
    ]
  }
];