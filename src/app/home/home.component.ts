import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AnimesService } from '../animes.service';
import { Anime } from '../Interfaces/anime.inteface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})

export class HomeComponent implements OnInit {
animelist: Anime[] = []
configurePage = { limit: 100, q: 'one', fields: '' }
constructor(private service:AnimesService) {}
beforeFilter: Anime[] = []
searchInput = ''

ngOnInit(): void{
  this.getAnimes(this.configurePage)

}
getAnimes(configurePage:{ limit:number, q:string, fields:string}){
this.service.getAnimes(configurePage).subscribe((res)=>{
this.animelist = res.data
this.beforeFilter = this.animelist;
})

}
pesquisar(value: string){
  console.log(value)
  if(!value){
    this.animelist = this.beforeFilter;
    return
  }
  const filter = this.animelist.filter((valor,index,array)=>{
    return valor.node.title.toUpperCase().includes(value.toUpperCase())
  })
  this.animelist = filter
}
getImage(value: Anime){
  return `url(${value.node.main_picture.medium})`
}

}

