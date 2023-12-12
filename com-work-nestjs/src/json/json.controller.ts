/* eslint-disable prettier/prettier */
import { JsonService } from "./json.service"
import { Body, Controller, Post, Res, Response } from "@nestjs/common";
import { xyDto } from "src/dto/xyDto";


@Controller()
export class JsonController {
    constructor(private readonly jsonSer : JsonService){}

    @Post()
    sendXy(@Body() data: xyDto): {z : bigint} {
        // console.log(res);
        return this.jsonSer.sendXy(data.x , data.y);
    }
}