import { Loading } from './shared/models/function';
import { AppInitializationModule } from './app-initialization.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.moduel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './features/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProfileComponent } from './features/user/profile/profile.component';
import { HeadderComponent } from './core/headder/headder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailComponent } from './features/product/product-detail/product-detail.component';
import { DetailDataProductlistComponent } from './features/product/containers/detail-data-productlist/detail-data-productlist.component';
import { UiComponent } from './features/ui/ui/ui.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ProfileComponent,
    HeadderComponent,
    HomeComponent,
    ProductDetailComponent,
    DetailDataProductlistComponent,
    UiComponent
  ],
  imports: [
    BrowserModule,
    AppInitializationModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    Loading
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
