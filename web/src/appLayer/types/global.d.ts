declare module '*.scss' {
    const content: any
    export default content
}

declare module '*.svg' {
    import type React from 'react'
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.png'
declare module '*.gif'

declare module 'redux-persist/lib/storage'
