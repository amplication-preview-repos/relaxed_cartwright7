import { Module } from "@nestjs/common";
import { SignUpService } from "./signup.service";
import { SignUpController } from "./signup.controller";
import { SignUpResolver } from "./signup.resolver";

@Module({
  controllers: [SignUpController],
  providers: [SignUpService, SignUpResolver],
  exports: [SignUpService],
})
export class SignUpModule {}
