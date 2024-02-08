import { twMerge } from 'tailwind-merge'
import ImageIcon from '../../assets/image.svg?react'

interface PlaceholderImageProps {
    className?: string
}

export default function PlaceholderImage({className}: PlaceholderImageProps) {
  return (
    <div className={twMerge('max-h-full bg-black/50 animate-pulse', className)}>
        <ImageIcon className='w-1/2 h-1/2' />
    </div>
  )
}
