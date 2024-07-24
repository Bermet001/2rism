import Image from 'next/image'
import Link from 'next/link'

const HeaderLogo = () => {
    return (
        <Link href='/'>
            <Image
                src='/static/ico/logo-el-gid.svg'
                alt='logo'
                width={133}
                height={46}
            />
        </Link>
    )
}

export default HeaderLogo
