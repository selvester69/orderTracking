import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Ensure HttpClientModule is imported
import { CustomerComponent } from './components/customer.component';

@NgModule({
  declarations: [
    // AppComponent,
    CustomerComponent, // Ensure this component is declared
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Ensure this is included for HTTP requests
  ],
  providers: [],
  bootstrap: [CustomerComponent], // Ensure this is set as the bootstrap component
})
export class AppModule {}
