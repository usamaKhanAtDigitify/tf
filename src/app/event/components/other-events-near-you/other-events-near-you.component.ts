import { Component, OnInit } from '@angular/core';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-other-events-near-you',
  templateUrl: './other-events-near-you.component.html',
  styleUrls: ['./other-events-near-you.component.scss']
})
export class OtherEventsNearYouComponent implements OnInit {
  eventsList = [];
  eventCategory: any[] = [];
  selectedCategory = '';
  filteredEvents: any = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEventListApiHandler();
  }

  getEventListApiHandler() {
    this.eventService.getEventListApi().subscribe((resp: any) => {
      this.eventsList = resp.data;
      this.eventService.setEventList(this.eventsList)
      this.filteredEvents = this.eventsList;
      this.getEventCategoryHandler()
    });
  }
  
  getEventCategoryHandler() {
    this.eventService.getEventCategoriesList().subscribe((resp: any) => {
      this.eventCategory.push('All');
      resp.data.forEach((data: any) => {
        // filter category list according to event list data
        this.eventsList.forEach((event: any) => {
          if (event?.attributes?.event?.data?.attributes?.event_category?.data?.attributes?.name == data?.attributes?.name) {
            this.eventCategory.push(data?.attributes?.name);
          }
        });
      });
      this.eventCategory = [... new Set(this.eventCategory)]
    });
  }

  onSelectFilter(category: string) {
    this.selectedCategory = category;
    if (category == 'All')
      this.filteredEvents = this.eventsList;
    else
      this.filteredEvents = this.eventsList.filter((event: any) => event?.attributes?.event?.data?.attributes?.event_category?.data?.attributes?.name == category);
  }

  getDatesRange(startDate: string, endDate: string) {
    const date = new Date(new Date(startDate).getTime());
    const dates = [];
    while (date <= new Date(endDate)) {
      const dateString = String(new Date(date).toJSON().slice(0, 10).replace(/-/g, '-')) + " ";
      dates.push(dateString);
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }
}
