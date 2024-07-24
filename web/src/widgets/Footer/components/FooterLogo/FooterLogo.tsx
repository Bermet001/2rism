import Image from 'next/image'
import Link from 'next/link'

const FooterLogo = () => (
    <Link href='/'>
        <Image
            src='/static/ico/logo-el-gid-white.svg'
            alt='logo'
            width={102}
            height={26}
        />
    </Link>
)

export default FooterLogo
