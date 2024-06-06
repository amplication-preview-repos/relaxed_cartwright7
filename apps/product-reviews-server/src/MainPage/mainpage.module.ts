import { Module } from "@nestjs/common";
import { MainPageService } from "./mainpage.service";
import { MainPageController } from "./mainpage.controller";
import { MainPageResolver } from "./mainpage.resolver";

@Module({
  controllers: [MainPageController],
  providers: [MainPageService, MainPageResolver],
  exports: [MainPageService],
})
export class MainPageModule {}
