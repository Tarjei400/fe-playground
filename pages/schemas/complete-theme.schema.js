export const CompleteThemeSchema = {
  "type": "object",
  "properties": {
    "dir": {
      "type": "string"
    },
    "primaryShade": {
      "type": "object",
      "properties": {
        "light": {
          "type": "integer"
        },
        "dark": {
          "type": "integer"
        }
      },
      "required": [
        "light",
        "dark"
      ]
    },
    "focusRing": {
      "type": "string"
    },
    "loader": {
      "type": "string"
    },
    "dateFormat": {
      "type": "string"
    },
    "colorScheme": {
      "type": "string"
    },
    "white": {
      "type": "string"
    },
    "black": {
      "type": "string"
    },
    "defaultRadius": {
      "type": "string"
    },
    "transitionTimingFunction": {
      "type": "string"
    },
    "colors": {
      "type": "array",
      "items": [
        {
          "type": "string"
        },
        {
          "type": "string"
        }
      ]
    },
    "lineHeight": {
      "type": "number"
    },
    "fontFamily": {
      "type": "string"
    },
    "fontFamilyMonospace": {
      "type": "string"
    },
    "primaryColor": {
      "type": "string"
    },
    "shadows": {
      "type": "object",
      "properties": {
        "xs": {
          "type": "string"
        },
        "sm": {
          "type": "string"
        },
        "md": {
          "type": "string"
        },
        "lg": {
          "type": "string"
        },
        "xl": {
          "type": "string"
        }
      },
      "required": [
        "xs",
        "sm",
        "md",
        "lg",
        "xl"
      ]
    },
    "fontSizes": {
      "type": "object",
      "properties": {
        "xs": {
          "type": "integer"
        },
        "sm": {
          "type": "integer"
        },
        "md": {
          "type": "integer"
        },
        "lg": {
          "type": "integer"
        },
        "xl": {
          "type": "integer"
        }
      },
      "required": [
        "xs",
        "sm",
        "md",
        "lg",
        "xl"
      ]
    },
    "radius": {
      "type": "object",
      "properties": {
        "xs": {
          "type": "integer"
        },
        "sm": {
          "type": "integer"
        },
        "md": {
          "type": "integer"
        },
        "lg": {
          "type": "integer"
        },
        "xl": {
          "type": "integer"
        }
      },
      "required": [
        "xs",
        "sm",
        "md",
        "lg",
        "xl"
      ]
    },
    "spacing": {
      "type": "object",
      "properties": {
        "xs": {
          "type": "integer"
        },
        "sm": {
          "type": "integer"
        },
        "md": {
          "type": "integer"
        },
        "lg": {
          "type": "integer"
        },
        "xl": {
          "type": "integer"
        }
      },
      "required": [
        "xs",
        "sm",
        "md",
        "lg",
        "xl"
      ]
    },
    "breakpoints": {
      "type": "object",
      "properties": {
        "xs": {
          "type": "integer"
        },
        "sm": {
          "type": "integer"
        },
        "md": {
          "type": "integer"
        },
        "lg": {
          "type": "integer"
        },
        "xl": {
          "type": "integer"
        }
      },
      "required": [
        "xs",
        "sm",
        "md",
        "lg",
        "xl"
      ]
    },
    "headings": {
      "type": "object",
      "properties": {
        "fontFamily": {
          "type": "string"
        },
        "fontWeight": {
          "type": "integer"
        },
        "sizes": {
          "type": "object",
          "properties": {
            "h1": {
              "type": "object",
              "properties": {
                "fontSize": {
                  "type": "integer"
                },
                "lineHeight": {
                  "type": "number"
                }
              },
              "required": [
                "fontSize",
                "lineHeight"
              ]
            },
            "h2": {
              "type": "object",
              "properties": {
                "fontSize": {
                  "type": "integer"
                },
                "lineHeight": {
                  "type": "number"
                }
              },
              "required": [
                "fontSize",
                "lineHeight"
              ]
            },
            "h3": {
              "type": "object",
              "properties": {
                "fontSize": {
                  "type": "integer"
                },
                "lineHeight": {
                  "type": "number"
                }
              },
              "required": [
                "fontSize",
                "lineHeight"
              ]
            },
            "h4": {
              "type": "object",
              "properties": {
                "fontSize": {
                  "type": "integer"
                },
                "lineHeight": {
                  "type": "number"
                }
              },
              "required": [
                "fontSize",
                "lineHeight"
              ]
            },
            "h5": {
              "type": "object",
              "properties": {
                "fontSize": {
                  "type": "integer"
                },
                "lineHeight": {
                  "type": "number"
                }
              },
              "required": [
                "fontSize",
                "lineHeight"
              ]
            },
            "h6": {
              "type": "object",
              "properties": {
                "fontSize": {
                  "type": "integer"
                },
                "lineHeight": {
                  "type": "number"
                }
              },
              "required": [
                "fontSize",
                "lineHeight"
              ]
            }
          },
          "required": [
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6"
          ]
        }
      },
      "required": [
        "fontFamily",
        "fontWeight",
        "sizes"
      ]
    },
    "other": {
      "type": "object"
    },
    "datesLocale": {
      "type": "string"
    }
  },
  "required": [
    "dir",
    "primaryShade",
    "focusRing",
    "loader",
    "dateFormat",
    "colorScheme",
    "white",
    "black",
    "defaultRadius",
    "transitionTimingFunction",
    "colors",
    "lineHeight",

    "primaryColor",
    "shadows",
    "fontSizes",
    "radius",
    "spacing",
    "breakpoints",
    "headings",
    "other",
    "datesLocale"
  ]
}
