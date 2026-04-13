import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"

export default function Footer (){
 return(

<footer className="bg-zinc-900 py-12 border-t border-accent/90">

	<div className="flex flex-col gap-4 items-center">
			<a href ="#" className="text-3xl text-white mt-2  font-display tracking-wider hover:text-accent transition-colors duration-200">Connor Alexander</a>

		<div className="flex gap-4 py-2 justify-center">
    	<a href="#" className="text-3xl text-white hover:text-accent transition-colors duration-200"><FaInstagram /></a>
   		<a href="#" className="text-3xl text-white hover:text-accent transition-colors duration-200"><FaTiktok /></a>
   	 	<a href="#" className="text-3xl text-white hover:text-accent transition-colors duration-200"><FaYoutube /></a>
  </div> 
	
		<p className="text-sm text-white">© 2025 Connor Alexander. All rights reserved.</p>
	
		<a href="#home" className="text-sm text-white hover:text-accent transition-colors duration-200">Back To Top ↑</a>

	</div>

</footer>
)}