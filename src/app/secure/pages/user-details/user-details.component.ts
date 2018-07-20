import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  selectedUser: any;
  routeSubscription: any;

  // mock user details
  users = [
    {
      id: '1',
      city: 'Milan',
      country: 'Italy',
      address: 'Via Marcona, 9, 20129'
    },
    {
      id: '2',
      city: 'Berlin',
      country: 'Germany',
      address: 'Grosse Praesidenten Str. 73'
    },
    {
      id: '3',
      city: 'Madrid',
      country: 'Spain',
      address: 'Quevedo 22'
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      if (params.id) {
        this.selectedUser = this.users.find((user) => user.id === params.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}
