import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentItem: Item = {
    name: '',
    description: ''
  };
  
  message = '';

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getIdItem(this.route.snapshot.params["id"]);
    }
  }

    getIdItem(id: string): void {
      this.itemService.get(id)
        .subscribe({
          next: (data) => {
            this.currentItem = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }

    updateItem(): void {
      this.message = '';

      this.itemService.update(this.currentItem.id, this.currentItem)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'This item was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    }

    deleteItem(): void {
      this.itemService.delete(this.currentItem.id)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/v1']);
          },
          error: (e) => console.error(e)
        });
    }

}