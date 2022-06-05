import {ColorPaletteSchema} from "./color-pallete.schema";

const fonts = [
  'Arial',
  'Verdana',
  'Helvetica',
  'Tahoma',
  'Trebuchet MS',
  'Times New Roman',
  'Georgia',
  'Garamond',
  'Courier New',
  'Brush Script MT',
]

const FontGenerator = (fonts, type) => {
  return fonts.map((font) => `${font}, ${type}`)
}

const FontSchemaGenerator = (fonts, type) => {
  return FontGenerator(fonts, type).map((font) => (
      {
        "type": "string",
        "enum": [
          font
        ],
        "title": font
      }
  ))
}

const ColorsAvailableSchema = () => {
  return Object.keys(ColorPaletteSchema.properties).map((color) => (
      {
        "type": "string",
        "enum": [
          color
        ],
        "title": color
      }
  ))
}
export const ThemeSchema = {
  "type": "object",
  "definitions": {
    "Font": {
      "type": "string",
      "anyOf": FontSchemaGenerator(fonts, 'sans-serif')
    },
    "MonospaceFont": {
      "type": "string",
      "anyOf": FontSchemaGenerator(fonts, 'monospace')
    },
  },
  "properties": {

    "themeName": {
      "type": "string"
    },

    "colorScheme": {
      "type": "string",
      "anyOf": ColorsAvailableSchema()
    },

    "primaryColor": {
      "type": "string",
      "anyOf": ColorsAvailableSchema()
    },

    "secondaryColor": {
      "type": "string",
      "anyOf": ColorsAvailableSchema()
    },

    "tertiaryColor": {
      "type": "string",
      "anyOf": ColorsAvailableSchema()
    },

    "lineHeight": {
      "type": "number"
    },
    "fontFamily": {
      "$ref": "#/definitions/Font"
    },
    "fontFamilyMonospace": {
      "$ref": "#/definitions/MonospaceFont"
    },

    "headings": {
      "type": "object",
      "properties": {
        "fontFamily": {
          "$ref": "#/definitions/Font"
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

  },
  "required": [
    "fontFamily",
    "fontFamilyMonospace",
  ]
}
