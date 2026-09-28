export const colors = {
  accent: '#72E2C0',
  accentStrong: '#43C7A6',
  darkBackground: '#07141C',
  darkSurface: '#0E1D29',
  darkCard: '#122634',
  darkText: '#EAF7FF',
  darkMuted: '#9CB7C8',
  darkBorder: '#1C3547',
  lightBackground: '#F4F8FB',
  lightSurface: '#FFFFFF',
  lightCard: '#F9FBFD',
  lightText: '#102330',
  lightMuted: '#516B7D',
  lightBorder: '#D9E5EE',
  shadow: '#0C1720',
};

export const getTheme = (isDarkMode) => {
  if (isDarkMode) {
    return {
      background: colors.darkBackground,
      surface: colors.darkSurface,
      card: colors.darkCard,
      text: colors.darkText,
      muted: colors.darkMuted,
      border: colors.darkBorder,
      accent: colors.accent,
      accentStrong: colors.accentStrong,
      tabBar: '#0B1821',
      secondaryBackground: '#0D1D2A',
      shadow: colors.shadow,
    };
  }

  return {
    background: colors.lightBackground,
    surface: colors.lightSurface,
    card: colors.lightCard,
    text: colors.lightText,
    muted: colors.lightMuted,
    border: colors.lightBorder,
    accent: colors.accentStrong,
    accentStrong: colors.accentStrong,
    tabBar: '#FFFFFF',
    secondaryBackground: '#EDF5FA',
    shadow: '#C9D9E4',
  };
};
