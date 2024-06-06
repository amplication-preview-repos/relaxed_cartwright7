import * as graphql from "@nestjs/graphql";
import { MainPageService } from "./mainpage.service";

export class MainPageResolver {
  constructor(protected readonly service: MainPageService) {}
}
