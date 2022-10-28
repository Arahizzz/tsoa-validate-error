import {
    Body,
    Controller,
    Post,
    Route,
  } from "tsoa";
  
  interface Request {
    name: string;
  }
  
  @Route("")
  export class TestController extends Controller {
    @Post("test")
    public async test(@Body() request: Request): Promise<string> {
      return "ok";
    }
  }
  