// Components
import Button from '@/components/input/core/Button'
// Types
import type { Themeable } from '@/types/theme'

/** The main call to action of the application */
const callToAction = () => alert('Call to action!')

/**
 * The main call to action component of the application
 * @see {@link Themeable} for props specification
 * @param Themeable The component props
 * @returns The CallToAction component
 */
export default function CallToAction ({ theme }: Themeable) {
  return (
    <Button action={callToAction} theme={theme}>
      Call to action!
    </Button>
  )
}
