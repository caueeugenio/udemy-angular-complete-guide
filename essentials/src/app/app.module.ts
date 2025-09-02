import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent], // normalmente costuma ser apenas um pois desenvolvemos pensnado em uma arvore de componentes, e o AppComponent seria a raiz.
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
