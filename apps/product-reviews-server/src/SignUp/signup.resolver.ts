import * as graphql from "@nestjs/graphql";
import { SignUpService } from "./signup.service";

export class SignUpResolver {
  constructor(protected readonly service: SignUpService) {}
}
