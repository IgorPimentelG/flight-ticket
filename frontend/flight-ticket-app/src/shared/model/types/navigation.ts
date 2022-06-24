import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type PublicStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Onboarding: undefined;
};

// Public
export type SplashProps = NativeStackScreenProps<PublicStackParamList, 'Splash'>;
export type SignInProps = NativeStackScreenProps<PublicStackParamList, 'SignIn'>;
export type SignUpProps = NativeStackScreenProps<PublicStackParamList, 'SignUp'>;
export type OnboardingProps = NativeStackScreenProps<PublicStackParamList, 'Onboarding'>;
