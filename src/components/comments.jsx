import { useState } from "react"
import '../assets/style.css'

import Action_button from "./action_button"

export default function Comment(
    {
        comments,
        handleInsertNode,
        handleEditNode,
        handleDeleteNode
    }) {

    const [userComment, setUserComment] = useState('')

    const [edit, setEdit] = useState(false)

    const [inputField, setInputField] = useState(false)

    const [expand, setExpand] = useState(false)

    console.log(comments)


    const onAddComment = () => {

        setExpand(true)
        handleInsertNode(comments.id,userComment)
        setInputField(false)
        setUserComment('')

    }


    const handleStateChange = () => {
        setExpand(!expand)
        setInputField(true)
    }






    return <>


        <div className="d-flex justify-content-center">


            <div>


                <div className={comments.id === 1 ? 'inputContainer' : "commentContainer"} >



                    {comments.id === 1 ? (
                        <>


                            <div className="d-flex ">
                                <input type="text" value={userComment} className="first_input form-control" placeholder="Type..." onChange={(e) => setUserComment(e.target.value)} /> &nbsp;&nbsp;

                                {/* <button className="reply_comment  btn btn-success" onClick={onAddComment} >Comment</button> */}

                                <Action_button handleChange={onAddComment} className='reply_comment btn btn-success' type='Commnet' />

                            </div>


                        </>
                    ) : (
                        <>
                            <span style={{ wordWrap: 'break-word' }} >{comments.name}</span>

                            <div style={{ display: 'flex', marginTop: "5px" }}>
                                {edit ? <>

                                    <Action_button className='reply' type='Save' />
                                    <Action_button className='reply' handleChange={() => setEdit(false)} type='Cancel' />


                                </> : <>

                                    <Action_button className='reply' type={<>

                                        {expand ? (
                                            <>&#11174;</>
                                        ) : (
                                            <>&#11172;</>
                                        )}{' '}
                                        Reply
                                    </>} handleChange={() => handleStateChange()} />

                                    <Action_button className='reply' handleChange={() => setEdit(true)} type='Edit' />
                                    <Action_button className='reply' type='Delete' />


                                </>}
                            </div>

                        </>

                    )}

                </div>


                <div style={{ display: expand ? 'block' : 'none', paddingLeft: '25px' }} >

                    {inputField && (
                        <div className="inputContainer" >
                            <input type="text" value={userComment} className="first_input " placeholder="Type..." onChange={(e) => setUserComment(e.target.value)} />
                            <Action_button className='reply' type='Save' handleChange={onAddComment} />
                            <Action_button className='reply' handleChange={() => setInputField(false)} type="Cancel" />
                        </div>
                    )}

                    {comments?.items?.map((cmt) => {
                        return <Comment  handleInsertNode={handleInsertNode} handleEditNode={handleEditNode} handleDeleteNode={handleDeleteNode}  key={cmt.id} comments={cmt} />
                    })}

                </div>




            </div>


        </div>


    </>
}
