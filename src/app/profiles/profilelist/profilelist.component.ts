import { ProfilesService } from './../../profiles.service';
import { Component, OnInit } from '@angular/core';
import { Author } from '../../core/author';

@Component({
  selector: 'app-profilelist',
  templateUrl: './profilelist.component.html',
  styleUrls: ['./profilelist.component.css']
})
export class ProfilelistComponent implements OnInit {

author: Author = {
  firstName: '',
  lastName: ''
};

  constructor(private profilesService: ProfilesService) { }

  ngOnInit() {
  }
create() {
  this.profilesService.create(this.author).subscribe( () => {
    console.log('créé');
    this.author = this.author;
  }, (err) => {
    console.log('error', err);
  });
}
}
