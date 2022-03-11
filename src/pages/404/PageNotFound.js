 import React, {useState} from 'react'
 
 import {Link} from 'react-router-dom'
 import { onAuthStateChanged } from 'firebase/auth'
 import {auth} from 'libs/firebase'
 
 
 
 function PageNotFound  (props){
     const [isUser, setIsUser] = useState(false)
     
     onAuthStateChanged(auth, (user)=>{
         if(user){
             setIsUser(true)
         }else{
             setIsUser(false)
         }
     })

     return( 
        <>
           <aside>
               <header>
                   <h1> 404 | page not found</h1>
                   {
                     isUser? <Link to='/dashboard'>back to saftey</Link> : <Link to='/'>back to saftey</Link>
                   }
               </header>
           </aside>
        </>
     )
 }
 
 export default PageNotFound 