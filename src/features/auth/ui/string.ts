export const loginScreenStrings = {
    backgroundPattern: {
      watermarkText: 'LB',
    },
    authHeader: {
      titleLeadingWord: 'Legacy',
      titleAccentWord: 'Battle',
      subtitleTagline: 'Create Battle And Win Challenges',
    },
    social: {
      continueWithApple: 'Continue With Apple',
      continueWithFacebook: 'Continue With Facebook',
      continueWithGoogle: 'Continue With Google',
      continueWithEmail: 'Continue With Email',
    },
    primaryCta: {
      createAccount: 'Create Account',
    },
    emailLoginScreen: {
      title: 'Login legend',
      subtitle: 'login to your account',
    },
    emailLoginForm: {
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      forgotPassword: 'Forgot password?',
      forgotPasswordComingSoon: 'Password reset will be available in a future update.',
      enableBiometrics: 'Enable biometrics',
      biometricsPrompt: 'Confirm to enable biometric login',
      biometricsUnavailable: 'Biometrics are not available on this device.',
      biometricsNotEnrolled: 'Set up Face ID or Touch ID in your device settings first.',
      biometricsEnrollCancelledToast: 'Biometrics setup was cancelled, you can enable it in Settings',
      submitLogIn: 'Log In',
      footerLeadNoAccount: "Don't have an account? ",
      navigateToSignUp: 'Sign Up',
    },
    alerts: {
      missingCredentialsTitle: 'Missing Info',
      missingCredentialsMessage: 'Please enter email and password',
      loginFailedTitle: 'Login Failed',
    },
    loginWithBiometricsScreen: {
      title: 'Welcome back',
      subtitle: 'Sign in with biometrics or your password',
      displayEmailLabel: 'Account',
      passwordPlaceholder: 'Password',
      loginWithBiometrics: 'Log in with biometrics',
      usePasswordInstead: 'Use password instead',
      notYou: 'Not You ?',
      notYouSignOutTitle: 'Sign out?',
      notYouSignOutMessage:
        'Continuing will sign out the current account on this device. You can then sign in with a different email.',
      notYouSignOutConfirm: 'Yes, sign out',
      notYouSignOutCancel: 'Cancel',
      forgotPassword: 'Forgot password?',
      submitLogIn: 'Log in with password',
      biometricSignInFailed: 'Too many attempts. Try your password.',
    },
  } as const;
  
  export const signUpScreenStrings = {
    authHeader: {
      welcomeTitle: 'Welcome, Legend-In-The-Making!',
      createAccountSubtitle: 'Create An Account To Start Battling',
    },
    form: {
      emailLabel: 'Email Address',
      emailPlaceholder: 'Enter Email',
      passwordLabel: 'Enter Password',
      passwordPlaceholder: 'Enter Password',
      confirmPasswordLabel: 'Confirm Password',
    },
    legal: {
      termsLeadIn: 'By Continuing You Agree To Our',
      termsWord: 'Terms',
      termsConnector: 'And',
      conditionsWord: 'Conditions',
    },
    primaryCta: {
      signUp: 'Sign Up',
    },
    divider: {
      or: 'Or',
    },
    social: {
      continueWithGoogle: 'Continue With Google',
    },
    footer: {
      hasAccountPrompt: 'Already have an account?',
      logInCta: 'Log in',
    },
    alerts: {
      missingFieldsTitle: 'Missing Info',
      missingFieldsMessage: 'Please fill in all fields',
      passwordMismatchTitle: 'Password Mismatch',
      passwordMismatchMessage: 'Passwords do not match',
      weakPasswordTitle: 'Weak Password',
      weakPasswordMessage: 'Password must be at least 6 characters',
      signUpFailedTitle: 'Sign Up Failed',
      accountCreatedTitle: 'Account Created',
      accountCreatedMessage: 'Please check your email to confirm your account, then log in.',
    },
  } as const;
  