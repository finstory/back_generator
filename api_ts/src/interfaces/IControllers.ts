import express, { Request, Response } from "express";

// Define una interfaz para el cuerpo de la solicitud
interface MyRequestBody {
  campo1: [];
  campo2: number;
}

interface MyQueryParams {
  parametro1: string;
  parametro2: number;
}


interface MyRouteParams {
  id: string;
}

export interface MyRequest
  extends Request<MyRouteParams, {}, MyRequestBody, MyQueryParams> {}
