import { Button, ButtonTheme } from '@web/shared'
import styles from './HeaderUserSelection.module.css'
import { ButtonSize } from '@web/shared/types/button_types'
import Link from 'next/link'

const HeaderUserSelection = () => {
    return (
        <div className={styles.buttons_contaiter}>
            <Link href={'/auth/login'}>
                <Button className={styles.log_in} size={ButtonSize.XXLARGE}>
                    Log in
                </Button>
            </Link>
            <Link href={'/auth/signup'}>
                <Button className={styles.log_in} size={ButtonSize.XXLARGE}>
                    Sign up
                </Button>
            </Link>
            <Button
                theme={ButtonTheme.OUTLINED}
                className={styles.language}
                size={ButtonSize.XXLARGE}
            >
                EN
            </Button>
        </div>
    )
}

export default HeaderUserSelection
