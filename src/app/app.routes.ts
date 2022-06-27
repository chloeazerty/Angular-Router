import{Routes,} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes =[
{ 
  path: 'sign-up', 
  component: SignUpComponent
},

{ 
    path: 'user', 
    component: UserProfileComponent 
},

{ 
    path: '', redirectTo: 'sign-up', pathMatch: 'full'
}

]

export {ROUTES};
