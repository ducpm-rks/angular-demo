import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptor } from './core/interceptors/auth-header.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { ProtectedComponent } from './protected.component';
import { UserProfileComponent } from './user-profile.component';
import { TestLifecycleComponent } from './test-lifecycle.components';
import { TestFeatureComponent } from './test-feature.component';
import { PassDataComponent } from './test-pass-data-between-component.component';
import { ParentComponent } from './share-information-between-component/parent-child-component/parent.component';
import { ChildComponent } from './share-information-between-component/parent-child-component/child.component';
import { ReceiverComponent } from './share-information-between-component/shared-service-component/receiver.component';
import { SenderComponent } from './share-information-between-component/shared-service-component/sender.component';
import { MessageService } from './share-information-between-component/shared-service-component/mesage.service';
import { ViewParentComponent } from './share-information-between-component/view-child-component/view-parent.component';
import { ViewChildComponent } from './share-information-between-component/view-child-component/view-child.component';
import { TestReduxComponent } from './test-ngrx.module';
import { CounterComponent } from './ngrx-counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx-counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent,
    ProtectedComponent,
    UserProfileComponent,
    TestLifecycleComponent,
    TestFeatureComponent,
    PassDataComponent,
    ParentComponent,
    ChildComponent,
    ReceiverComponent,
    SenderComponent,
    ViewParentComponent,
    ViewChildComponent,
    TestReduxComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
