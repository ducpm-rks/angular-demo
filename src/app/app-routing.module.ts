import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UserDataResolver } from './core/resolvers/user-data.resolver';

import { ProtectedComponent } from './protected.component';
import { UserProfileComponent } from './user-profile.component';
import { AppComponent } from './app.component';
import { TestLifecycleComponent } from './test-lifecycle.components';
import { TestFeatureComponent } from './test-feature.component';
import { PassDataComponent } from './test-pass-data-between-component.component';
import { TestReduxComponent } from './test-ngrx.module';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'lifecycle', component: TestLifecycleComponent },
  {
    path: 'protected', // Changed path for clarity
    component: ProtectedComponent,
    canActivate: [AuthGuard], // Apply the guard
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    resolve: {
      user: UserDataResolver, // Apply the resolver
    },
  },
  {
    path: 'feature',
    component: TestFeatureComponent,
  },
  {
    path: 'pass-data',
    component: PassDataComponent,
  },
  {
    path: 'test-redux',
    component: TestReduxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
