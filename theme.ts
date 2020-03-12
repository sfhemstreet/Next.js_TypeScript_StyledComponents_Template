// Set up example theme with enum's so that we get better autocomplete

enum PrimaryColors {
  brightRed = 'hsl(12, 88%, 59%)',
  darkBlue = 'hsl(228, 39%, 23%)',
}

enum NeutralColors {
  darkGrayishBlue = 'hsl(227, 12%, 61%)',
  veryDarkBlue = 'hsl(233, 12%, 13%)',
  veryPaleRed = 'hsl(13, 100%, 96%)',
  veryLightGrey = 'hsl(0, 0%, 98%)',
}

enum Typography {
  fontSize = '16px',
  fontFamily = "'Be Vietnam', sans-serif",
}

export const AppTheme = {
  colors: {
    primary: PrimaryColors,
    neutral: NeutralColors,
  },
  typography: Typography,
}
