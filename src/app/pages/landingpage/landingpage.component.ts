import { GithubService } from '../../service/github.service';
import { GithubUser } from '../../model/GithubUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  public gitUsers: GithubUser[] = [];
  public members: string[] = ['deniseanjos', 'JessicaHolanda', 'marcoshakuro', 'scaziti','RuiCoders']
  public gitUsersLoaded: boolean = false;

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.getGithubUser();
  }

  async getGithubUser(){
    try{
      let resp:any;
      for(let i in this.members){
        console.log(this.members[i])
        resp = await this.githubService.getUser(this.members[i])
        this.gitUsers.push(resp)
      }
      this.gitUsersLoaded = true;
    } catch(e) {
      console.log(e.message)
    }
  }

}
