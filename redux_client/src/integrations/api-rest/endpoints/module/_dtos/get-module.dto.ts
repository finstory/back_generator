//IMPORTS NEEDED:
import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';

//<IMPORTS>

//<REQUEST TYPES>

class Params {
    name: string;
};

class Query {
    lastName: string;
};

class Body {
    moduleName: string;
    route: string[];
    newRoute: string[];
};



type ResponseBody = string;

//BODY TO SEND:

const body = {} as Body;


//<EXPORTS>
export const parameters = { Params, Query, Body };