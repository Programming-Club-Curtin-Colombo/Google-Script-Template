module.exports = {
  root: true,

  env: {
    es6: true
  },

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "script"
  },

  globals: {
    Logger: "readonly",
    SpreadsheetApp: "readonly",
    DriveApp: "readonly",
    DocumentApp: "readonly",
    FormApp: "readonly",
    GmailApp: "readonly",
    PropertiesService: "readonly",
    Utilities: "readonly",
    ScriptApp: "readonly",
    Session: "readonly",
    ContentService: "readonly",
    UrlFetchApp: "readonly",
    HtmlService: "readonly",
    CacheService: "readonly",
    LockService: "readonly"
  },

  rules: {
    // =========================
    // BASE SAFETY RULES
    // =========================
    "no-var": "error",
    "prefer-const": "error",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": "warn",

    // =========================
    // NAMING CONVENTION SYSTEM
    // =========================
    "no-restricted-syntax": [
      "error",

      // Enforce Services_ prefix
      {
        selector:
          "FunctionDeclaration[id.name=/^(?!Services_|Utils_|Api_|on|doGet|doPost)/]",
        message:
          "All functions must follow naming convention: Services_, Utils_, Api_ prefixes or GAS entry points."
      }
    ]
  },

  overrides: [
    // =========================
    // Code.gs RULES
    // =========================
    {
      files: ["Code.gs"],
      rules: {
        "no-restricted-syntax": [
          "error",
          {
            selector: "FunctionDeclaration",
            message:
              "Code.gs must only contain entry points and delegate to Services layer."
          }
        ]
      }
    },

    // =========================
    // Utils.gs RULES
    // =========================
    {
      files: ["Utils.gs"],
      rules: {
        "no-restricted-globals": [
          "error",
          "SpreadsheetApp",
          "DriveApp",
          "UrlFetchApp",
          "Logger",
          "GmailApp",
          "PropertiesService",
          "ScriptApp"
        ],
        "no-restricted-syntax": [
          "error",
          {
            selector: "FunctionDeclaration[id.name=/^Services_/]",
            message: "Utils cannot define Services-layer functions."
          }
        ]
      }
    },

    // =========================
    // Services.gs RULES
    // =========================
    {
      files: ["Services.gs"],
      rules: {
        "no-restricted-syntax": [
          "error",

          // Services must NOT directly define API functions
          {
            selector: "FunctionDeclaration[id.name=/^Api_/]",
            message:
              "API logic must be placed in Api.gs, not Services.gs."
          },

          // Prevent bypassing Utils layer
          {
            selector:
              "CallExpression[callee.name=/UrlFetchApp|SpreadsheetApp|DriveApp/]",
            message:
              "Services must use Api.gs or Utils.gs for external/GAS API calls."
          }
        ]
      }
    },

    // =========================
    // Api.gs RULES
    // =========================
    {
      files: ["Api.gs"],
      rules: {
        "no-restricted-syntax": [
          "error",

          // API layer must not contain business logic
          {
            selector:
              "FunctionDeclaration[id.name=/^(?!Api_)/]",
            message:
              "Api.gs functions must follow Api_ naming convention."
          }
        ]
      }
    },

    // =========================
    // Config.gs RULES
    // =========================
    {
      files: ["Config.gs"],
      rules: {
        "no-restricted-syntax": [
          "error",
          {
            selector: "FunctionDeclaration",
            message: "Config.gs must not contain functions."
          },
          {
            selector: "AssignmentExpression",
            message: "Config.gs must be immutable."
          }
        ]
      }
    }
  ]
};