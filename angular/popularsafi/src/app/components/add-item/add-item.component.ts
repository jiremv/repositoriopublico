import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  item: Item = {
    name: '',
    description: ''
  };
  submitted = false;

  constructor(private itemService: ItemService) { }

  saveItem(): void {
    const data = {
      name: this.item.name,
      description: this.item.description
    };

    this.itemService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newItem(): void {
    this.submitted = false;
    this.item = {
      name: '',
      description: ''
    };
  }

}