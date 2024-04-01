import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
export default function Page() {
	return (
		<p className={clsx(`font-bold text-9xl ${lusitana.className}`)}>
			Hello From the customer page
		</p>
	);
}
