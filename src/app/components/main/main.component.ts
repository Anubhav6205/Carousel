import { Component } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  image = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=900&t=st=1697041491~exp=1697042091~hmac=b4262f2b7067e9286335b6be3cab6c40320bbb678ff8b0cbb1fd5e9a5747cf82',
    'https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=900&t=st=1697041493~exp=1697042093~hmac=e70b59a4c97cc3eb920ce6b22aabf1f761fe125d043841ba739c9c90518f8c53',
    'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1697041535~exp=1697042135~hmac=c7fa02e319505ca4bf7670e1c948de7a3c5ed67acaf4b33302b63dc134766b22',
    'https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?w=900&t=st=1697041499~exp=1697042099~hmac=98b02849faf7fa97c95899ba924cba4dec111769873b4d985951130646d2aa1a',
  ];
  currIndex=0;
  imageOpacity=1;

 

  imageSrc=this.image[this.currIndex];
  nextImage(){
    console.log("next image");
    this.imageOpacity=0.5;

    

    setTimeout(()=>{
      this.imageOpacity=1;
      this.currIndex=this.currIndex+1 >2 ? 0 : this.currIndex+1;
      this.imageSrc=this.image[this.currIndex]
  

    },500)
    
  }

  prevImage(){
    console.log("prev image");
    this.imageOpacity=0.5;

    setTimeout(()=>{
      this.imageOpacity=1;
      this.currIndex=this.currIndex-1 <0? 2 : this.currIndex-1;
      this.imageSrc=this.image[this.currIndex]

    },500)
  }
}
