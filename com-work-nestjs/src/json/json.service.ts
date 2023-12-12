/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class JsonService {

    sendXy(x : bigint , y : bigint){
        return {z : x * y};
    }
}
