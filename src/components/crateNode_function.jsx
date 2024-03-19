
const NodeFunction = ()=>{

    const insertNode = function(tree,commentId,item){

        console.log('tree ', tree)

        console.log(tree.id)
        console.log('commetId ',commentId);
        if(tree.id === commentId){
            tree.items.push({
                id:new Date().getTime(),
                name:item,
                items:[]
            })

            return tree;

        }
        let latestNode = []

        latestNode = tree.items.map((ob)=>{
            console.log('run latest')
            console.log(ob)
            return insertNode(ob,commentId,item)
        })


        return {...tree,items:latestNode}

    }




    const editNode = function(tree,commentId,value){

    }
    
    const deleteNode = function(tree,commentId){

    }


    return {insertNode,editNode,deleteNode}

}


export default NodeFunction;