

export default function Action_button({handleChange,type,className}){

    return <div className={className} onClick={handleChange} >
     {type}
    </div>

}