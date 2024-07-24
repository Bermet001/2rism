import { classNames } from '@web/shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react'
import styles from './Button.module.css'
import { ButtonTheme, ButtonSize } from '@web/shared/types/button_types'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
}

const Button: FC<IProps> = (props) => {
    const {
        children,
        className = '',
        theme = ButtonTheme.CONTAINED,
        size = ButtonSize.MEDIUM,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [styles[`button--${theme}`]]: true,
        [styles[`button--${size}`]]: true,
    }

    return (
        <button
            className={classNames(styles.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default memo(Button)
