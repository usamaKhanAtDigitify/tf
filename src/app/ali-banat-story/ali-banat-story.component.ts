import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ali-banat-story',
  templateUrl: './ali-banat-story.component.html',
  styleUrls: ['./ali-banat-story.component.scss']
})
export class AliBanatStoryComponent implements OnInit {

  bannerObject: any = {};
  legacyProjectData = {
      mainHeading: 'Create Your Own Legacy Project',
      subHeading: 'Chose a legacy project to build on behalf of a loved one you’ve lost, or for your own akhirah.',
      Icons: [
        {
          icon: 'assets/images/tap.png',
          title: 'Water Well',
          description: 'Water is life. give the gift of water to those desperately in need'
        },
        {
          icon: 'assets/images/book.png',
          title: 'School classroom',
          description: 'Education is key to a better future. Give generations a better chance in life.'
        },
        {
          icon: 'assets/images/mosque_icon.png',
          title: 'Build a mosque',
          description: 'Provide muslims with a clean and safe place to pray. get rewarded for every act of worship taking place there.'
        }
      ]
    };

  constructor(){}

  ngOnInit(): void {
      this.bannerObject.page = 'storypage';    
      this.bannerObject.data = ['https://www.youtube.com/watch?v=C88Y5gRTQvc'];    
  }
}
