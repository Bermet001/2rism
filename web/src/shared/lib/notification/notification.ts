import { toast } from 'react-hot-toast'

type NotificationType = 'success' | 'info' | 'error'

export const notify = (message: string, type: NotificationType) => {
    if (type === 'info') {
        toast(message, {
            position: 'top-right',
        })
        return
    }

    toast[type](message, {
        position: 'top-right',
    })
    return
}
