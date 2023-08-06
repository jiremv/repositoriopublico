import { Component, Input, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items?: Item[];
//  currentItem: Item = {};
  currentIndex = -1;
  name = '';
  message = '';

  @Input() viewMode = false;

  @Input() currentItem: Item = {
    name: '',
    description: ''
  };


  /*constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.retrieveItems();
  }*/

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveItems();
    if (!this.viewMode) {
      this.message = '';
      this.getIdItem(this.route.snapshot.params["id"]);
    }
  }


  retrieveItems(): void {
    this.itemService.getAllItems()
      .subscribe({
        next: (data) => {
          this.items = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveItems();
    this.currentItem = {};
    this.currentIndex = -1;
  }

  setActiveItem(item: Item, index: number): void {
    this.currentItem = item;
    this.currentIndex = index;
  }

  removeAllItems(): void {
    this.itemService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentItem = {};
    this.currentIndex = -1;

    this.itemService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.items = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
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

  editItem(item: Item, index: number): void {
    this.currentItem = item;
    this.currentIndex = index;
  }

  updateItem(): void {
    this.message = '';

    this.itemService.update(this.currentItem.id, this.currentItem)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Actualizaci&oacute;n satisfactoria!';
        },
        error: (e) => console.error(e)
      });
  }

  borrarItem(itemId: any): void {
  this.itemService.delete(itemId)
  .subscribe({
    next: (res) => {
      console.log(res);
      this.router.navigate(['/v1']);
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