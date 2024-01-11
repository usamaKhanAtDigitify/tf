import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram-story',
  templateUrl: './instagram-story.component.html',
  styleUrls: ['./instagram-story.component.scss'],
})
export class InstagramStoryComponent implements OnInit {
  ngOnInit(): void {
    const embed = window.flcklr.Embeds.create(
      window.flcklr.EmbedConfigs['18cd38942b30b44f51ec2e35983cdb22']
    );
  }
}
