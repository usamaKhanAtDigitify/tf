import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuickDonationComponent } from "./quick-donation.component";

@NgModule({
    declarations: [
      QuickDonationComponent
    ],
    exports:[
        QuickDonationComponent
    ],
    imports: [
        CommonModule
    ] 
})
export class QuickDonationModule {}