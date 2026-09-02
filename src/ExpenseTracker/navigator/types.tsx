export type MainTabParamList = {
  BottomTabs: undefined;
  BoardingStack: undefined;
  Notifications: undefined;
}

export type RootTabParamList = {
  HomeStack: undefined;
  AnalysisStack: undefined;
  TransactionsStack: undefined;
  CategoriesStack: undefined;
  ProfileStack: undefined;

  // Notifications: undefined;
};

export type BoardingParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  // Notifications: undefined
};


export type HomeParamList = {
  Home: undefined;
  // Notifications: undefined
};

export type SettingsParamList = {
  Settings: undefined;
  NotificationSettings: undefined;
  PasswordSettings: undefined;
  DeleteAccount: undefined;
  // Notifications: undefined
};

export type ProfileParamList = {
  Profile: undefined;
  EditProfile: undefined;
  SettingsStack: undefined
  // Notifications: undefined
};

export type CategoriesParamList = {
  Categories: undefined;
  CategoryExpenses: {title: string};
  AddExpense: undefined;
  AddSaving: undefined;
  SavingCategories: undefined;
  CategorySavings: undefined;
  // Notifications: undefined
};


export type TransactionsParamList = {
  Transactions: undefined;
  // Notifications: undefined
};


export type AnalysisParamList = {
  Analysis: undefined;
  Search: undefined;
  // Notifications: undefined
};