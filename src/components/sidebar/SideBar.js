 import React from 'react'
 import {IoPeopleCircleOutline, IoOptionsSharp, IoNewspaperOutline, IoLogoWordpress, IoSpeedometerOutline, IoStarOutline, IoStatsChartOutline, IoStorefrontOutline, IoThumbsUpOutline, IoTrashOutline, IoPulseSharp,IoPricetagsOutline} from 'react-icons/io5'
 import { signOut } from 'firebase/auth'
 import {auth} from 'libs/firebase'
 import {Button} from 'ui/buttons'
 import {SideBarStyles} from './styles'
 function SideBar  (props){
        
    function onLogoutRequest(e){
        signOut(auth)
    }

     return( 
         <SideBarStyles>
             
            <p>Customers</p><IoPeopleCircleOutline size="1.5rem" color="blue"/>
            <p>Dashboard</p><IoOptionsSharp size="1.5rem" color="grey"/>
            <p>Newsletters</p><IoNewspaperOutline size="1.5rem" color="Black"/>
            <p>Wordpress</p><IoLogoWordpress size="1.5rem" color="Black"/>
            <p>Sales</p><IoSpeedometerOutline size="1.5rem" color="blue"/>
            <p>Favourites</p><IoStarOutline size="1.5rem" color="grey"/>   
            <p>History</p><IoStatsChartOutline size="1.5rem" color="Black"/>
            <p>Website</p><IoStorefrontOutline size="1.5rem" color="Black"/>
            <p>Reviews</p><IoThumbsUpOutline size="1.5rem" color="blue"/>
            <p>Customers</p><IoTrashOutline size="1.5rem" color="grey"/>
            <p>Orders</p><IoPulseSharp size="1.5rem" color="Black"/>
            <p>Prices</p><IoPricetagsOutline size="1.5rem" color="Black"/>
         <div className="content">
             <Button color="pink" onClick={onLogoutRequest}>Log Out</Button>
          </div>
         </SideBarStyles>
     )
 }
 
 export default SideBar 