import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.scss']
})
export class DadoComponent implements OnInit{
  public isClick:boolean = false;
  public image1 :string = '';
  public image2 :string = '';
  public image3 :string = '';
  public listNumberRandom: number[] = []
  @ViewChild('targetElement') targetElement!: ElementRef;

  constructor() {}
  

  ngAfterViewInit(): void {
    this.listenToAnimationEnd();
  }

  ngOnDestroy(): void {
    this.targetElement.nativeElement.removeEventListener('animationend');
  }

  ngOnInit(): void {
    this.image1 = '../../assets/img/1.PNG';
    this.image2 = '../../assets/img/1.PNG';
    this.image3 = '../../assets/img/1.PNG';
  }

  listenToAnimationEnd(): void {
    this.targetElement.nativeElement.addEventListener('animationend', () => {
        console.log('animation ended');
        this.isClick = false;
    })
  }

  public handleClick() {
    this.listNumberRandom = [];
    this.isClick = true;
    const limit = 3;
    for (let i = 1; i<=limit; i++) {
      const number: number = Math.floor(Math.random() * (6-1 +1) +1);
      this.listNumberRandom.push(number);
    }
    this.image1 = '../../assets/img/'+this.listNumberRandom[0]+'.PNG';
    this.image2 = '../../assets/img/'+this.listNumberRandom[1]+'.PNG';
    this.image3 = '../../assets/img/'+this.listNumberRandom[2]+'.PNG';

  }

}
