/* eslint-disable prettier/prettier */
import {IsNumber , IsNotEmpty} from "class-validator"

export class xyDto{
    @IsNotEmpty()
    @IsNumber()
    x : bigint;

    @IsNotEmpty()
    @IsNumber()
    y : bigint;
}