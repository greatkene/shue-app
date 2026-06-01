export const loginScreenStrings = {
  backgroundPattern: {
    watermarkText: "LB",
  },
  authHeader: {
    titleLeadingWord: "Legacy",
    titleAccentWord: "Battle",
    subtitleTagline: "Create Battle And Win Challenges",
  },
  social: {
    continueWithApple: "Continue With Apple",
    continueWithFacebook: "Continue With Facebook",
    continueWithGoogle: "Continue With Google",
    continueWithEmail: "Continue With Email",
  },
  primaryCta: {
    createAccount: "Create Account",
  },
  emailLoginScreen: {
    title: "Login legend",
    subtitle: "login to your account",
  },
  emailLoginForm: {
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    forgotPassword: "Forgot password?",
    forgotPasswordComingSoon:
      "Password reset will be available in a future update.",
    enableBiometrics: "Enable biometrics",
    biometricsPrompt: "Confirm to enable biometric login",
    biometricsUnavailable: "Biometrics are not available on this device.",
    biometricsNotEnrolled:
      "Set up Face ID or Touch ID in your device settings first.",
    biometricsEnrollCancelledToast:
      "Biometrics setup was cancelled, you can enable it in Settings",
    submitLogIn: "Log In",
    footerLeadNoAccount: "Don't have an account? ",
    navigateToSignUp: "Sign Up",
  },
  alerts: {
    missingCredentialsTitle: "Missing Info",
    missingCredentialsMessage: "Please enter email and password",
    loginFailedTitle: "Login Failed",
  },
  loginWithBiometricsScreen: {
    title: "Welcome back",
    subtitle: "Sign in with biometrics or your password",
    displayEmailLabel: "Account",
    passwordPlaceholder: "Password",
    loginWithBiometrics: "Log in with biometrics",
    usePasswordInstead: "Use password instead",
    notYou: "Not You ?",
    notYouSignOutTitle: "Sign out?",
    notYouSignOutMessage:
      "Continuing will sign out the current account on this device. You can then sign in with a different email.",
    notYouSignOutConfirm: "Yes, sign out",
    notYouSignOutCancel: "Cancel",
    forgotPassword: "Forgot password?",
    submitLogIn: "Log in with password",
    biometricSignInFailed: "Too many attempts. Try your password.",
  },
} as const;

export const signUpScreenStrings = {
  backToRoles: "Go Back To Roles",
  goBack: "Go Back",
  steps: {
    information: "Information",
    verification: "Verification",
    finish: "Finish",
  },
  header: {
    title: "Create Your Account",
    subtitle: "Enter Your Details To Create Your Account",
  },
  form: {
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter your name",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email",
    phoneLabel: "Phone Number",
    phonePlaceholder: "Enter your number",
    agreeToTerms: "I Agree To The Terms Of Services And Privacy",
  },
  verifyOtp: {
    title: "Verify Details",
    subtitle: "We Sent A Verification Code To Your Email And Phone Number",
    resendCountdownPrefix: "Resend Code In",
    resendCountdownSuffix: "Secs",
    resendCode: "Resend Code",
  },
  completeDetails: {
    title: "Complete Details",
    subtitle: "Enter Your Password To Finish",
    usernameLabel: "Enter Username",
    usernamePlaceholder: "Enter your name",
    passwordLabel: "Enter Password",
    passwordPlaceholder: "Enter your password",
    confirmPasswordLabel: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm your password",
  },
  finish: {
    title: "Account Verified Successfully",
    subtitle: "your have been created and verified",
    login: "Login",
  },
  primaryCta: {
    continue: "Continue",
  },
  divider: {
    or: "Or",
  },
  social: {
    continueWithGoogle: "Continue With Google",
  },
} as const;
