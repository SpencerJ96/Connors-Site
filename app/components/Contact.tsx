"use client"
import { useState } from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'



export default function Contact(){
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState (false);
	const [isLoading, setIsLoading] = useState (false);
	
	
	async function handleSubmit(e: React.FormEvent){
		e.preventDefault()

		setIsLoading(true)

		const response = await fetch ('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
		body: JSON.stringify({name, email, message})
	})
	const data = await response.json()
	 if (data.success) {
		setIsLoading(false)
		setSubmitted(true)
	 }
}



	return(
<section id = "contact" className="py-20 px-8">

		<h2 className="text-center text-black text-6xl font-display tracking-widest mb-2">Lets Create Something Together</h2>
		<div className="w-16 h-0.5 bg-accent mx-auto mt-2 mb-10"></div>

	
	
	{submitted ? (
		<div className="flex flex-col items-center text-3xl font-display">Thanks! We'll be in touch soon. </div>
	) : isLoading ? (
		<div className="flex justify-center items-center">
		<AiOutlineLoading3Quarters className="animate-spin text-4xl text-accent" />
		</div>
	) : (
	<form className ="max-w-2xl mx-auto" onSubmit={handleSubmit}>
		<div className="grid grid-cols-2 gap-6">
			<div className="mb-6">
				<label className="block mb-2 font-display text-2xl text-center tracking-wide">Name:</label>
				<input placeholder="Name"type="text" value={name} className="px-4 py-3 w-full border border-black rounded-md" 
				 onChange={(e) =>setName (e.target.value)}></input>
			</div>
				
			<div className="mb-6">
				<label className="block mb-2 font-display text-2xl text-center tracking-wide">Email:</label>
				<input placeholder="xyz@hotmail.com"type ="email" value ={email} className="px-4 py-3 w-full border border-black rounded-md"
				 onChange={(e) => setEmail (e.target.value)}></input>
			</div>
		</div>

			<div className="mb-6">
				<label className="block mb-2 font-display text-2xl text-center tracking-wide">Message:</label>
				<textarea placeholder="Tell me about your project! What type of video do you need? When/Where and any style references you have. Budget range is helpful too!"rows = {6} value = {message} className="px-4 py-3 w-full border border-black rounded-md"
				 onChange ={(e) => setMessage(e.target.value)} />
			</div>
		<button className="cursor-pointer w-full bg-accent hover:bg-accent-light transition-colors duration-200 text-white py-6 px-4 rounded-xl">Submit</button>
	</form>
  )}
</section>

	);

}