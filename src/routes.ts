import {UserController} from "./controller/UserController";
import { EntidadController } from './controller/EntidadController';
import { LocalidadController } from './controller/LocalidadController';
import "reflect-metadata";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/entidad",
    controller: EntidadController,
    action: "all"
},
{
    method: "get",
    route: "/localidad",
    controller: LocalidadController,
    action: "all"
},
{
    method: "post",
    route: "/entidad",
    controller: EntidadController,
    action: "save"
},
{
    method: "post",
    route: "/entidadUpdate",
    controller: EntidadController,
    action: "update"
}
];