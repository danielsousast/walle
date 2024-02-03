export type MyTheme = {
  colors: {
    background: string;
    shape: string;
    primary: string;
    text: string;
    textDark: string;
    textLight: string;
    green: string;
    red: string;
  };
  fonts: {
    regular: string;
    medium: string;
    bold: string;
  };
};

const fonts = {
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-BOld',
};

export const lightTheme: MyTheme = {
  colors: {
    background: '#FFFFFF',
    shape: '#F1F3F6',
    primary: '#6764FD',
    text: '#3A4276',
    textDark: '#1B1D28',
    textLight: '#7B7F9E',
    green: '#2CB751',
    red: '#FF4840',
  },
  fonts,
};

export const darkTheme: MyTheme = {
  colors: {
    background: '#171822',
    shape: '#212330',
    primary: '#6764FD',
    text: '#7B7F9E',
    textDark: '#eaeef2',
    textLight: '#7B7F9E',
    green: '#2CB751',
    red: '#FF4840',
  },
  fonts,
};
