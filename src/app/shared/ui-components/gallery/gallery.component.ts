import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryList: any[] = [
    'assets/images/gallery-image-1.png',
    'assets/images/gallery-image-2.png',
    'assets/images/gallery-image-3.png',
    'assets/images/gallery-image-4.png',
    
    //'assets/images/gallery-image-1.png',
    //'assets/images/gallery-image-3.png',
    //'assets/images/gallery-image-2.png',
  ];

  currentDisplayList: any[] = [];
  visitedImageList: any[] = [];
  currentImage = {
    indexNumber: 1,
    imageUrl: this.galleryList[0]
  };

  isMoveRight: boolean = false;

  constructor(){}

  ngOnInit(): void {
    this.currentDisplayList = this.galleryList.slice(1, 4);
    //this.currentGallery(false)
  }

  currentGallery(isMoveRight: boolean){
    //let tempArray: any[] = [];
   // let tempArrayCounter = 0;

   // this.currentDisplayList = this.currentDisplayList.shift()//this.galleryList.slice(this.currentImage.indexNumber + 1, 4);


    // for(let counter = this.currentImage.indexNumber + 1; counter < this.galleryList.length; counter++){
    //   //if(counter < this.galleryList.length){
    //     tempArray[tempArrayCounter] = this.galleryList[counter];
    //   //}else{
    //   //  tempArray[tempArrayCounter] = this.galleryList[tempArrayCounter];
    //   //}
    //   tempArrayCounter++;
    // }

    if(isMoveRight){
    if(this.currentImage.indexNumber < this.galleryList.length){
      this.currentImage.indexNumber++;
      this.currentImage.imageUrl = this.currentDisplayList.shift();
      this.visitedImageList.push(this.currentImage.imageUrl);
    }else{
     // this.currentImage.indexNumber = 0;
      //this.currentImage.imageUrl = tempArray[0];
    }
  }
    //this.currentDisplayList = tempArray;
   // this.isMoveRight = isMoveRight;

    // this.galleryList.map((image, index) => {
    //   if(index <= 4)
    //     tempArray.push(image);
    // });
    // if(isMoveRight){
    //   setTimeout(() => {
    //     this.isMoveRight = false;
    //   }, 1000);
    //}
  }

  moveRight(){
    this.currentGallery(true);
  }

  moveLeft(){
    
      if(this.currentImage.indexNumber > 1){
        this.currentImage.indexNumber--;
        this.currentImage.imageUrl = this.visitedImageList.pop();
        this.currentDisplayList.push(this.currentImage.imageUrl);
      }else{
       // this.currentImage.indexNumber = 0;
        //this.currentImage.imageUrl = tempArray[0];
      }
  }
}
