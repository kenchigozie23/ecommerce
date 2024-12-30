import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function FooterContacts() {
	return (
		<>
			<h3 className='page-footer__header'>Contact Us</h3>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faWhatsapp} />
				</span>
				<a className='link' href='tel:+18001234567'>+233 (260) 723-896</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faMapMarkerAlt} />
				</span>
				<a className='link' href='#'>Accra, Ghana, AC 95014</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faClock} />
				</span>
				7:00am &mdash; 10:00pm
			</p>
		</>
	);
}