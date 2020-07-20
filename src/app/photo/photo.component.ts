import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../service/photo/photo.service';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(public photoservice:PhotoService) { }

  ngOnInit() {
  }

}
