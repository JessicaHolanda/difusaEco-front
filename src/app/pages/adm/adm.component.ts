import { Component, OnInit } from '@angular/core';
import { GithubUser } from 'src/app/model/GithubUser';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  public gitUsers: GithubUser[] = [];
  public members: string[] = ['deniseanjos', 'JessicaHolanda', 'marcoshakuro', 'scaziti','RuiCoders']
  public gitUsersLoaded: boolean = false;

  constructor(
    private githubService: GithubService
  ) { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
