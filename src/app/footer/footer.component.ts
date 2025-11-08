import { Component } from '@angular/core';
import { ChildComponent } from "../parent/child/child.component";

@Component({
  selector: 'app-footer',
  imports: [ChildComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

user = "saxeli"


}
