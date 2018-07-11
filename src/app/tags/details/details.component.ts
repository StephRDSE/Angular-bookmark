import { Tag } from './../../core/tag';
import { TagService } from './../../tag.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  tag: Tag;
  constructor(private route: ActivatedRoute, private tagService: TagService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.tagService.getById(id).subscribe( (tag: Tag) => {
      console.log('tag : ', tag);
      this.tag = tag;
    });

  }

}
