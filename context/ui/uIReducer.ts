import { UIState } from "./UIProvider";


type UIActionType = 
| { type: 'UI - Open Sidebar' } //TYPES OF ACTIONS IN THIS CASE IS TO SIDEBAR
| { type: 'UI - Close Sidebar' }



export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {

switch (action.type) {
  case 'UI - Open Sidebar':  //OPEN SIDEBAR
     return {
        ...state,
        sidemenuOpen: true,
      }

  case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
       }


   default:
      return state;
}

}