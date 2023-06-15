import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import bookshelfColors from '@/styles/colors'
import ProfileContent from './Profile/ProfileContent'
import AddressList from './Addresses/AddressList'
import PurchaseList from './Purchases/PurchaseList'

function Content() {
	const router = useRouter()

	return (
		<>
			{
				{
					'/account/profile': <ProfileContent />,
					'/account/addresses': <AddressList />,
					'/purchases': <PurchaseList />,
				}[router.pathname]
			}
		</>
	)
}

export default Content
