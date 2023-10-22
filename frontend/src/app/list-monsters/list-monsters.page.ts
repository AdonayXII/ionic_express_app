import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonsterService } from '../services/monster.service';

@Component({
  selector: 'app-list-monsters',
  templateUrl: './list-monsters.page.html',
  styleUrls: ['./list-monsters.page.scss'],
})
export class ListMonstersPage implements OnInit {

  monsters: any = [];

  constructor(private monsterService: MonsterService, private router: Router) { }

  ngOnInit() { }

  ionViewDidEnter(){
    this.getAllMonsters();
  }

  getAllMonsters() {
    this.monsterService.getMonsters().subscribe(mons => {
      console.log(mons);
      this.monsters = mons;
    })
  }

  addMonster(){
    this.router.navigateByUrl("/add-monster");
  }

  deleteMonster(id: number){
    console.log(id)
    this.monsterService.deleteMonster(id).subscribe(() => {
      this.getAllMonsters()
    })
  }

  updateMonster(id: number){
    this.router.navigateByUrl("/update-monster/"+id);
  }
}
