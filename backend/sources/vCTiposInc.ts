import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostTiposInc{
 
    @Expose({ name: "Tip_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Tip_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Tip_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Tip_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Tip_Id no puede estar vacio'}}})
    Tip_Id: number;

    @Expose({ name: "Tip_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Tip_Nombre es obligatorio'}}})
    @MaxLength(45, { message: ()=>{ throw { status: 400, message: 'El parametro Tip_Nombre debe tener como máximo 45 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Tip_Nombre debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Tip_Nombre no puede estar vacio'}}})
    Tip_Nombre: string;

    constructor(Tip_Id: number, Tip_Nombre: string){
        this.Tip_Id = Tip_Id;
        this.Tip_Nombre = Tip_Nombre;
    }
}

export class validateQueryPutTiposInc{

    @Expose({ name: "idSelect" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idSelect es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idSelect debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idSelect no puede estar vacio'}}})
    idSelect: number;

    constructor(idSelect: number){
        this.idSelect = idSelect;
    }
}

export class validateBodyPutTiposInc{

    @Expose({ name: "Tip_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Tip_Nombre es obligatorio'}}})
    @MaxLength(45, { message: ()=>{ throw { status: 400, message: 'El parametro Tip_Nombre debe tener como máximo 45 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Tip_Nombre debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Tip_Nombre no puede estar vacio'}}})
    Tip_Nombre: string;

    constructor(Tip_Nombre: string){
        this.Tip_Nombre = Tip_Nombre;
    }
}

export class validateDeleteTiposInc{

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