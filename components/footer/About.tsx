import Link from 'next/link';
import logoImg from '../../assets/ecom.png';

export default function FooterAbout({companyTitle}: {companyTitle?: string}) {
	const title = companyTitle || 'Your Company LLC.';
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
					This website and its contents are provided "as is" and "as available" without any warranty or representations of any kind, whether express or implied.
					Price and availability information is subject to change without notice.
				</p>
			</div>
		</>
	);
}