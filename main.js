import { crearPanSuperior } from './pan-superior.js';
import { crearPanInferior } from './pan-inferior.js';
import { crearLechuga } from './lechuga.js';
import { crearQueso } from './queso.js';
import { crearCarne } from './carne.js';
import { crearTomate } from './tomate.js';
import { crearqueso2 } from './queso2.js';
import { crearqueso3 } from './queso3.js';
import { crearqueso4 } from './queso4.js';
import { crearcebolla } from './cebolla.js';
import { crearbola1 } from './albondiga1.js';
import { crearbola2 } from './albondiga2.js';
import { crearbola3 } from './albondiga3.js';
import { crearplato } from './plato.js';
import { crearcarne1 } from './carne1.js';


function crearHamburguesa() {
    crearPanSuperior();
    crearLechuga();
    crearCarne();
    crearTomate();
    crearPanInferior();
    crearQueso();
    crearqueso2();
    crearqueso3();
    crearqueso4();
    crearcebolla();
    crearbola1();
    crearbola2();
    crearbola3();
    crearplato();
    crearcarne1();
 
}

crearHamburguesa();
