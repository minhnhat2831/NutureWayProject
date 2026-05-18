import { ButtonField } from "./ButtonField";
import { Icons } from "./Icons";

interface PopupProps {
  isOpen?: boolean;

  title?: string
  text?: string
  onClickCancel?: () => void
  onClickConfirm?: () => void
  disabled?: boolean
}

export default function ConfirmModal({
  isOpen,

  title = 'Confirm action',
  text = 'Do you want to perform this action?',
  onClickCancel,
  onClickConfirm,
  disabled = false
}: PopupProps) {
  if (!isOpen) return
  return (<>
    <div className="absolute inset-0 z-40 bg-black/40" onClick={onClickCancel}>
      <div className={"absolute top-70 bottom-70 z-50 rounded-2xl w-full flex flex-col h-auto bg-white shadow-xl focus:outline-none"}>
        <div className={`p-4 absolute w-full rounded-2xl bg-white`}>
          <h1 className="my-2 font-serif text-xl font-semibold leading-5 text-center">{title}</h1>
          <p className="text-gray-600 text-center mb-6">{text}</p>
          <div className="flex flex-row gap-2">
            <ButtonField variant="danger" fullWidth onClick={onClickCancel} disabled={disabled}>
              Canel
            </ButtonField>
            <ButtonField variant='primary' fullWidth onClick={onClickConfirm} disabled={disabled}>
              {disabled ? (
                <span className="flex items-center justify-center gap-2">
                  <Icons.loadingIcon />
                  Loading...
                </span>
              ) : (
                <span>Confirm</span>
              )}
            </ButtonField>
          </div>
        </div>
      </div>
    </div>
  </>)
}
