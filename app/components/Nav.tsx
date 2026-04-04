export default function Nav(){
	return(
		<nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-foreground/10">
			<div className="flex justify-between items-center px-12 py-5 ">
			<a href="#" className="hover:text-foreground transition-colors duration-200  border-2 border-accent px-2 py-1 tracking-widest text-xl font-bold text-accent">C.A</a>
			<ul className="flex gap-12 mr-4">
				<li><a className="hover:text-accent transition-colors duration-200 text-sm font-medium uppercase tracking-widest" href="#about">About</a></li>
				<li><a className="hover:text-accent transition-colors duration-200 text-sm font-medium uppercase tracking-widest" href="#projects">Projects</a></li>
				<li><a className="hover:text-accent transition-colors duration-200 text-sm font-medium uppercase tracking-widest" href="#contact">Contact</a></li>
			
			</ul>
			</div>
		</nav>
	);
}