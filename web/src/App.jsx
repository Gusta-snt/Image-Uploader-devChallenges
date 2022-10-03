import { useEffect, useState } from 'react'

import './app.css'
import exampleImage from './assets/exampleImage.svg'

import ImageScreen from './screens/ImageScreen'
import LoadingScreen from './screens/LoadingScreen'

function App() {

  const [url, setUrl] = useState("")

  async function submitFileChooseFileButton(event) {
    event.preventDefault()

    const dragDropBox = document.querySelector("#drag-drop-box")
    const text = document.querySelector("#text")

    const childrenDragDropBox = Array.from(dragDropBox.childNodes)

    const file = document.querySelector("#fileInput").files[0] 
    if(file.type.split("/")[0] !== "image"){
      changeDragDropBoxMessage("The file need to be an image!")
      childrenDragDropBox.map((child) => child.style.display = "none")
      text.style.display = "block"
      return
    }

    changeScreen("#form-screen", "#loading-screen")

    const imageUrl = await sendImage(file)
    setUrl(imageUrl.url)
    
    changeScreen("#loading-screen","#image-screen")
  }

  async function submitDragDropBox(event) {
    event.preventDefault();

    if(event.dataTransfer.items){
     if(event.dataTransfer.items[0].kind === "file") {
      const file = event.dataTransfer.items[0].getAsFile()

      if(file.type.split("/")[0] === "image"){

        changeScreen("#form-screen", "#loading-screen")

        const imageUrl = await sendImage(file)
        setUrl(imageUrl.url)

        changeScreen("#loading-screen","#image-screen")

      }else{
        changeDragDropBoxMessage("The file need to be an image!")
      }
     } 
    }
  }

  function dragOver(event) {
    event.preventDefault();

    const dragDropBox = document.querySelector("#drag-drop-box")
    const text = document.querySelector("#text")

    const childrenDragDropBox = Array.from(dragDropBox.childNodes)

    changeDragDropBoxMessage("Drop the file here!")
    childrenDragDropBox.map((child) => child.style.display = "none")
    text.style.display = "block"

  }

  function dragLeave(event) {
    if(event){
      event.preventDefault();
    }

    const dragDropBox = document.querySelector("#drag-drop-box")
    const text = document.querySelector("#text")

    const children = Array.from(dragDropBox.childNodes)

    children.map((child) => child.style.display = "block")
    text.style.display = "none"
  }

  function changeDragDropBoxMessage(message) {
    const text = document.querySelector("#text")
    text.textContent = message
  }

  function chooseAFile() {
    document.querySelector("#fileInput").click()
  }

  function changeScreen(toChangeScreenSelector, newScreenSelector) {
    const toChangeScreen = document.querySelector(toChangeScreenSelector)
    const newScreen = document.querySelector(newScreenSelector)

    toChangeScreen.style.display = "none"
    newScreen.style.display = "flex"
  }

  async function sendImage(image) {
    const formData = new FormData()
    formData.append("img", image)

    let url = await fetch("http://localhost:3000/", {
      method: "POST",
      body: formData
    })
    url = url.json()

    return url
  }

  return (
    <div className="bg-white shadow-principal rounded-xl flex justify-center">
      <section id="form-screen" className="mx-8 my-9">
        <form className="flex flex-col items-center">
          <h2 className="text-lg text-[#4F4F4F] leading-[0.937rem] tracking-[-0.035em]">Upload your image</h2>
          <p className="mt-4 text-[0.625rem] text-[#828282] leading-[1.68rem] tracking-[-0.035em]">File should be Jpeg, Png,...</p>
          <div onDragOver={e => dragOver(e)} onDragLeave={e => dragLeave(e)} onDrop={e => submitDragDropBox(e)} id="drag-drop-box" className="mt-[30px] w-[338px] h-[219px] rounded-[12px] bg-[#F6F8FB] flex flex-col justify-center items-center gap-[37px]">
            <img src={exampleImage} alt="Example image."/>
            <p className="text-[#BDBDBD] tracking-[0.035em] leading-[1.125rem] text-xs">Drag & Drop your image here</p>
            <p id="text" className="hidden text-[#BDBDBD] tracking-[-0.035em] leading-[1.125rem] text-xs"></p>
          </div>
          <p className="mt-[19px] text-xs text-[#BDBDBD] leading-[1.125rem] tracking-[-0.035em]">Or</p>
          <label className="mt-[22px]">
            <button type="button" onClick={chooseAFile} className="py-2 px-4 rounded-lg bg-[#2F80ED] text-xs text-white leading-[1rem] tracking-[-0.035em] hover:bg-[#186CF0]">Choose a file</button>
            <input type="file" onChange={e => submitFileChooseFileButton(e)} id="fileInput" className="hidden"/>
          </label>
        </form>
      </section>

      <LoadingScreen id="loading-screen"/>

      <ImageScreen url={url} id="image-screen"/>
    </div>
  )
}

export default App
