 import React from 'react'

import {IoManSharp, IoNotificationsOutline, IoMailUnread, IoSettings} from 'react-icons/io5'

 import {AppBarStyles, AppBarItems, AppBarItem, } from './styles'
 import {IconButton} from './../../ui/buttons'
import {Brand} from '../branding/'
 
 function AppBar  (props){
     return( 
<AppBarStyles>
              <AppBarItems>
                  <AppBarItem>
                   <Brand size="1.5rem" iconSize="1.5rem" color="#23123" fill="#23123"/>
             
                  </AppBarItem>
                  <AppBarItem>
                      <IconButton>
                          <IoMailUnread size="1.5rem" color="red"/>
                      </IconButton>

                      <IconButton>
                          <IoNotificationsOutline size="1.5rem" color="grey"/>
                      </IconButton>
                      <IconButton>
                          <IoSettings size="1.5rem" color="Black"/>
                      </IconButton>
                      <IconButton>
                          <IoManSharp size="1.5rem" color="Black"/>
                      </IconButton>



                  </AppBarItem>
              </AppBarItems>
          </AppBarStyles>
     )
 }
 
 export default AppBar 