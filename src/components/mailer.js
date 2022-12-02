import React, {useRef, useState} from 'react';
import '../styles/style.css';
import emailjs from '@emailjs/browser';

const Mailer = () => {
	const inputStyles = 'bg-[#FFDE9D] content-text rounded-md py-2 pl-2 h-16'
    
	const [values, setValues] = useState({
        firstName:  '',
		lastName:'',
        email: '',
		company:'',
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
				firstName:'',
				lastName:'',
				email:'',
				company:'',
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
	<div className='w-full ml-10 mt-12'>
		<form onSubmit={sendEmail} ref={form} className='grid grid-cols-2 gap-4'>
			<input className={inputStyles} type='text' name='firstName' value={values.firstName} placeholder=' First Name' onChange={handleChange} required />
			<input className={inputStyles} type='text' name='lastName' value={values.lastName} placeholder='Last Name' onChange={handleChange} required />
			<input className={inputStyles} type='email' name='email' value={values.email} placeholder='Email' onChange={handleChange} required />
			<input className={inputStyles} type='text' name='company' value={values.company} placeholder='Company Name' onChange={handleChange} />
			
			<select name='package' id='package' className={`${inputStyles} col-span-2`}>
				<optgroup className={inputStyles}>
					<option value='test'>test</option>
					<option value='test2'>test2</option>
				</optgroup>
				
			</select>

			<textarea className={`${inputStyles} col-span-2 h-32`} name='message' value={values.message} placeholder='Your Message' onChange={handleChange} required/>
				<input type='submit' value='Send' 
					className='ml-auto mt-8 col-start-2 text-3xl title-text gradient-text font-extrabold py-4 px-8 gradient-btn'/>
			
			
		</form>
	</div>
);
}

export default Mailer