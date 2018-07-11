import { Bookmark } from './../../core/bookmark';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from '../../tag.service';
import { Tag } from '../../core/tag';

@Component({
  selector: 'app-tagform',
  templateUrl: './tagform.component.html',
  styleUrls: ['./tagform.component.css']
})
export class TagformComponent implements OnInit {

  tag: Tag ;

  constructor(private route: ActivatedRoute, private tagService: TagService, private router: Router) { }

  ngOnInit() {
    
    const id = this.route.snapshot.paramMap.get('id');

    if (id){
    this.tagService.getById(id).subscribe( (tag: Tag) => {
     this.tag = tag;
    });
  } else {
    this.tag = {
      label: '',
      author: null,
      bookmarks: null
    };
  }
  }

  onSubmit() {

    if (this.tag.id) {
    this.tagService.update(this.tag).subscribe( (tag: Tag) => {
      this.tag = tag;
      this.router.navigateByUrl('/tags');
    });
  } else {
     this.tagService.create(this.tag).subscribe( (tag: Tag) => {
        this.tag = tag;
        this.router.navigateByUrl('/tags');
      });

  }
  }
}
