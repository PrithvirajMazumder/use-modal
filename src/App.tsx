import { useModal } from './hooks/useModal.tsx'

const App = () => {
  const { modal, openModal, closeModal } = useModal({
    children: (
      <>
        <h1 className="text-2xl font-bold">I am your modal's</h1>
        <div className="py-4">
          <p className="text-lg">I am you modal's content</p>
        </div>
        <div className="flex items-center w-full">
          <button className="btn ml-auto" onClick={() => closeModal()}>
            Close
          </button>
        </div>
      </>
    )
  })

  return (
    <div className="bg-base-100 w-[100svw] h-[100svh] flex flex-col items-center justify-center">
      {modal}
      <button className="btn btn-primary" onClick={() => openModal()}>
        Open Modal
      </button>
    </div>
  )
}

export default App
