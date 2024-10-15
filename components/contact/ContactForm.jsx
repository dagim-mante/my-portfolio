'use client'

import { useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import { sendEmail } from '../../server/email';

function ContactForm() {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		subject: '',
		message: ''
	})
	const [formSuccess, setFormSuccess] = useState(null)
	const [formError, setFormError] = useState(null)
	const [loading, setLoading] = useState(false)

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setLoading(true)
						if(!formData.email || !formData.fullName || !formData.subject || !formData.message){
							setLoading(false)
							setFormError('Please fill the whole form.')	
						}

						fetch('/api/send-mail', {
							method: 'POST',
							headers: {
								'Content-type': 'application/json'
							},
							body: JSON.stringify({formData})
						})
							.then(res => res.json())
							.then(data => {
								if(data?.error){
									setLoading(false)
									setFormError(data.error)
								}
								if(data?.success){
									setLoading(false)
									setFormSuccess(data.success)
								}
							}).catch(error => {
								setLoading(false)
								setFormError('Couldn\'t send message. Try again.')
							})
						
					}}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>

					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
						value={formData.fullName}
						onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value}))}
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
						value={formData.email}
						onChange={e => setFormData(prev => ({ ...prev, email: e.target.value}))}
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
						value={formData.subject}
						onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value}))}
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							value={formData.message}
							onChange={e => setFormData(prev => ({ ...prev, message: e.target.value}))}
						></textarea>
					</div>
					{formSuccess ? (
						<div className='bg-blue-500 rounded-md text-white w-full p-2'>
							{formSuccess}
						</div>
					) : null}
					{(formError && !formSuccess )? (
						<div className='bg-red-500 rounded-md text-white w-full p-2'>
							{formError}
						</div>
					) : null}
					<div className="mt-6">
						<span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
							<Button
								title={`${loading ? 'Sending Message' : 'Send Message'}`}
								type="submit"
								aria-label="Send Message"
								disabled={loading}
							/>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
