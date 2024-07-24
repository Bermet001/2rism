import { Input } from '@web/shared'
import Link from 'next/link'

const Login = () => {
    return (
        <div>
            <div>
                <h1>{'Log in'}</h1>
                <Link href={'/auth/signup'}>
                    {'Don’t have an account? Sign up'}
                </Link>
            </div>

            <div>
                <label>
                    <p></p>
                    <Input />
                </label>
            </div>
        </div>
    )
}

export default Login
