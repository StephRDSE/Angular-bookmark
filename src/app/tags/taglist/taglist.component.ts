import { Component, OnInit } from '@angular/core';
import { Tag } from '../../core/tag';
import { TagService } from '../../tag.service';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.css']
})
export class TaglistComponent implements OnInit {

  tags: Tag[] = [];
  tag: Tag;
  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.refreshList();
  }
  refreshList() {
    this.tagService.getAll().subscribe( (taglist) => {
      console.log(taglist);
      this.tags = taglist;
    } );
  }


  deleteById(id) {
    console.log(this.tag);
    this.tagService.deleteById(id).subscribe( (tag: Tag) => {
      console.log('le tag est bien supprimé');
      this.refreshList();
    }, (err) => {
      console.log({err});
      this.refreshList();
    });
}
}
