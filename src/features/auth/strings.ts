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
    signUp: "Sign Up",
    information: "Information",
    verification: "Verification",
    finish: "Finish",
  },
  /* Centered flow header shown from the Information step onward. */
  flowTitle: {
    buyer: "Become A Buyer",
    seller: "Become A Seller",
  },
  /* The first ("Sign Up") step is role-aware — copy switches on the role
     chosen on the Role screen before landing here. */
  signUp: {
    buyer: {
      title: "Create Buyer Account",
      subtitle: "Enter Your Details To Create Your Account",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Enter your name",
      emailLabel: "Email Address",
      emailPlaceholder: "Enter your email",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter your number",
    },
    seller: {
      title: "Create Seller Account",
      subtitle: "Enter Your Details To Create Your Account",
      fullNameLabel: "Sellers Full Name",
      fullNamePlaceholder: "Enter your name",
      emailLabel: "Business Email Address",
      emailPlaceholder: "Enter your business email",
      phoneLabel: "Business Phone Number",
      phonePlaceholder: "Enter your business number",
    },
  },
  form: {
    agreeToTerms: "I Agree To The Terms Of Services And Privacy",
  },
  /* Seller profile collected on the Information step. */
  information: {
    title: "Tell Us About Yourself",
    subtitle:
      "Help Buyers Know Who They're Buying From. This Info Appears On Your Public Profile.",
    shopNameLabel: "Seller / Shop Name",
    shopNamePlaceholder: "E.G Smart Store",
    bioLabel: "Bio",
    bioPlaceholder: "Tell Buyers About Your Shop, What You Sell Etc",
    addressLabel: "Enter Address",
    addressPlaceholder: "Enter Store Address",
    phoneLabel: "Business Phone Number",
    phonePlaceholder: "Enter your phone number",
    offeringsTitle: "What Will You Offer?",
    offerings: {
      reseller: "Reseller",
      customArtist: "Custom Artist",
      shoeCleaning: "Shoe Cleaning",
      footHealth: "Foot Health",
      shoeRestoration: "Shoe Restoration",
      store: "Store",
    },
  },
  /* Address picker opened from the Information step's address field. */
  selectAddress: {
    title: "Select Address",
    searchPlaceholder: "Search Address",
    emptyState: "No addresses match your search",
  },
  /* Government-ID upload collected on the Verification step. */
  verification: {
    title: "Upload Your ID",
    subtitle:
      "We Need A Government-Issued Photo ID To Verify Your Identity As A Reseller. This Is Required By California Law For Marketplace Sellers.",
    frontTitle: "Front Of ID",
    backTitle: "Back Of ID",
    idHint: "Driver's License, State ID, Or Passport",
    uploadCta: "Tap To Upload Or Take Photo",
    securityNote:
      "Your ID Is Encrypted And Stored Securely. It Is Only Used For Identity Verification And Never Shared With Buyers.",
    continueCta: "Continue Shopping",
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
    headerTitle: "Under Review",
    pending: {
      title: "Under Review",
      subtitle:
        "Your Application Has Been Submitted. We'll Verify Within 24 Hours.",
      cardTitle: "Verification In Progress",
      cardSubtitle: "Submitted Today · Up To 24 Hours",
      expectedApprovalLabel: "Expected Approval By ",
      expectedApprovalValue: "Tomorrow · 9:41 AM",
      footerNote: "You Will Get An Sms And An Email When Verification Is Done",
    },
    verified: {
      title: "You're Verified!",
      subtitle:
        "Your Seller Account Is Active. Start Listing, Run Auctions, Offer Services.",
      cardTitle: "Verified Seller Badge",
      cardSubtitle: "Displayed On Your Profile And All Listings",
      unlockedTitle: "Now Unlocked",
      cta: "Go To Dashboard",
      unlocked: [
        {
          title: "List Shoes & Products",
          subtitle: "Fixed Price, Offers & Pre-Orders",
        },
        {
          title: "Run Live Auctions",
          subtitle: "Set Start Time, Reserve, Bid Increments",
        },
        {
          title: "Offer Services",
          subtitle: "Cleaning, Custom Art, Restoration",
        },
        {
          title: "Receive Escrow Payouts",
          subtitle: "Funds Released Automatically On Delivery",
        },
      ],
    },
  },
  primaryCta: {
    continue: "Continue",
    next: "Next",
  },
  divider: {
    or: "Or",
  },
  social: {
    continueWithGoogle: "Continue With Google",
  },
} as const;
