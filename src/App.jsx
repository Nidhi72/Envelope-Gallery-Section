import envelopeImg from './assets/Envolpe.png'
import gallery1 from './assets/Img1.png'
import gallery2 from './assets/Img2.png'
import gallery3 from './assets/Img3.png'
import gallery4 from './assets/Img4.png'
import gallery5 from './assets/Img5.png'

function App() {
	return (
		<section className='relative max-w-[1440px] mx-auto flex justify-center items-center min-h-[520px] py-96 overflow-x-hidden'>
			

			{/* Envelope and Overlay Content with Background */}
			<div className='relative z-20 w-[1226px] h-[268px] mx-auto flex flex-col items-center' style={{ marginTop: '120px' }}>
				{/* Background Color */}
				<div className='absolute inset-0 w-[1226px] h-[268px] bg-[#7E7057] rounded-b-[40px] z-0' aria-hidden='true' />

				{/* Gallery Images Fanned Out */}
				<div className='absolute left-0 top-[-140px]  z-10 flex items-end h-[263px] select-none'>
					<img 
						src={gallery5} 
						alt='Gallery 5' 
						className='w-[287px] h-[263px] object-cover rounded-lg shadow-lg -rotate-[15deg] ml-1 transition-all duration-500 ease-in-out grayscale hover:grayscale-0 hover:-translate-y-[300px] hover:rotate-0 cursor-pointer' 
						style={{ zIndex: 1 }} 
					/>
					<img 
						src={gallery4} 
						alt='Gallery 4' 
						className='w-[287px] h-[263px] object-cover rounded-lg shadow-lg rotate-[13deg] -ml-6 transition-all duration-500 ease-in-out grayscale hover:grayscale-0 hover:-translate-y-[300px] hover:rotate-0 cursor-pointer' 
						style={{ zIndex: 1 }} 
					/>
					<img 
						src={gallery1} 
						alt='Gallery 1' 
						className='w-[287px] h-[263px] object-cover rounded-lg shadow-lg -rotate-[6deg] -ml-24 transition-all duration-500 ease-in-out grayscale hover:grayscale-0 hover:-translate-y-[300px] hover:rotate-0 cursor-pointer' 
						style={{ zIndex: 2 }} 
					/>
					<img 
						src={gallery2} 
						alt='Gallery 2' 
						className='w-[287px] h-[263px] object-cover rounded-lg shadow-lg rotate-[7deg] -ml-20 transition-all duration-500 ease-in-out grayscale hover:grayscale-0 hover:-translate-y-[300px] hover:rotate-0 cursor-pointer' 
						style={{ zIndex: 1 }} 
					/>
					<img 
						src={gallery3} 
						alt='Gallery 3' 
						className='w-[287px] h-[263px] object-cover rounded-lg shadow-lg -rotate-[1deg] -ml-4 transition-all duration-500 ease-in-out grayscale hover:grayscale-0 hover:-translate-y-[300px] hover:rotate-0 cursor-pointer' 
						style={{ zIndex: 2 }} 
					/>
				</div>

				{/* Envelope Image */}
				<img
					src={envelopeImg}
					alt='Envelope'
					className='absolute left-0 top-0 w-[1226px] h-[268px] drop-shadow-2xl pointer-events-none select-none z-20'
				/>

				{/* Overlay Content */}
				<div className='absolute left-1/2 bottom-12 -translate-x-1/2 z-30 w-[80vw] max-w-4xl flex flex-col md:flex-row items-center justify-between px-8 py-6'>
					<h2 className='text-3xl md:text-4xl font-serif font-medium text-[#4B3F2A] mb-4 md:mb-0'>
						Envelope 
					</h2>
					<div className='flex items-center gap-4'>
						<svg width='36' height='36' viewBox='0 0 36 36' aria-hidden='true'>
							<circle cx='18' cy='18' r='16' fill='none' stroke='#2563eb' strokeWidth='2' />
							<path d='M18 8 L18 28 M8 18 L28 18' stroke='#2563eb' strokeWidth='2' strokeLinecap='round' />
						</svg>
						<button
							tabIndex={0}
							aria-label='View Gallery'
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.scrollTo({ top: 0, behavior: 'smooth' }) }}
							className='flex items-center gap-2 px-6 py-2 rounded-lg bg-neutral-100 text-[#4B3F2A] font-medium text-lg shadow transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
						>
							View Gallery
							<span className='inline-block'>
								<svg width='24' height='24' fill='none' stroke='#4B3F2A' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'>
									<path d='M5 12h14M13 6l6 6-6 6' />
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default App;