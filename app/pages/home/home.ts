import {Page} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers : [PeopleService]
})
export class HomePage {
	public people : any;

  	constructor(public peopleService: PeopleService) {
			this.loadPeople();
  	}

  	loadPeople(){
  		this.peopleService.load().then( data => {
				this.people = data;
  		})
  	};
}
