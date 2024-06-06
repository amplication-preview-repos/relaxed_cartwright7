import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SignUpService } from "./signup.service";

@swagger.ApiTags("signUps")
@common.Controller("signUps")
export class SignUpController {
  constructor(protected readonly service: SignUpService) {}
}
