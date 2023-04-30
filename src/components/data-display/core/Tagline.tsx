// Config
import { SIZES } from '@/modules/sizing/hooks/config'
// Types
import type { TaglineProps } from '@/types/data-dislay'

const SIZE_STYLES = Object.freeze({
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-xl'
})

/**
 * A simple tagline component
 * @see {@link TaglineProps} for props specification
 * @param TaglineProps The component props
 * @returns The Tagline component
 */
export default function Tagline ({ children, size = SIZES.md }: TaglineProps) {
  const taglineSTyle = `text-sky-700 leading-none ${SIZE_STYLES[size]}`
  return (
    <p className={taglineSTyle}>
      {children}
    </p>
  )
}
