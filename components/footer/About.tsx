import Link from 'next/link';
import logoImg from '../../assets/andrax.png';

export default function FooterAbout({companyTitle}: {companyTitle?: string}) {
	const title = companyTitle || 'KNAS & ESCCAY TECH TRADING';
	return (
		<>
			<div className='page-footer__logo'>
				<Link href='/'>
					<a>
						<img src={logoImg.src} width={logoImg.width} height={logoImg.height} alt={title} className='page-footer__logo-img' />
					</a>
				</Link>
			</div>
			<div className='page-footer__company-info'>
				<p className='title'>{title}</p>
			</div>
			<div className='page-footer__disclaimer'>
				<p className='text-muted small'>
				 We are your go-to destination for premium accessories that enhance your digital lifestyle. From cutting-edge tech gadgets to stylish, functional add-ons, we offer a curated selection of products designed to complement your devices and simplify your life.
				</p>
			</div>
		</>
	);
}