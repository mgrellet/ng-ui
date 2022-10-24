import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() {
  }

  recipes = [
    {id: 1, name: 'chocolate chip cookies', description: 'sugar, flour, chocolate chips, etc'},
    {id: 2, name: 'cookies', description: 'sugar, flour, vanilla'},
    {id: 3, name: 'cake', description: 'sugar, flour'},
  ]

  selectedRecipe: any;

  ngOnInit(): void {
  }

  onSelect(recipe: any): void {
    this.selectedRecipe = recipe;

  }
}
