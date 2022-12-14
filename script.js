
let addexpenseform=document.getElementById('addexpense')
let explist=document.getElementById('expenselist')



addexpenseform.addEventListener('submit',addexpense)


function addexpense(event){

    event.preventDefault();
    let amount=document.getElementById('amount').value
    let description=document.getElementById('desc').value
    let category = document.getElementById('category').value
    let id=document.getElementById('id')
    id.value=Math.random().toFixed(4)*10000
    let uid=id.value

    
    let expense={
        amount,
        description,
        category,
        uid
    }

    localStorage.setItem(uid,JSON.stringify(expense))
    showexpenses(expense)

}

    for (let i=0;i<localStorage.length;i++){
    let expdet=JSON.parse(localStorage.getItem(localStorage.key(i)))

    showexpenses(expdet)
    }


function showexpenses(expdet){
 
    let categ=expdet.category
    let amt=expdet.amount
    let desc=expdet.description
    // let kiya=expdet.uid

    let expo=`${categ}-->  ${amt}-->  ${desc}`

    

let ulist=document.getElementById('expenselist')
let appendli=`<li id=${expdet.uid}>${expo}<button style= 'margin-left: 30px;'onclick=edituser('${expdet.category}','${expdet.amount}','${expdet.description}','${expdet.uid}')>Edit</button>
                                        <button style= 'margin-left: 2px;'onclick=deleteuser('${expdet.uid}')>Delete</button></li>`
ulist.innerHTML=ulist.innerHTML+appendli
    
    }



    function edituser(category,amount,desc,uid){

        document.getElementById('amount').value=amount
        document.getElementById('desc').value=desc
        document.getElementById('category').value=category
        

        deleteuser(uid)
        }
        
        function deleteuser(uid){
        
            
            localStorage.removeItem(uid)
            removeUserFromView(uid)
        }
        
        function removeUserFromView(uid){
            let uList=document.getElementById('expenselist')
            let delnode=document.getElementById(uid)
            uList.removeChild(delnode)
        }
