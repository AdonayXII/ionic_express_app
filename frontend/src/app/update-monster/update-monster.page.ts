import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MonsterService } from '../services/monster.service';
import { PhotoService } from '../services/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-monster',
  templateUrl: './update-monster.page.html',
  styleUrls: ['./update-monster.page.scss'],
})
export class UpdateMonsterPage implements OnInit {

  id: number = 0;
  oldMonster: any = {}

  monsterForm: FormGroup;
  newMonsterForm: FormGroup;

  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private monsterService: MonsterService,
    private photoService: PhotoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.monsterForm = this.formBuilder.group({});
    this.newMonsterForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.newMonsterForm.reset();
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!

    console.log(this.id)

    this.monsterService.getMonsterById(this.id).subscribe((data) => {
      this.oldMonster = data
    })
    this.monsterForm = this.oldMonster;

    this.newMonsterForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })

  }

  ionViewWillEnter() {
    this.newMonsterForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = `http://localhost:8080/images/` + this.oldMonster.filename;
    this.newMonsterForm.controls['name'].setValue(this.oldMonster.name);
    this.newMonsterForm.controls['type'].setValue(this.oldMonster.type);
  }

  get errorControl() {
    return this.newMonsterForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async submitUpdatedForm() {
    this.isSubmitted = true;
    if (!this.newMonsterForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      } 
      this.monsterService.updateMonster(this.id, {
        name: this.newMonsterForm.value.name,
        type: this.newMonsterForm.value.type
      }, blob).subscribe(data => {
        console.log("Photo sent!");
        console.log("valores -> " + this.newMonsterForm.value)

        this.router.navigateByUrl("/list-monsters");
      })
    }
  }

}
