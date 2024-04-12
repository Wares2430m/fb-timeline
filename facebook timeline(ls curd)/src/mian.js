let studentForm=document.getElementsByClassName('mainForm')

let base=document.getElementsByClassName('innerHTML')

let msg=document.getElementsByClassName('msg')

// dynamic your data 

let dynamicData=()=>{
    let data=JSON.parse(localStorage.getItem('posts'))

  let post=''

   if(data){
     data.forEach((items,index)=>{
          post+=`
          <div class="post">
          <div class="parentButton">
              <div class="button">
                  <button><a href="">Whats in your mind</a></button>
              </div>
          </div>
          <div class="postItems">
              <div class="edit">
                  <button><i class="fa-solid fa-pen-to-square"></i></button>
              </div>
              <div class="profile">
                  <img src="${items.userProfile}" alt=""/>
                  <h4>${items.userName}</h4>
              </div>
              <div class="mainPost">
                  <p>${items.userText}</p>
                  <div class="postImg">
                   <img src="${items.userPost}" alt=""/>
                  </div>
              </div>
          </div>

      </div>
          `
    })
base.innerHTML=post
}
}


dynamicData()

// save data to ls 
studentForm.onsubmit=(e)=>{
   e.preventDefault()

   let target=e.target

   let newData= new FormData(target)

   let {userName,userProfile,userText,userPost}= Object.fromEntries(newData)
    
   // validation

   if(!userName||!userProfile){
    msg.innerHTML='fill properly'
   }else{
    let oldData
    let lsData=[]

    oldData=localStorage.getItem('posts')

    if(oldData){
     lsData=JSON.parse(oldData)
   }
   lsData.push(
    {
      userName,
      userProfile,
      userText,
      userPost,
    }
   )
localStorage.setItem('posts',JSON.stringify(lsData))
}
}
