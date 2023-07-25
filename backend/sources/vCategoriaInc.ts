import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostCategoriaInc{
 
    @Expose({ name: "Cat_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Cat_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Cat_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Cat_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Cat_Id no puede estar vacio'}}})
    Cat_Id: number;

    @Expose({ name: "Cat_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Cat_Nombre es obligatorio'}}})
    @MaxLength(45, { message: ()=>{ throw { status: 400, message: 'El parametro Cat_Nombre debe tener como máximo 45 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Cat_Nombre debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Cat_Nombre no puede estar vacio'}}})
    Cat_Nombre: string;

    constructor(Cat_Id: number, Cat_Nombre: string){
        this.Cat_Id = Cat_Id;
        this.Cat_Nombre = Cat_Nombre;
    }
}

export class validateQueryPutCategoriaInc{

    @Expose({ name: "idSelect" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idSelect es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idSelect debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idSelect no puede estar vacio'}}})
    idSelect: number;

    constructor(idSelect: number){
        this.idSelect = idSelect;
    }
}

export class validateBodyPutCategoriaInc{

    @Expose({ name: "Cat_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Cat_Nombre es obligatorio'}}})
    @MaxLength(45, { message: ()=>{ throw { status: 400, message: 'El parametro Cat_Nombre debe tener como máximo 45 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Cat_Nombre debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Cat_Nombre no puede estar vacio'}}})
    Cat_Nombre: string;

    constructor(Cat_Nombre: string){
        this.Cat_Nombre = Cat_Nombre;
    }
}

export class validateDeleteCategoriaInc{

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