export interface InformatioModal {
  title: string
  type:string
  body:string
  isModalOpen: any
  setModal: (isModalOpen: boolean,modalType:string) => void
}