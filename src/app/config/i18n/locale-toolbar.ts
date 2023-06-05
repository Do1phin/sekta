const localeToolbar = {
  description: 'Internationalization locale',
  name: 'Locale',
  toolbar: {
    dynamicTitle: true,
    icon: 'globe',
    items: [
      { left: '🇺🇸', title: 'English', value: 'en' },
      { left: '🇷🇺', title: 'Русский', value: 'ru' },
      { left: '🇺🇦', title: 'Українська', value: 'ua' },
    ],
    showName: true,
  },
};

export { localeToolbar };
