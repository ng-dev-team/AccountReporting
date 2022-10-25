import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  groupList: any[] = ['AA', 'BB', 'CC'];
  accountData: any[] = [
    { AccountNumber: 111, group: 'AA' },
    { AccountNumber: 121, group: 'BB' },
    { AccountNumber: 131, group: 'CC' },
  ];
  emaidata: any[] = [
    {
      firstname: 'sachin',
      lastName: 'singh',
      emailId: 'sachin@gmail',
      accno: 111,
      section: 'to',
    },
    {
      firstname: 'suraj',
      lastName: 'yadav',
      emailId: 'suraj@gmail',
      accno: 121,
      section: 'cc',
    },
  ];
  filteraccountdata: any = this.accountData;
  filtertodata: any = [];
  filterccdata: any = [];
  constructor() {
    this.filteraccountdata = this.accountData;
    for (let j = 0; j < this.emaidata.length; j++) {
      if (this.emaidata[j].section == 'to') {
        this.filtertodata.push(this.emaidata[j]);
      } else {
        this.filterccdata.push(this.emaidata[j]);
      }
    }
  }
  onChange(event: any) {
    this.filteraccountdata = [];
    this.filtertodata = [];
    this.filterccdata=[];
    console.log(event.value);
    for (let i = 0; i < this.accountData.length; i++) {
      if (this.accountData[i].group == event.value) {
        this.filteraccountdata.push(this.accountData[i]);
        for (let j = 0; j < this.emaidata.length; j++) {
          if (
            this.emaidata[j].accno == this.accountData[i].AccountNumber &&
            this.emaidata[j].section == 'to'
          ) {
            this.filtertodata.push(this.emaidata[j]);
          } else if(this.emaidata[j].accno == this.accountData[i].AccountNumber &&
            this.emaidata[j].section == 'cc') {
            this.filterccdata.push(this.emaidata[j]);
          }
        }
      }
    }
  }
}
