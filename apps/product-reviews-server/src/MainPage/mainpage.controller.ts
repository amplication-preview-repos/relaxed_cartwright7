import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MainPageService } from "./mainpage.service";

@swagger.ApiTags("mainPages")
@common.Controller("mainPages")
export class MainPageController {
  constructor(protected readonly service: MainPageService) {}
}
