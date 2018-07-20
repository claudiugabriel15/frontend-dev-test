import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  public selectedUserId;

  users = [
    {
      id: '1',
      name: 'Joe Smith',
      number: '01556-605033'
    },
    {
      id: '2',
      name: 'Michael Adams',
      number: '09305-624185'
    },
    {
      id: '3',
      name: 'Joe Davis',
      number: '01608-065828'
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  openUserDetails(user: any) {
    if (user && user.id) {
      this.selectedUserId = user.id;
      setTimeout(() => {
        this.router.navigate(['secure/details', user.id]);
      });
    }
  }
}
