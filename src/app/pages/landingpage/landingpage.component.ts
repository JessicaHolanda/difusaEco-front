import { GithubService } from '../../service/github.service';
import { GithubUser } from '../../model/GithubUser';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/Member';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent implements OnInit {

  public gitUsers: GithubUser[] = [];
  public members: Member[] = [
    {
      github_user: 'deniseanjos',
      linkedin_url: 'https://www.linkedin.com/in/jessica-holanda33/',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis felis. Phasellus congue massa nisi, vel pellentesque urna cursus eget. Morbi dapibus tellus neque, a pretium justo blandit vel. Pellentesque at lacinia dolor, vitae pellentesque arcu. Curabitur sed eleifend turpis. Cras vitae risus tincidunt risus ultricies suscipit. Vivamus accumsan elit nec tortor accumsan blandit. Ut sapien mi, hendrerit a velit vel, tincidunt blandit dolor. Donec ornare lectus urna.',
    },
    {
      github_user: 'JessicaHolanda',
      linkedin_url: 'https://www.linkedin.com/in/jessica-holanda33/',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis felis. Phasellus congue massa nisi, vel pellentesque urna cursus eget. Morbi dapibus tellus neque, a pretium justo blandit vel. Pellentesque at lacinia dolor, vitae pellentesque arcu. Curabitur sed eleifend turpis. Cras vitae risus tincidunt risus ultricies suscipit. Vivamus accumsan elit nec tortor accumsan blandit. Ut sapien mi, hendrerit a velit vel, tincidunt blandit dolor. Donec ornare lectus urna.',
    },
    {
      github_user: 'marcoshakuro',
      linkedin_url: 'https://www.linkedin.com/in/jessica-holanda33/',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis felis. Phasellus congue massa nisi, vel pellentesque urna cursus eget. Morbi dapibus tellus neque, a pretium justo blandit vel. Pellentesque at lacinia dolor, vitae pellentesque arcu. Curabitur sed eleifend turpis. Cras vitae risus tincidunt risus ultricies suscipit. Vivamus accumsan elit nec tortor accumsan blandit. Ut sapien mi, hendrerit a velit vel, tincidunt blandit dolor. Donec ornare lectus urna.',
    },
    {
      github_user: 'scaziti',
      linkedin_url: 'https://www.linkedin.com/in/jessica-holanda33/',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis felis. Phasellus congue massa nisi, vel pellentesque urna cursus eget. Morbi dapibus tellus neque, a pretium justo blandit vel. Pellentesque at lacinia dolor, vitae pellentesque arcu. Curabitur sed eleifend turpis. Cras vitae risus tincidunt risus ultricies suscipit. Vivamus accumsan elit nec tortor accumsan blandit. Ut sapien mi, hendrerit a velit vel, tincidunt blandit dolor. Donec ornare lectus urna.',
    },
    {
      github_user: 'RuiCoders',
      linkedin_url: 'https://www.linkedin.com/in/jessica-holanda33/',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis felis. Phasellus congue massa nisi, vel pellentesque urna cursus eget. Morbi dapibus tellus neque, a pretium justo blandit vel. Pellentesque at lacinia dolor, vitae pellentesque arcu. Curabitur sed eleifend turpis. Cras vitae risus tincidunt risus ultricies suscipit. Vivamus accumsan elit nec tortor accumsan blandit. Ut sapien mi, hendrerit a velit vel, tincidunt blandit dolor. Donec ornare lectus urna.',
    },
  ];

  public gitUsersLoaded: boolean = false;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getGithubUser();
  }

  async getGithubUser() {
    try {
      let resp: any;
      for (let i in this.members) {
        resp = await this.githubService.getUser(this.members[i].github_user);
        this.members[i].github = resp;
      }
      this.gitUsersLoaded = true;
    } catch (e) {
      console.log(e.message);
    }
  }
}
