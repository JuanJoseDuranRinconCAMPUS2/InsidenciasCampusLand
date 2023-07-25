var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches } from 'class-validator';
export class validatePostCategoriaInc {
    constructor(Cat_Id, Cat_Nombre) {
        this.Cat_Id = Cat_Id;
        this.Cat_Nombre = Cat_Nombre;
    }
}
__decorate([
    Expose({ name: "Cat_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Cat_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Cat_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Cat_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Cat_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostCategoriaInc.prototype, "Cat_Id", void 0);
__decorate([
    Expose({ name: "Cat_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Cat_Nombre es obligatorio' }; } }),
    MaxLength(45, { message: () => { throw { status: 400, message: 'El parametro Cat_Nombre debe tener como máximo 45 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s]+$/, { message: () => { throw { status: 400, message: 'El parametro Cat_Nombre debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Cat_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostCategoriaInc.prototype, "Cat_Nombre", void 0);
export class validateQueryPutCategoriaInc {
    constructor(idSelect) {
        this.idSelect = idSelect;
    }
}
__decorate([
    Expose({ name: "idSelect" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idSelect es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idSelect debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idSelect no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutCategoriaInc.prototype, "idSelect", void 0);
export class validateBodyPutCategoriaInc {
    constructor(Cat_Nombre) {
        this.Cat_Nombre = Cat_Nombre;
    }
}
__decorate([
    Expose({ name: "Cat_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Cat_Nombre es obligatorio' }; } }),
    MaxLength(45, { message: () => { throw { status: 400, message: 'El parametro Cat_Nombre debe tener como máximo 45 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s]+$/, { message: () => { throw { status: 400, message: 'El parametro Cat_Nombre debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Cat_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutCategoriaInc.prototype, "Cat_Nombre", void 0);
export class validateDeleteCategoriaInc {
    constructor(IdDelete) {
        this.IdDelete = IdDelete;
    }
}
__decorate([
    Expose({ name: "IdDelete" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro IdDelete es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro IdDelete debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro IdDelete debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro IdDelete no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateDeleteCategoriaInc.prototype, "IdDelete", void 0);
