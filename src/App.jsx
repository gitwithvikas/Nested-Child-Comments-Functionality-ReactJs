import { useState } from "react"
import Comment from "./components/comments"

import NodeFunction from "./components/crateNode_function"

const Comments = {
  id: 1,
  items: []
}

export default function App() {

  const [comments, setComments] = useState(Comments)

  const { insertNode, editNode, deleteNode } = NodeFunction()

  const handleInsertNode = (folderId,item) =>{
    const finalStructure = insertNode(comments,folderId,item)
    setComments(finalStructure)
  }


  const handleEditNode = (folderId,value)=>{

    const finalStructure = editNode(comments,folderId,value)
    setComments(finalStructure)

  }

  const handleDeleteNode = (folderId)=>{

    const finalStructure = deleteNode(comments,folderId)
    const item = {...finalStructure}
    setComments(item)

  }





  return <>

    <h1>Welcome to Nested Comments</h1>

    <hr />

    <Comment handleInsertNode={handleInsertNode} handleEditNode={handleEditNode} handleDeleteNode={handleDeleteNode} comments={comments} />


  </>
}
