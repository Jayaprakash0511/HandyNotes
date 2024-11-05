import { DeleteNoteButton, NewNoteButton, BackButton } from '@/components'
import { ComponentProps } from 'react'

export const ActionButtonsRow = ({setClicked, ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
      <BackButton setClicked={setClicked} />
    </div>
  )
}
