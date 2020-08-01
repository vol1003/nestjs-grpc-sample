/* eslint-disable */
import { Metadata } from 'grpc';
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';


export interface HeroById {
  id: number;
}

export interface Hero {
  id: number;
  name: string;
}

export interface HeroesServiceController {

  findOne(request: HeroById, metadata?: Metadata): Promise<Hero> | Observable<Hero> | Hero;

}

export interface HeroesServiceClient {

  findOne(request: HeroById, metadata?: Metadata): Observable<Hero>;

}

export function HeroesServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['findOne'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('HeroesService', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('HeroesService', method)(constructor.prototype[method], method, descriptor);
    }
  }
}

export const HERO_PACKAGE_NAME = 'hero'
export const HEROES_SERVICE_NAME = 'HeroesService';