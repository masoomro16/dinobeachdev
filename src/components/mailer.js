import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const Mailer = () => {
    const [values, setValues] = useState({
        name:  '',
        email: '',
        message: ''
    });

	const [status, setStatus] = useState('');

    const form = useRef();
	
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_im0dedw', 'template_opt1qwk', form.current, '6v8S2uMuWSq-Ac6F3')
	.then(
		res => {
			console.log('SUCCESS!', res);
			setValues({
				name:'',
				email:'',
				message:''
			});
			setStatus('SUCCESS')
		})
		.catch(
		err => {
			console.log('FAILED', err);
		});
	}

	const handleChange = (e) => {
		setValues(values => ({
			...values,
			[e.target.name] : e.target.value
		}));
	}
	
return(
	<div>
		<form onSubmit={sendEmail} ref={form}>
			<input type='text' name='name' value={values.name} placeholder='Name' onChange={handleChange} required/>
			<input type='email' name='email' value={values.email} placeholder='Email' onChange={handleChange} required />
			<textarea name='message' value={values.message} placeholder='Your Message' onChange={handleChange} required/>
			<input type='submit' value='Send'/>
		</form>
	</div>
);
}

export default Mailer