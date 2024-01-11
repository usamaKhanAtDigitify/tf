import { NgModule } from "@angular/core";
import { MainBannerComponent } from "./main-banner.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
      MainBannerComponent
    ],
    exports:[
        MainBannerComponent
    ],
    imports: [
        CommonModule
    ] 
})
export class MainBannerModule {}