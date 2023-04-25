// Types
import type { Actionable } from '@/types/input'

/**
* The main menu button of the application
* @see {@link Actionable} for props definition
* @param Actionable The basic input component props
* @returns The MenuButton component
*/
const MenuButton = ({ action }: Actionable) => {
  return (
    <button
      className='w-8 h-[30px] [&>span]:w-full [&>span]:h-0.75 lg:hidden flex flex-col justify-around items-end [&>span]:bg-primary [&>span]:rounded'
      onClick={action}
    >
      <span />
      <span />
      <span />
    </button>
  )
}

export default MenuButton
