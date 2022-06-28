import * as yup from 'yup';

export const SignInSchema = yup.object().shape({
	email: yup.string()
		.required('Enter your e-mail')
		.email('E-mail invalid!'),
	password: yup.string()
		.required('Enter your password')
		.trim('Enter your password')
});

export const SignUpSchema = yup.object().shape({
	email: yup.string()
		.required('Enter your e-mail')
		.email('E-mail invalid!'),
	password: yup.string()
		.required('Enter your password')
		.trim('Enter your password')
		.min(8)
		.max(20)
});
