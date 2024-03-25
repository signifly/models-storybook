import { createAgencySignup } from './AgencySignup';

export default {
	title: 'Agency/Agency Signup',
	argTypes: {
		title: {
			control: 'text'
		},
		titleTag: {
			control: 'select',
			options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
		},
		description: {
			control: 'text'
		},
		firstButtonUrl: {
			control: 'text'
		},
		firstButtonText: {
			control: 'text'
		},
		secondButtonUrl: {
			control: 'text'
		},
		secondButtonText: {
			control: 'text'
		}
	}
};

const Template = (args) => createAgencySignup(args);

export const Default = Template.bind({});

Default.args = {
	title: 'Your agency not listed here?',
	titleTag: 'p',
	description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
	firstButtonUrl: '#',
	firstButtonText: 'I am an agency',
	secondButtonUrl: '#',
	secondButtonText: 'I am a model'
};
   