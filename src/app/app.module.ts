import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ToastModule } from 'primeng/toast';
import { MessageService } from "primeng/api";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarModule } from "./modules/navbar/navbar.module";
import { TokenInterceptor} from "./interceptors/token.interceptor";
import { MatProgressBarModule } from '@angular/material/progress-bar';



// 1. Создать глобальный сервис GlobalAuth
// 1.1 get isLogin: получать из ls токен и возвращать true или false
// 2. Создать AuthGuard
// 2.1 Подключаете AuthGuard в app-routing.module
// 2.2 Подключаете сервис GlobalAuth и в методе CanActivate вызываете геттер isLogin и если оне вернет true то возвращаете true если false то редирект на логин
// 3. В компоненте login в ngOnInit проверить не залогинен ли пользователь через GlobalAuth и геттер isLogin

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    AngularFontAwesomeModule,
    NavbarModule,
    MatProgressBarModule
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
