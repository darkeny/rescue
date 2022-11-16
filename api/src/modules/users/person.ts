import { User } from "../../types";
import {v4 as uuid} from 'uuid'

export class Person implements User{
    constructor(
        readonly name: string,
        readonly email: string,
        readonly id: string = uuid()
    ){}
}