import BaseController from "./BaseController";


class PlatController extends BaseController {

    constructor() {
        super('mrhz0b3no7w4apl', 'plats');
    }

    async getCarta() {
        let carta = await this.getAll();
        return carta;
    }

    async getMenu() {
        let menu = await this.getAll();
        let platsMenu = menu.list;
        // ens quedem només els que tenene menu=true
        platsMenu = platsMenu.filter(e => e.menu); 
        menu.list = platsMenu;
        return menu;
    }

}


export default PlatController;