import { NgModule } from '@angular/core';
import { 
  PersonalInfoComponent, 
  ProfileAccessibilityComponent 
} from './profile-setup';

@NgModule({
  declarations: [
    PersonalInfoComponent,
    ProfileAccessibilityComponent
  ],
  imports: [],
  exports: [
    PersonalInfoComponent,
    ProfileAccessibilityComponent
  ]
})
export class ProfileModule {}