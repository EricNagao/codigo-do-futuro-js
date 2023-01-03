import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from "../shared/SharedModule";
import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { AreaLogadaComponent } from './area-logada.component';
import { AppModule } from "../app.module";


@NgModule({
    declarations: [
        AreaLogadaComponent,
    ],
    imports: [
        CommonModule,
        AreaLogadaRoutingModule,
        AppModule,
        
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class AreaLogadaModule { }