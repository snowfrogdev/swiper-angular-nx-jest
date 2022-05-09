import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy, Component, NgModule,
  ViewChild
} from '@angular/core';
import SwiperCore, { Virtual } from 'swiper';
import { SwiperComponent, SwiperModule } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Virtual]);

@Component({
  selector: 'swiper-angular-nx-jest-carousel',
  template: `
    <swiper #swiper [virtual]="true">
      <ng-template swiperSlide>Slide 1</ng-template>
      <ng-template swiperSlide>Slide 2</ng-template>
      <ng-template swiperSlide>Slide 3</ng-template>
      <ng-template swiperSlide>Slide 4</ng-template>
      <ng-template swiperSlide>Slide 5</ng-template>
      <ng-template swiperSlide>Slide 6</ng-template>
      <ng-template swiperSlide>Slide 7</ng-template>
    </swiper>
    <button (click)="slidePrev()">Prev slide</button>
    <button (click)="slideNext()">Next slide</button>
  `,
  styleUrls: ['./carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
   @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  slideNext(){
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(100);
  }
}

@NgModule({
  imports: [CommonModule, SwiperModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
})
export class CarouselComponentModule {}
