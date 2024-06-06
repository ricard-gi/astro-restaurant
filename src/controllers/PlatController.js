import BaseController from "./BaseController";


class PlatController extends BaseController {

    constructor() {
        super('mrhz0b3no7w4apl', 'plats');
    }

    async getCarta() {
        let carta = await this.getAll();
        //carta = carta.list;
        // extraient la foto, només agafem la primera
        carta = carta.map(e => {
            let foto = (e.foto && e.foto[0].signedUrl) ?  e.foto[0].signedUrl : '';
            delete e.foto;
            e.foto = foto;
            return e;
        });
        return carta;
    }

    async getMenu() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene menu=true
        return menu.filter(e => e.menu); 
    }

}


export default PlatController;