import { Router, Request, Response } from "express";
import { verificarToken } from '../middelwares/autentificacion';
import { Plan } from "../modelos/planes";


const planRutas = Router();



// Crear plan
planRutas.post("/crear",verificarToken, (req: Request, res: Response) => {
    const plan = {
        precio:req.body.precio,
        descripcion:req.body.descripcion,
        paginas:req.body.paginas,
        cantidadProductos:req.body.cantidadProductos,
        tipo:req.body.tipo
    };

  // Grabar plan en Base de Datos
    Plan.create(plan)
    .then((planDB) => {
        res.json({
        ok: true,
        plan: planDB,
        });
    })
    .catch((err) => {
        res.json({
        ok: false,
        err,
        });
    });
});


// Crear plantilla
planRutas.post('/', (req: any, res: Response) => {

    const body = req.body;
    const precio=req.params.precio;
    const descripcion=req.params.descripcion;
    const paginas=req.params.paginas;
    const cantidadProductos=req.params.cantidadProductos;
    const tipo=req.params.tipo;

    body.body = body;
    body.precio = precio;
    body.descripcion = descripcion;
    body.paginas = paginas;
    body.cantidadProductos = cantidadProductos;
    body.tipo = tipo;

    Plan.create(body).then(PlanDB => {
        res.json({
            ok: true,
            Plan: PlanDB
        });
    }).catch(err => {
        res.json(err)
    });

});

// Actualizar plantilla verificarToken,
planRutas.post('/update/:id',verificarToken,  (req: any, res: Response) => {

    const id = req.params.id;

    const plan = {
        body : req.body,
        precio:req.params.precio,
        descripcion:req.params.descripcion,
        paginas:req.params.paginas,
        cantidadProductos:req.params.cantidadProductos,
        tipo:req.params.tipo
    }

    Plan.findByIdAndUpdate(id, plan, { new: true }, (err, PlanDB) => {

        if (err) throw err;
        if (!PlanDB) {
            return res.json({
                ok: false,
                mensaje: 'Invalid data'
            })
        }
        res.json({
            ok: true,
            Plan
        });
    })
});

// Obtener plantillas
planRutas.get('/', async (req: any, res: Response) => {
    const plan = await Plan.find()
        .sort({ _id: -1 })
        .exec();

    res.json({
        ok: true,
        plan
    });
});


export default planRutas;