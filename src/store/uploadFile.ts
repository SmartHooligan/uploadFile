import { defineStore } from 'pinia'

const useUploadFileStore = defineStore('uploadFile', {
  state: () => ({
    fileName: ''
  }),
  actions: {
    setFileName(name: string) {
      this.fileName = name
    }
  }
})

export default useUploadFileStore