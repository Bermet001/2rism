import { classNames } from '@web/shared/lib/classNames/classNames'
import React, { FC, InputHTMLAttributes, memo } from 'react'
import styles from './Input.module.css'

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>

interface IProps extends HTMLInputProps {
    theme?: InputTheme
    className?: string
    error?: boolean
    success?: boolean
}

export enum InputTheme {
    // eslint-disable-next-line no-unused-vars
    DEFAULT = 'default',
    // eslint-disable-next-line no-unused-vars
    ERROR = 'error',
    // eslint-disable-next-line no-unused-vars
    SUCCESS = 'success',
}

const Input: FC<IProps> = (props) => {
    const {
        theme = InputTheme.DEFAULT,
        className = '',
        error = false,
        success = false,
        type = 'text',
        placeholder = '',
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.error]: error,
        [styles.success]: success,
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={classNames(styles.input, mods, [className])}
            {...otherProps}
        />
    )
}

export default memo(Input)
