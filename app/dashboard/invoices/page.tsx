import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
export default function Page() {
	return (
		<p className={clsx(`font-bold text-9xl ${lusitana.className}`)}>
			Hello From the <span className='text-red-200'>invoices</span> page
		</p>
	);
}
