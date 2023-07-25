import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostArea{
 
    @Expose({ name: "A_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro A_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro A_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro A_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro A_Id no puede estar vacio'}}})
    A_Id: number;

    @Expose({ name: "A_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro A_Nombre es obligatorio'}}})
    @MaxLength(45, { message: ()=>{ throw { status: 400, message: 'El parametro A_Nombre debe tener como máximo 45 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro A_Nombre debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro A_Nombre no puede estar vacio'}}})
    A_Nombre: string;

    @Expose({ name: "A_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro A_Descripcion es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro A_Descripcion debe tener como máximo 100 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro A_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro A_Descripcion no puede estar vacio'}}})
    A_Descripcion: string;

    constructor(A_Id: number, A_Nombre: string, A_Descripcion: string){
        this.A_Id = A_Id;
        this.A_Nombre = A_Nombre;
        this.A_Descripcion = A_Descripcion;
    }
}

export class validateQueryPutArea{

    @Expose({ name: "idSelect" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idSelect es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idSelect debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idSelect no puede estar vacio'}}})
    idSelect: number;

    constructor(idSelect: number){
        this.idSelect = idSelect;
    }
}

export class validateBodyPutArea{

    @Expose({ name: "A_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro A_Nombre es obligatorio'}}})
    @MaxLength(45, { message: ()=>{ throw { status: 400, message: 'El parametro A_Nombre debe tener como máximo 45 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro A_Nombre debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro A_Nombre no puede estar vacio'}}})
    A_Nombre: string;

    @Expose({ name: "A_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro A_Descripcion es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro A_Descripcion debe tener como máximo 100 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro A_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro A_Descripcion no puede estar vacio'}}})
    A_Descripcion: string;

    constructor(A_Nombre: string, A_Descripcion: string){
        this.A_Nombre = A_Nombre;
        this.A_Descripcion = A_Descripcion;
    }
}

export class validateDeleteArea{

  @Expose({ name: "IdDelete" })
  @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete es obligatorio'}}})
  @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete debe ser positivo'}}})
  @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro IdDelete debe ser un numero'}}})
  @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete no puede estar vacio'}}})
  IdDelete: number;

  constructor(IdDelete: number){
      this.IdDelete = IdDelete;
  }
}