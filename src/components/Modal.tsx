import { forwardRef, ReactNode } from 'react'

export type ModalProps = {
  children?: ReactNode
  onBackdropClick?: () => void
  modalBoxClassName?: string
  // you can add more classNames as per you level of customisation
}

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, modalBoxClassName, onBackdropClick }, ref) => {
    return (
      <dialog ref={ref} className="modal">
        <div className={`modal-box ${modalBoxClassName ?? ''}`}>{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button
            type="button"
            onClick={() => {
              onBackdropClick && onBackdropClick()
            }}
          >
            close
          </button>
        </form>
      </dialog>
    )
  }
)
