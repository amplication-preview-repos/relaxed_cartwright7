import * as graphql from "@nestjs/graphql";
import { AdminService } from "./admin.service";

export class AdminResolver {
  constructor(protected readonly service: AdminService) {}
}
