import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {

  item: Item = {
    name: '',
    description: ''
  };
  submitted = false;

  constructor(private itemService: ItemService) { }

  updateItem(): void {
    const data = {
      name: this.item.name,
      description: this.item.description
    };

    // Assuming you have an "id" property for the item you want to update
    const itemId = this.item.id;

    this.itemService.update(itemId, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  editAnotherItem(): void {
    this.submitted = false;
    this.item = {
      name: '',
      description: ''
    };
  }

}
