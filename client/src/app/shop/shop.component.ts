import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/Models/product';
import { IBrand } from '../shared/Models/brand';
import { ITypes } from '../shared/Models/productType';
import { ShopParams} from '../shared/Models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search', { static: false }) sarchTerm: ElementRef;
  products: IProduct[];
  brands: IBrand[];
  types: ITypes[];
  shopParams = new ShopParams();
  totalCount: number;
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price : Low to High', value: 'priceAsc' },
    { name: 'Price : High to Low ', value: 'priceDesc' }];


  constructor(private shopService: ShopService) { }


  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe( response => {
      this.products = response.data;
      this.shopParams.pageNumber = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
      this.totalCount = response.count;
    },
    (error) => {
      console.log(error);
    }
  );
  }
  getBrands(){
    this.shopService.getBrands().subscribe( response => {
      this.brands = [{ id: 0, name: 'all' }, ...response];
    },
    (error) => {
      console.log(error);
    }
  );
  }

  getTypes(){
    this.shopService.getTypes().subscribe( response => {
      this.types = [{ id: 0, name: 'all' }, ...response];
    },
    (error) => {
      console.log(error);
    }
  );
  }
  onBrandSelected(brandId: number){
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onTypeSelected(typeId: number){
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(sort: string){
    this.shopParams.sort = sort;
    this.getProducts();
  }
  onPageChanged(event: any){
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }
  onSearch(){
    this.shopParams.search = this.sarchTerm.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onReset(){
    this.sarchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }
}
