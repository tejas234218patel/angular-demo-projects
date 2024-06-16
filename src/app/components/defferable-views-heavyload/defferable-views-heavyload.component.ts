import { Component } from '@angular/core';
import { HeavyloadComponent } from "../heavyload/heavyload.component";

@Component({
    selector: 'app-defferable-views-heavyload',
    standalone: true,
    templateUrl: './defferable-views-heavyload.component.html',
    styleUrl: './defferable-views-heavyload.component.css',
    imports: [HeavyloadComponent]
})
export class DefferableViewsHeavyloadComponent {

}
